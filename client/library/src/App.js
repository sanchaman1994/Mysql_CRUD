import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Add, Books, Home, Update } from "./pages";

function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/update/:id" element={<Update />} />
					<Route path="/books" element={<Books />} />
					<Route path="/add" element={<Add />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
