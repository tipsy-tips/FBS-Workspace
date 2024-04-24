import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/pages/home/Home";
import Menu from "./components/pages/Menu/Menu";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/services" element={<h2>Services</h2>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
