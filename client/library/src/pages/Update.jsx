import React, { useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Update() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const bookId = pathname.split('/')[2];

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

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8800/books/${+bookId}`, book);
            navigate('/books');
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='form'>
            <h1>Update Book</h1>
            <input type="text" placeholder='Enter Title' name='title' onChange={(event) => handleChange(event)} />
            <input type="text" placeholder='Enter Description' name='desc' onChange={(event) => handleChange(event)} />
            <input type="text" placeholder='Enter Price' name='price' onChange={(event) => handleChange(event)} />
            <input type="text" placeholder='Enter cover' name='cover' onChange={(event) => handleChange(event)} />

            <button className='formButton' disabled={book.title !== "" ? false : true} onClick={handleUpdate}>Update Now</button>
        </div>
    )
}

