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

  // SUCCESS MESSAGE STATE
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle checkbox change
  const handleCheck = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  // ------------------ SUBMIT FORM ------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://adbliss.tech/api/intel-vpro-form", form);

      // SHOW SUCCESS BOX
      setShowSuccess(true);

      // RESET FORM
      setForm({
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

            {/* ⭐ SUCCESS MESSAGE BOX ⭐ */}
            {showSuccess && (
              <Box
                sx={{
                  backgroundColor: "#d9ede4",
                  borderRadius: "10px",
                  padding: "25px",
                  marginBottom: "25px",
                  position: "relative",
                }}
              >
                {/* Close icon */}
                <Typography
                  onClick={() => setShowSuccess(false)}
                  sx={{
                    position: "absolute",
                    right: 20,
                    top: 15,
                    cursor: "pointer",
                    fontSize: "26px",
                    fontWeight: "600",
                  }}
                >
                  ×
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "20px",
                    color: "#133b2d",
                    marginBottom: "6px",
                  }}
                >
                  We have received your request. We will get in touch with you ASAP.
                </Typography>

                <Typography sx={{ color: "#133b2d", fontSize: "17px" }}>
                  Download the white paper from{" "}
                  <a
                    href={import.meta.env.BASE_URL + "ebook.pdf"}
                    download
                    style={{
                      color: "#0078ff",
                      textDecoration: "underline",
                      fontWeight: "500",
                    }}
                  >
                    here
                  </a>
                  .
                </Typography>
              </Box>
            )}

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
                required
                sx={{
                  "& .MuiFormControlLabel-asterisk": { display: "none" },
                }}
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
                    By completing this form, you are confirming you are age 18
                    years or older.
                  </Typography>
                }
              />

              <FormControlLabel
                required
                sx={{
                  alignItems: "flex-start",
                  "& .MuiFormControlLabel-asterisk": { display: "none" },
                }}
                control={
                  <Checkbox
                    name="consent"
                    checked={form.consent}
                    onChange={handleCheck}
                    required
                  />
                }
                label={
                  <Typography fontSize="15px" lineHeight="22px">
                    By downloading the whitepaper, you agree to Intel and
                    Adbliss.tech contacting you further for marketing-related
                    communications. To learn about their practices, visit{" "}
                    <a
                      href="https://adbliss.tech/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#1976d2",
                        textDecoration: "underline",
                      }}
                    >
                      Adbliss Privacy Notice
                    </a>{" "}
                    and Intel’s{" "}
                    <a
                      href="https://www.intel.com/content/www/us/en/privacy/intel-privacy-notice.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#1976d2",
                        textDecoration: "underline",
                      }}
                    >
                      Privacy and Cookies
                    </a>{" "}
                    notices.
                  </Typography>
                }
              />
            </Box>

          </Box>
        </Box>
      </Container>

      {/* FOOTER */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#e6e6e6",
          padding: "30px 0",
          mt: 4,
        }}
      >
        <Box
          sx={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              color: "#000",
              lineHeight: 1.6,
              mb: 3,
            }}
          >
            © Intel® Corporation. Intel®, the Intel® logo, and other Intel®
            marks are trademarks of Intel® Corporation or its subsidiaries.
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#000",
              lineHeight: 1.6,
            }}
          >
            © 2025 AdBliss Digital Media LLP, Bangalore, Karnataka, India.
          </Typography>
        </Box>
      </Box>

    </Box>
  );
};

export default IntelVpro1;
