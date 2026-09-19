import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { scroller } from 'react-scroll';
import { profile } from '../data/profile';
import { ui } from '../data/ui';
import { useLocale } from '../context/LocaleContext';

const SCROLL_OFFSET = -80;

function scrollToSection(id) {
  scroller.scrollTo(id, { smooth: true, duration: 500, offset: SCROLL_OFFSET });
}

const Header = () => {
  const theme = useTheme();
  const { locale, setLocale, t } = useLocale();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isCompact = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = ui.nav.map((item) => (
    <Button
      key={item.id}
      color="inherit"
      href={`#${item.id}`}
      fullWidth={isCompact}
      onClick={(event) => {
        event.preventDefault();
        setDrawerOpen(false);
        scrollToSection(item.id);
      }}
      sx={{
        justifyContent: isCompact ? 'flex-start' : 'center',
        borderBottom: '2px solid transparent',
        borderRadius: isCompact ? 1 : 0,
        '&:hover': {
          borderBottomColor: isCompact ? 'transparent' : 'currentColor',
        },
      }}
    >
      {t(item.label)}
    </Button>
  ));

  const localeToggle = (
    <Box
      role="group"
      aria-label={t(ui.localeGroup)}
      sx={{ display: 'flex', ml: isCompact ? 0 : 1 }}
    >
      <Button
        color="inherit"
        size="small"
        aria-pressed={locale === 'en'}
        aria-label={t(ui.locale.switchToEn)}
        onClick={() => setLocale('en')}
        sx={{ minWidth: 40, fontWeight: locale === 'en' ? 700 : 400 }}
      >
        EN
      </Button>
      <Button
        color="inherit"
        size="small"
        aria-pressed={locale === 'es'}
        aria-label={t(ui.locale.switchToEs)}
        onClick={() => setLocale('es')}
        sx={{ minWidth: 40, fontWeight: locale === 'es' ? 700 : 400 }}
      >
        ES
      </Button>
    </Box>
  );

  return (
    <AppBar position="sticky" color="primary" elevation={2} component="header">
      <Toolbar component="nav" aria-label={t(ui.navAria)} sx={{ gap: 0.5 }}>
        <Typography
          component="a"
          href="#hero"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection('hero');
          }}
          variant="h6"
          color="inherit"
          sx={{ flexGrow: 1, textDecoration: 'none', fontWeight: 700 }}
        >
          {profile.name}
        </Typography>
        {isCompact ? (
          <>
            {localeToggle}
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setDrawerOpen(true)}
              aria-label={t(ui.menu.open)}
              aria-expanded={drawerOpen}
              aria-controls="mobile-navigation"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              id="mobile-navigation"
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              ModalProps={{ keepMounted: true }}
            >
              <Box
                sx={{
                  width: 240,
                  display: 'flex',
                  flexDirection: 'column',
                  p: 2,
                  gap: 0.5,
                }}
                role="presentation"
              >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                  <IconButton
                    onClick={() => setDrawerOpen(false)}
                    aria-label={t(ui.menu.close)}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                {navItems}
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            {navItems}
            {localeToggle}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
