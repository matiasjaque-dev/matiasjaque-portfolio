import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { sections } from '../utils/headerUtils';
import { Link as ScrollLink } from 'react-scroll';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import { Box, Drawer, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

const Header = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <HideOnScroll>
      <AppBar position="sticky" color="primary" elevation={2}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Matías Jaque
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{
                    width: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2,
                  }}
                >
                  {sections.map((section) => (
                    <ScrollLink
                      key={section.id}
                      to={section.id}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={toggleDrawer(false)}
                    >
                      <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                          my: 0.5,
                          color: '#000000',
                          borderColor: '#000000',
                          justifyContent: 'flex-start',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: (theme) =>
                              theme.palette.primary.main,
                            color: '#FFFFFF',
                            borderColor: (theme) => theme.palette.primary.dark,
                          },
                        }}
                      >
                        {section.label}
                      </Button>
                    </ScrollLink>
                  ))}
                </Box>
              </Drawer>
            </>
          ) : (
            sections.map((section) => (
              <ScrollLink
                key={section.id}
                to={section.id}
                smooth={true}
                duration={500}
                offset={-70}
              >
                <Button
                  sx={{
                    mx: 0.5,
                    color: 'white',
                    borderBottom: '2px solid transparent',
                    transition:
                      'background-color 0.3s, border-bottom-color 0.3s',
                    '&:hover': {
                      borderBottom: `2px solid white}`,
                    },
                  }}
                >
                  {section.label}
                </Button>
              </ScrollLink>
            ))
          )}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
