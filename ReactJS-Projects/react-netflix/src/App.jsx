import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Movie from "./Pages/Movie/Movie";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
