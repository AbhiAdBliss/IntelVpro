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
import VproBannerImg from "./assets/Dco.png";

const Dco = () => {
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

  // Show success message
  const [showSuccess, setShowSuccess] = useState(false);

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
      await axios.post("http://localhost:5001/api/intel-vpro-form", form);

      // Show success message box
      setShowSuccess(true);

      // ------------------ AUTO PDF DOWNLOAD ------------------
      const link = document.createElement("a");
      link.href = "/ebook.pdf";      // file in public folder
      link.download = "ebook.pdf";   // suggested filename
      link.click();

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
              Drive more value with the proven processor for data centers¹
            </Typography>
            <Typography
              variant="body1"
              mb={3}
              lineHeight={1.6}
              textAlign={"justify"}
            >
              AI workloads are here, and they’re getting bigger every day. As
              you refresh your data center infrastructure to accommodate these
              challenges, choosing among a wide variety of available options
              can be difficult. Instead of opting for the most processing power,
              take time and carefully evaluate your priorities against the specs
              to see how you can meet your AI needs while minimizing TCO.
            </Typography>
          </Box>

          {/* ---------------- RIGHT FORM ---------------- */}
          <Box sx={{ flex: 1 }}>
            
            {/* -------- SUCCESS MESSAGE BOX -------- */}
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
                {/* Close button */}
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
                    href="/ebook.pdf"
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

            {/* FORM */}
            <Box component="form" onSubmit={handleSubmit}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Fill out the form below to download exclusive e-book on
                "Balance cloud and data center investments for AI success"
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
                <Box key={index} mb={1.5}>
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
                {/* Checkbox 1 */}
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
                      By completing this form, you are confirming you are age 18
                      years or older.
                    </Typography>
                  }
                />

                {/* Checkbox 2 */}
                <FormControlLabel
                  control={
                    <Checkbox
                      name="consent"
                      checked={form.consent}
                      onChange={handleCheck}
                      required
                    />
                  }
                  sx={{ alignItems: "flex-start" }}
                  label={
                    <Typography fontSize="15px" lineHeight="22px">
                      By downloading the whitepaper, you agree to Intel and
                      Adbliss.tech contacting you further for marketing-related
                      communications. To learn about Adbliss.tech practices, you
                      can visit{" "}
                      <a
                        href="https://adbliss.tech/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#1976d2",
                          textDecoration: "underline",
                        }}
                      >
                        Adbliss Privacy notice
                      </a>
                      . To learn about Intel's practices, including how to manage
                      your preferences and settings, you can visit Intel's{" "}
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
        </Box>
      </Container>
    </Box>
  );
};

export default Dco;
