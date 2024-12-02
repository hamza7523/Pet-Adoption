import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./navbar";
import Home from "./Home";
import AdminPanel from "./AdminPanel";
import GiveUpPetForm from "./GiveUpPetForm";

function App() {
  const [requests, setRequests] = useState([]);

  const handleRequestSubmit = (formData) => {
    setRequests([...requests, formData]);
  };

  const handleRequestUpdate = (updatedRequests) => {
    setRequests(updatedRequests);
  };
  const handlePetSubmit = (petData) => {
    console.log("Pet Submitted for Adoption:", petData);
    // Add logic to store pet data in a database or show confirmation
  };

  return (
    <Router>
      <CssBaseline />
      {/* Navbar is fixed at the top */}
      <Navbar />
      <Box
        sx={{
          background: "linear-gradient(135deg, #f5f5f5, #e0e0e0)",
          minHeight: "100vh",
          paddingTop: "80px", // Offset for fixed Navbar height
          paddingX: "20px",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={<Home onRequestSubmit={handleRequestSubmit} />}
          />
          <Route
          path="/GiveUpPetForm"
          element={<GiveUpPetForm onSubmit={handlePetSubmit} />}
          />
          <Route
            path="/admin"
            element={
              <AdminPanel
                requests={requests}
                onRequestUpdate={handleRequestUpdate}
              />
            }
          />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
