import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";
import Navbar from "./navbar";
import Home from "./Home";
import AdminPanel from "./AdminPanel";
import LoginPage from "./LoginPage";
import GiveUpPetForm from "./GiveUpPetForm";
import ContactUs from "./ContactUs";
import AboutUs from "./Aboutus";


function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Tracks login status
  const [role, setRole] = useState(""); // Tracks user role (user/admin)

  const handleLogin = (selectedRole) => {
    setLoggedIn(true);
    setRole(selectedRole); // Set role based on login
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setRole(""); // Reset role
  };

  return (
    <Router>
      <CssBaseline />
      {loggedIn ? (
        <>
          <Navbar role={role} onLogout={handleLogout} />
          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <Box
                  sx={{
                    background: "linear-gradient(135deg, #f5f5f5, #e0e0e0)",
                    minHeight: "100vh",
                    paddingTop: "80px",
                    paddingX: "20px",
                  }}
                >
                  <Home />
                </Box>
              }
            />

            {/* Admin Panel Route (only accessible for admins) */}
            {role === "admin" && (
              <Route
                path="/admin"
                element={
                  <Box
                    sx={{
                      background: "linear-gradient(135deg, #f5f5f5, #e0e0e0)",
                      minHeight: "100vh",
                      paddingTop: "80px",
                      paddingX: "20px",
                    }}
                  >
                    <AdminPanel />
                  </Box>
                }
              />
            )}

            {/* Contact Us Route (accessible by all roles) */}
            <Route
              path="/ContactUs"
              element={
                <Box
                  sx={{
                    background: "linear-gradient(135deg, #f5f5f5, #e0e0e0)",
                    minHeight: "100vh",
                    paddingTop: "80px",
                    paddingX: "20px",
                  }}
                >
                  <ContactUs />
                </Box>
              }
            />
             <Route
              path="/Aboutus"
              element={
                <Box
                  sx={{
                    background: "linear-gradient(135deg, #f5f5f5, #e0e0e0)",
                    minHeight: "100vh",
                    paddingTop: "80px",
                    paddingX: "20px",
                  }}
                >
                  <AboutUs />
                </Box>
              }
            />

            {/* Give Up Pet Form Route */}
            <Route
              path="/GiveUpPetForm"
              element={
                <Box
                  sx={{
                    background: "linear-gradient(135deg, #f5f5f5, #e0e0e0)",
                    minHeight: "100vh",
                    paddingTop: "80px",
                    paddingX: "20px",
                  }}
                >
                  <GiveUpPetForm />
                </Box>
              }
            />

            {/* Redirect unauthorized users to home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      ) : (
        // Show Login Page if not logged in
        <LoginPage onLogin={handleLogin} />
      )}
    </Router>
  );
}

export default App;
