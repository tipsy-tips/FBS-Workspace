// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/frontend/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Not Found Page Uses **/}
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </Router>
  );
}
export default App;
