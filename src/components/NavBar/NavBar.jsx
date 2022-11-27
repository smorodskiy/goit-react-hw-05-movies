import React from 'react';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Movies', path: '/movies' },
];

const NavBar = () => {
  return (
    <AppBar component="nav" sx={{ position: 'relative', marginBottom: 2 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: 'block' }}
        >
          Kinoteka
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map(({ name, path }) => (
            <Link to={`${path}`} key={name} sx={{ color: '#fff' }}>
              {name}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;