import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role is "user"
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Simple validation for demonstration
    if (username === "" || password === "") {
      setError("Please fill in all fields");
      return;
    }

    // Pass the selected role to App.js
    onLogin(role);
  };
  

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f9f9f9, #ececec)",
      }}
    >
      <Box
        sx={{
          width: "400px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Login
        </Typography>

        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <FormControl component="fieldset" sx={{ marginTop: "20px" }}>
          <FormLabel component="legend">Login as:</FormLabel>
          <RadioGroup
            row
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <FormControlLabel
              value="user"
              control={<Radio />}
              label="User"
            />
            <FormControlLabel
              value="admin"
              control={<Radio />}
              label="Administrator"
            />
          </RadioGroup>
        </FormControl>

        {error && (
          <Typography
            color="error"
            sx={{ marginTop: "10px", textAlign: "center" }}
          >
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: "20px" }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default LoginPage;
