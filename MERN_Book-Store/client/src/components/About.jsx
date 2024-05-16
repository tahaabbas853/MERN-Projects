// import React from 'react'
// import {Box, Typography} from '@mui/material';
// const About = () => {
//   return (
//     <div>
//       <Box display={'flex'} flexDirection={'column'} 
//       alignItems={'center'}>
//         <Typography sx={{marginTop:15}}>
//           This is CRUD Application using MERN stack
//         </Typography>

//       </Box>
//     </div>
//   )
// }

// export default About;

import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="80vh">
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          TS Book Store is a comprehensive CRUD application built using the MERN stack. It allows you to browse, add, update, and delete books seamlessly.
          We aim to provide an easy-to-use platform for book enthusiasts to manage their collections and discover new reads.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
