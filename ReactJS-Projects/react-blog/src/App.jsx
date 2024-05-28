import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/frontend/Home";
import React from "react";
import "./index.css";
import Single from "./components/pages/frontend/Single";
import PostDB from "./components/pages/backend/post/PostDB";
import Navigation from "./components/partials/Navigation";
import Login from "./components/pages/access/Login";
import ProtectedRoute from "./components/pages/access/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "react-query";
import { StoreProvider } from "./store/StoreContext";
import Category from "./components/pages/backend/Category/Category";
import Tag from "./components/pages/backend/Tag/Tag";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/single" element={<Single />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/database/"
                element={
                  <ProtectedRoute>
                    <Navigation />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/database/post"
                element={
                  <ProtectedRoute>
                    <PostDB />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/database/category"
                element={
                  <ProtectedRoute>
                    <Category />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/database/tag"
                element={
                  <ProtectedRoute>
                    <Tag />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}
export default App;
