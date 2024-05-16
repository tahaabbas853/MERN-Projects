import React, { useState } from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography, colors} from '@mui/material';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx={{backgroundColor: '#232F3D'}} position='sticky'> 
           <Toolbar>
            <NavLink to="/" style={{color:'white'}}>
             <Typography>
                 <LibraryBooksRoundedIcon />
                </Typography>
                </NavLink>
                <Tabs sx={{ml:'auto'}} textColor='inherit' indicatorColor='primary' value={value} 
                onChange={(e, val) => (setValue(val))}>
                  
                    <Tab LinkComponent={NavLink} to="/books" label="Books"/>
                    <Tab LinkComponent={NavLink} to="/addbooks" label="Add Book"/>
                    <Tab LinkComponent={NavLink} to="about" label="About"/>
                    <Tab LinkComponent={NavLink} to="contact" label="Contact"/>
                </Tabs>
           </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header;