import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { sections } from '../utils/headerUtils';
import { Link as ScrollLink } from 'react-scroll';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <AppBar position="sticky" color="primary" elevation={2}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Matías Jaque
        </Typography>
        {sections.map((section) => (
          <ScrollLink
            key={section.id}
            to={section.id}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <Button color="inherit">{section.label}</Button>
          </ScrollLink>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
