import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import Footer from "./Footer";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("http://localhost:5000/api/register", formData);
      setStatus(res.data.success);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
  console.error("Error submitting form:", err);
  setStatus("Failed to send. Try again!");
}
  };

  return (
    <Box>
    <Box
      sx={{
        background: "linear-gradient(135deg, #f6f6f6ff, #87cfebff)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: "white",
          borderRadius: 4,
          boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
          p: 5,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", color: "#4f46e5" }}>
          Registration Form
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            type="number"
            variant="outlined"
            value={formData.phone}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            variant="outlined"
            value={formData.message}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #617cf6ff, #61b4f4ff)",
              px: 5,
              py: 1.2,
              fontWeight: "bold",
            }}
          >
            Submit
          </Button>
        </form>

        {status && (
          <Typography sx={{ mt: 3, color: "#4f46e5", fontWeight: 500 }}>{status}</Typography>
        )}
      </Container>
      
    </Box>


<Footer/>
</Box>

  );
}
