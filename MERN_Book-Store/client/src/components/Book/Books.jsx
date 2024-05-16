import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from './Book';
import "./Book.css";

const URL = "http://localhost:7000/books/getall";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(URL);
                console.log("Data fetched successfully:", response.data);
                setBooks(response.data); // Update the books state with fetched data
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchBooks();
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    const deleteBook = (id) => {
        setBooks(books.filter(book => book._id !== id));
    };

    console.log("Books state:", books);

    return (
        <div style={{ minHeight: '80vh' }}>
            <ul>
                {books.map((book, i) => (
                    <li key={i}>
                        <Book book={book} onDelete={deleteBook} />
                    </li>
                ))}
            </ul>
        </div>  
    );
}

export default Books;
