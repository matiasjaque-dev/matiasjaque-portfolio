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
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Link as ScrollLink } from 'react-scroll';
import { profile } from '../data/profile';
import { ui } from '../data/ui';
import { useLocale } from '../context/LocaleContext';

const SCROLL_OFFSET = -80;

const Header = () => {
  const theme = useTheme();
  const { locale, setLocale, t } = useLocale();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isCompact = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = ui.nav.map((item) => (
    <ScrollLink
      key={item.id}
      to={item.id}
      smooth
      duration={500}
      offset={SCROLL_OFFSET}
      onClick={() => setDrawerOpen(false)}
    >
      <Button
        color="inherit"
        fullWidth={isCompact}
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
    </ScrollLink>
  ));

  const localeToggle = (
    <Box sx={{ display: 'flex', ml: isCompact ? 0 : 1 }}>
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
      <Toolbar component="nav" aria-label={profile.name} sx={{ gap: 0.5 }}>
        <Typography
          component={ScrollLink}
          to="hero"
          smooth
          duration={500}
          offset={SCROLL_OFFSET}
          variant="h6"
          sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 700 }}
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
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box
                sx={{
                  width: 220,
                  display: 'flex',
                  flexDirection: 'column',
                  p: 2,
                  gap: 0.5,
                }}
                role="presentation"
              >
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
