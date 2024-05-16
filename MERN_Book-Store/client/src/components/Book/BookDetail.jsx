import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, ButtonBase, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BookDetail = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({});
    const [checked, setChecked] = useState(false);
    const id = useParams().id;
    console.log(id);
    useEffect(() => {
        const fetchHandler = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/books/getone/${id}`);
                console.log('Response data:', response.data);
                setInputs(response.data); 
            } catch (error) {
                console.error('Error fetching book:', error);
            }
        };
        console.log('Fetching book with id:', id);
        fetchHandler();
    }, [id]);
    
    const sendRequest = async() => {
        await axios.put(`http://localhost:7000/books/update/${id}`, {
          name: String(inputs.name),
          author: String(inputs.author),
          description: String(inputs.description),
          price: Number(inputs.price),
          image: String(inputs.image),
          available: Boolean(checked)
        }).then((res)=>res.data);
      }
    const handleChange = (e) => {
        console.log(e);
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
        })).then((res) => res.data);
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs, checked);
        sendRequest().then(()=>history('/books'));
    };
    console.log(inputs);

  return (
    <div>
    {inputs && (
        <form onSubmit={handleSubmit}>
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                maxWidth={700}
                alignItems={'left'}
                marginLeft={'auto'}
                marginRight={'auto'}
                margin={10}
            >
                <FormLabel>Name</FormLabel>
                <TextField value={inputs.name || ''} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name'/>
                
                <FormLabel>Author</FormLabel>
                <TextField value={inputs.author || ''} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='author'/>
                
                <FormLabel>Description</FormLabel>
                <TextField value={inputs.description || ''} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description'/>
                
                <FormLabel>Price</FormLabel>
                <TextField value={inputs.price || ''} onChange={handleChange} type='number' margin='normal' fullWidth variant='outlined' name='price'/>
                
                <FormLabel>Image</FormLabel>
                <TextField value={inputs.image || ''} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image'/>
                <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)}/>} label='Available' />
                
                <Button variant='contained' type='submit'>Update Book</Button>
            </Box>
        </form>
    )}
</div>
);
}

export default BookDetail;