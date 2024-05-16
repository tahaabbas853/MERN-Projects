import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" sx={{ mt: 'auto', backgroundColor: '#232F3D' }}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit" sx={{ flexGrow: 1, textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} TS Book Store. All rights reserved.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
