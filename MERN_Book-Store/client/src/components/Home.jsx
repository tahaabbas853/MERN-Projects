// import React from 'react'
// import {Button, Box, Typography} from '@mui/material';
// import { Link } from 'react-router-dom';
// const Home = () => {
//   return (
//     <div>
//        <Box display={'flex'} flexDirection={'column'} 
//       alignItems={'center'}>
//         <Button LinkComponent={Link} to="/books" sx={{marginTop:15, background: 'orangered'}} variant='contained'>
//         <Typography variant='h4' sx={{m:'auto'}}>
//          Click here to view all Books....
//         </Typography>
//         </Button>

//       </Box>
//     </div>
//   )
// }

// export default Home;
import React from 'react';
import { Button, Box, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        minHeight="80vh"
      >
        <Box width="80%" textAlign="center">
          <Typography variant="h2" gutterBottom>
            Welcome to the TS Book Store
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            Explore an extensive collection of books spanning various genres. 
            Whether you're into fiction or non-fiction, we've got something special for every type of reader.
          </Typography>
          <Button 
            LinkComponent={Link} 
            to="/books" 
            sx={{ mt: 4, background: 'orangered' }} 
            variant="contained" 
            size="large"
          >
            <Typography variant="h5" sx={{ m: 'auto' }}>
              View All Books
            </Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
