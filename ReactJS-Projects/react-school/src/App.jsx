import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from "./components/pages/developer/database/Student";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/database" element={<Student />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
