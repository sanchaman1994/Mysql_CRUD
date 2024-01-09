import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "dukrishna",
	database: "Library",
});
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
	res.json("Hello this is backend mysql!!!!");
});

app.get("/books", (req, res) => {
	const query = "SELECT * FROM   books";
	db.query(query, (err, data) => {
		if (err) {
			return res.json(err);
		} else {
			return res.json(data);
		}
	});
});

app.post("/books", (req, res) => {
	const query = "INSERT INTO books (`title`,`desc`,`cover`,`price`) VALUES (?)";
	const values = [
		req.body.title,
		req.body.desc,
		req.body.cover,
		req.body.price,
	];
	db.query(query, [values], (err, data) => {
		if (err) {
			console.log(err);
			return res.json(err);
		} else {
			return res.json("books has been created su;ccessfuly");
		}
	});
});

app.delete("/books/:id", (req, res) => {
	const bookId = req.params.id;
	const query = "DELETE FROM books WHERE ID = ?";
	db.query(query, [bookId], (err, data) => {
		err ? res.json(err) : res.json(" Book deleted sucessfuly");
	});
});

app.put("/books/:id", (req, res) => {
	const bookId = req.params.id;
	const values = [
		req.body.title,
		req.body.desc,
		req.body.cover,
		req.body.price,
	];
	console.log("put query ", bookId);
	const query =
		"UPDATE books SET `title`=?, `desc`=?,`cover`=? ,`price`=? WHERE ID = ?";

	db.query(query, [...values, bookId], (err, data) => {
		if (err) {
			console.log(err);
			return res.json(err);
		} else {
			return res.json("books has been created su;ccessfuly");
		}
	});
});

app.listen(8800, () => {
	console.log("connected to backend");
});
