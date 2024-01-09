import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Add() {
    const navigate = useNavigate();

    const [book, setBook] = useState({
        title: '',
        desc: '',
        cover: '',
        price: '',
    });

    function handleChange(e) {
        setBook((prev) => ({
            ...prev, [e.target.name]: [e.target.value]
        }));
    }
    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8800/books', book);
            navigate('/books');
        } catch (err) {
            console.log(err);
        }
    }
    console.log(book)
    return (
        <div className='form'>
            <h1>Add New Book</h1>
            <input type="text" placeholder='Enter Title' name='title' onChange={(event) => handleChange(event)} />
            <input type="text" placeholder='Enter Description' name='desc' onChange={(event) => handleChange(event)} />
            <input type="number" placeholder='Enter Price' name='price' onChange={(event) => handleChange(event)} />
            <input type="text" placeholder='Enter cover' name='cover' onChange={(event) => handleChange(event)} />
            <button onClick={handleAdd}>Add Now</button>
        </div>
    )
}

