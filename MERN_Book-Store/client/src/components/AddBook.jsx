import { Box, Button, ButtonBase, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const history = useNavigate();
  const [checked, setChecked] = useState(false);
  const [inputs, setInputs] = useState({
    name:"",
    author: "",
    description: "",
    price: "",
    image: "",
  })

  
  const handleChnage = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    })).then((res) => res.data);
  }

  const sendRequest = async() => {
    await axios.post("http://localhost:7000/books/create", {
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(checked)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(()=>history('/books'));
  }

  return (
   <>
   <form onSubmit={handleSubmit}>
    <Box display={'flex'} 
    flexDirection={'column'}
    justifyContent={'center'}
    maxWidth={700}
    alignItems={'left'}
    marginLeft={'auto'}
    marginRight={'auto'}
    margin={10}>
    <FormLabel>Name</FormLabel>
    <TextField value={inputs.name} onChange={handleChnage} margin='normal' fullWidth variant='outlined' name='name'/>
    
    <FormLabel>Author</FormLabel>
    <TextField value={inputs.author} onChange={handleChnage} margin='normal' fullWidth variant='outlined' name='author'/>
    
    <FormLabel>Description</FormLabel>
    <TextField value={inputs.description} onChange={handleChnage} margin='normal' fullWidth variant='outlined' name='description'/>
    
    <FormLabel>Price</FormLabel>
    <TextField value={inputs.price} onChange={handleChnage} type='number' margin='normal' fullWidth variant='outlined' name='price'/>
    
    <FormLabel>Image</FormLabel>
    <TextField value={inputs.image} onChange={handleChnage} margin='normal' fullWidth variant='outlined' name='image'/>
    <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)}/>} label='Available' />
    
     <Button variant='contained' type='submit'>Add Book</Button>
    </Box>
   </form>
   </>
  )
}

export default AddBook;