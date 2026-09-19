import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { ui } from '../data/ui';

const LocaleContext = createContext(null);
const STORAGE_KEY = 'portfolio-locale';

export function pickCopy(value, locale) {
  if (value && typeof value === 'object' && ('en' in value || 'es' in value)) {
    return value[locale] ?? value.en ?? value.es ?? '';
  }
  return value;
}

function syncDocumentMeta(locale) {
  const title = pickCopy(ui.meta.title, locale);
  const description = pickCopy(ui.meta.description, locale);
  document.title = title;
  document.documentElement.lang = locale === 'es' ? 'es' : 'en';

  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) {
    descriptionTag.setAttribute('content', description);
  }

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) {
    ogLocale.setAttribute('content', locale === 'es' ? 'es_CL' : 'en_US');
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', description);
  }
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState('en');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'es') {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    syncDocumentMeta(locale);
  }, [locale]);

  const value = useMemo(() => {
    const setLocale = (next) => {
      setLocaleState(next);
      window.localStorage.setItem(STORAGE_KEY, next);
    };

    return {
      locale,
      setLocale,
      t: (copy) => pickCopy(copy, locale),
    };
  }, [locale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return context;
}
