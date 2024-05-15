import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "./store/StoreContext";
import Home from "./components/pages/developer/frontend/Home";
import Navigation from "./components/partials/Navigation";
import CounterDB from "./components/pages/developer/backend/counter/CounterDB";
import ProjectsDB from "./components/pages/developer/backend/projects/ProjectsDB";
import SkillsDBList from "./components/pages/developer/backend/skills/SkillsDBList";
import SkillsDBImage from "./components/pages/developer/backend/skills-image/SkillsDBImage";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path="/database/" element={<Navigation />}></Route>
              <Route path="/database/counter" element={<CounterDB />}></Route>
              <Route path="/database/skills" element={<SkillsDBList />}></Route>
              <Route
                path="/database/skills-image"
                element={<SkillsDBImage />}
              ></Route>
              <Route path="/database/projects" element={<ProjectsDB />}></Route>
              <Route path="/home" element={<Home />}></Route>
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}
export default App;
