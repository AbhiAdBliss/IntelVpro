import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Container,
} from "@mui/material";
import axios from "axios";
import VproBannerImg from "./assets/Vpro1.png";

const IntelVpro1 = () => {
  // ------------------ FORM STATES ------------------
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    jobLevel: "",
    jobTitle: "",
    city: "",
    ageConfirmed: false,
    consent: false,
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle checkbox
  const handleCheck = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  // ------------------ SUBMIT FORM ------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5001/api/intel-vpro-form",
        form
      );

      alert("Form submitted successfully!");
      console.log("Success:", res.data);
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    }
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
      {/* ---------------------------- BANNER ---------------------------- */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          background: "#f3f3f3",
        }}
      >
        <Box
          component="img"
          src={VproBannerImg}
          alt="Intel vPro Banner"
          sx={{
            width: { xs: "95%", md: "80%" },
            maxWidth: "1600px",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* ---------------------------- MAIN SECTION ---------------------------- */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
          }}
        >
          {/* ---------------- LEFT CONTENT ---------------- */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" fontWeight={400} mb={1}>
              Redefine what’s possible for your business
            </Typography>
            <Typography variant="body1" mb={3} lineHeight={1.6}>
              Give your people the tools to solve everyday challenges and meet
              future demands with business PCs powered by Intel® Core™ Ultra
              200V series processors and built on Intel vPro®.
            </Typography>

            <Typography variant="h4" fontWeight={400} mb={1}>
              Win the day with business PCs that mean business
            </Typography>
            <Typography variant="body1" mb={3} lineHeight={1.6}>
              See how choosing today’s standard for business PCs—Intel® Core™
              Ultra 200V series processors—helps you create a more productive
              and engaged workforce.
            </Typography>

            <Typography variant="h5" fontWeight={400}>
              Empower your workforce
            </Typography>
            <Typography variant="body1" mb={3} lineHeight={1.6}>
              Our AI-enabled business PCs are built for today’s workloads.
            </Typography>

            <Typography variant="h5" fontWeight={400}>
              Streamline enterprise fleet management
            </Typography>
            <Typography variant="body1" mb={3} lineHeight={1.6}>
              Shrink your TCO with business PCs designed to ease IT burdens.
            </Typography>

            <Typography variant="h5" fontWeight={400}>
              Protect your people and data
            </Typography>
            <Typography variant="body1" mb={3} lineHeight={1.6}>
              Security features built into firmware and silicon processors.
            </Typography>

            <Typography variant="h5" fontWeight={400}>
              Integrate with your current systems
            </Typography>
            <Typography variant="body1" mb={3} lineHeight={1.6}>
              Built on a stable, trusted x86 platform.
            </Typography>
          </Box>

          {/* ---------------- RIGHT FORM ---------------- */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ flex: 1, display: "flex", flexDirection: "column" }}
          >
            <Typography variant="body1" sx={{ mb: 2 }}>
              Fill out the form below to download the exclusive whitepaper.
            </Typography>

            {/* FORM INPUTS */}
            {[
              { label: "First Name*", name: "firstName" },
              { label: "Last Name*", name: "lastName" },
              { label: "Business Email*", name: "email", type: "email" },
              { label: "Business Phone*", name: "phone", type: "tel" },
              { label: "Company*", name: "company" },
              { label: "Industry*", name: "industry" },
              { label: "Job Level*", name: "jobLevel" },
              { label: "Job Title*", name: "jobTitle" },
              { label: "City*", name: "city" },
            ].map((field, index) => (
              <Box key={index}>
                <Typography fontSize="17px" fontWeight={500} mb={0.2}>
                  {field.label}
                </Typography>

                <TextField
                  name={field.name}
                  type={field.type || "text"}
                  fullWidth
                  size="small"
                  required
                  value={form[field.name]}
                  onChange={handleChange}
                />
              </Box>
            ))}

            {/* SUBMIT BUTTON */}
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#007bff",
                "&:hover": { backgroundColor: "#0056b3" },
                textTransform: "none",
                py: 1.5,
                mt: 2,
                mb: 2,
                width: "120px",
              }}
            >
              Submit
            </Button>

            {/* CHECKBOXES */}
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    name="ageConfirmed"
                    checked={form.ageConfirmed}
                    onChange={handleCheck}
                    required
                  />
                }
                label={
                  <Typography fontSize="15px">
                    By completing this form, you confirm you are 18 years or
                    older.
                  </Typography>
                }
              />

              <FormControlLabel
                control={
                  <Checkbox
                    name="consent"
                    checked={form.consent}
                    onChange={handleCheck}
                    required
                  />
                }
                label={
                  <Typography fontSize="15px">
                    By downloading the whitepaper, you agree to Intel® and
                    BusinessTech contacting you.
                  </Typography>
                }
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default IntelVpro1;
