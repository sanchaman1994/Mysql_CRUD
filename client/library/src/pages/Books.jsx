import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";




export default function Books() {
	const [books, setBooks] = useState();

	const deleteBook = async (id) => {
		console.log(id);
		await axios.delete(`http://localhost:8800/books/${id}`);
		window.location.reload();
	}

	useEffect(() => {
		const fetchAllBook = async () => {
			try {
				const res = await axios.get("http://localhost:8800/books");
				setBooks(res.data);
				// console.log(res.data);
			} catch (err) {
				console.log(err);
			}
		}
		fetchAllBook();
	}, [])

	return (
		<div>
			<h1>Library Books</h1>
			<div className="books">

				{
					books ?
						books.map((book) => (
							<div className="book" key={book.id}>
								{book.cover && <img src={book.cover} alt="sdf" />}
								<h2>{book.title}</h2>
								<p>{book.desc}</p>
								<p>Rs {book.price}</p>
								<button className="delete" onClick={() => deleteBook(book.id)}>Delete</button>

								<button className="update"><Link to={`/update/${book.id}`}>Update</Link></button>
							</div>
						))
						:
						<p>Loading</p>
				}
			</div>
			<button><Link to={"/add"} >Add New book</Link></button>
		</div>
	)
}
