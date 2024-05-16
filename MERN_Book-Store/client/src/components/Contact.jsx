// import React from 'react'

// const Contact = () => {
//   return (
//     <div>Contact page</div>
//   )
// }

// export default Contact;


import React from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="80vh">
        <Typography variant="h3" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          We'd love to hear from you! If you have any questions or feedback, feel free to reach out.
        </Typography>
        <Box component="form" sx={{ mt: 4, width: '100%', maxWidth: '500px' }}>
          <TextField fullWidth label="Name" variant="outlined" margin="normal" />
          <TextField fullWidth label="Email" variant="outlined" margin="normal" />
          <TextField fullWidth label="Message" variant="outlined" margin="normal" multiline rows={4} />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Send Message
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
