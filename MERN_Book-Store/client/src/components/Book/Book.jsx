import { Button } from '@mui/material';
import React from 'react';
import "./Book.css";
import axios from 'axios'; // Don't forget to import axios
import { Link, useNavigate } from 'react-router-dom';

const Book = (props) => {
    const {_id, name, author, description, price , available, image} = props.book;
    const { onDelete } = props;
    const history = useNavigate();

    const deleteHandler = async () => {
        try {
            await axios.delete(`http://localhost:7000/books/delete/${_id}`);
            onDelete(_id); // Call the onDelete function passed from the parent component
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };
    
    return (
        <>
            <div className='card'>
                <img src={image} alt={name}/>
                <article> By {author}</article>
                <h3>{name}</h3>
                <p>{description}</p>
                <h3> Rs {price}</h3>
                <Button LinkComponent={Link} to={`/books/${_id}`} sx={{m:'auto'}}>Update</Button>
                <Button onClick={deleteHandler} sx={{m:'auto'}}>Delete</Button>
            </div>
        </>
    );
};

export default Book;
