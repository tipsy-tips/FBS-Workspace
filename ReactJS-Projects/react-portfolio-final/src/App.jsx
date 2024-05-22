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
import Login from "./components/pages/developer/access/Login";
import ForgotPassword from "./components/pages/developer/access/ForgotPassword";
import CreatePassword from "./components/pages/developer/access/CreatePassword";
import Users from "./components/pages/developer/backend/Users/Users";
import PageNotFound from "./components/partials/PageNotFound";
import ProtectedRoute from "./components/pages/developer/access/ProtectedRoute";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route
                path="/database/"
                element={
                  <ProtectedRoute>
                    <Navigation />
                  </ProtectedRoute>
                }
              ></Route>

              <Route
                path="/database/users"
                element={
                  <ProtectedRoute>
                    <Users />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/database/counter"
                element={
                  <ProtectedRoute>
                    <CounterDB />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/database/skills"
                element={
                  <ProtectedRoute>
                    <SkillsDBList />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/database/skills-image"
                element={
                  <ProtectedRoute>
                    <SkillsDBImage />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/database/projects"
                element={
                  <ProtectedRoute>
                    <ProjectsDB />
                  </ProtectedRoute>
                }
              ></Route>

              <Route path="/home" element={<Home />}></Route>
              <Route path="/*" element={<PageNotFound />}></Route>

              <Route path="/login" element={<Login />}></Route>
              <Route
                path="/create-password"
                element={<CreatePassword />}
              ></Route>
              <Route
                path="/forgot-password"
                element={<ForgotPassword />}
              ></Route>
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}
export default App;
