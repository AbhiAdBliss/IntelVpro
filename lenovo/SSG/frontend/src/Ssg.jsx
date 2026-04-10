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
import Ssg1 from "../src/assets/Ssg.png";
import logo from "../src/assets/lenovo-logo.png";


import LaptopIcon from "@mui/icons-material/LaptopMac";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SecurityIcon from "@mui/icons-material/Security";

const Ssg = () => {
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

  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const API =
  window.location.hostname === "localhost"
    ? "http://localhost:5005"  
    : "https://adbliss.tech";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleCheck = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    const personalEmailRegex =
      /@(gmail|yahoo|outlook|hotmail|live|icloud|aol|protonmail)\./i;
    if (personalEmailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid business email address.";
    }

    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      newErrors.phone =
        "Please enter a valid phone number (at least 10 digits).";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);

const response = await axios.post(
  `${API}/ssg-api/lenovo-api/lenovo-ssg-form`,
  form,
  {
    headers: {
      "Content-Type": "application/json",
    },
    responseType: "blob",
  }
);

const blob = new Blob([response.data], { type: "application/pdf" });

const url = window.URL.createObjectURL(blob);
const link = document.createElement("a");
link.href = url;
link.download = "AI-Enabled-Workforce-Solution-Guide-ww-en.pdf";
document.body.appendChild(link);
link.click();
link.remove();

      setShowSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
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
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: <LaptopIcon sx={{ fontSize: { xs: 32, md: 40 } }} />,
      title: "Initiate transformation",
      desc: `Accelerate your digital transformation while lowering IT costs through superior managed services and our Gen AI powered Care of One delivery platform. Support and scale your portfolio to match your business' needs without disruption while elevating the employee experience.`,
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: { xs: 32, md: 40 } }} />,
      title: "Improve productivity",
      desc: `Arm every employee with the tools and technologies they need to maximize their productivity while providing them a superior hyper-personalized experience. Our Gen AI powered Care of One delivery platform actively adapts to support their evolving needs – at home, in the office or on the go.`,
    },
    {
      icon: <SecurityIcon sx={{ fontSize: { xs: 32, md: 40 } }} />,
      title: "Security and trust",
      desc: `Take control of your digital workplace. Gain peace of mind by partnering with a trusted service provider that gives you reliably compliant and secure services across the entire technology lifecycle.`,
    },
  ];

  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
      {/* ================= BANNER ================= */}
     <Box sx={{ width: "100%", mt: { xs: 2, md: 4 } }}>
  <Box sx={{ position: "relative", width: "100%" }}>
    
    {/* MAIN IMAGE */}
    <Box
      component="img"
      src={Ssg1}
      alt="Lenovo SSG Banner"
      sx={{
        width: "100%",
        height: { xs: 200, sm: 320, md: 450, lg: 600 },
        objectFit: "cover",
        display: "block",
      }}
    />

    {/* 🔥 LEFT TOP LOGO */}
   <Box
  component="img"
  src={logo}   // ✅ correct way
  alt="Lenovo Tech Today"
  sx={{
    position: "absolute",
    top: { xs: 10, sm: 15, md: 20 },
    left: { xs: 10, sm: 15, md: 30 },
    width: { xs: 120, sm: 160, md: 220 },
    backgroundColor: "#fff",
    padding: "6px",
    borderRadius: "6px",
  }}
/>

  </Box>
</Box>

      {/* ================= SUCCESS MESSAGE ================= */}
     {showSuccess && (
  <Box
    sx={{
      width: "100%",
      backgroundColor: "#dff1e8",
      border: "1px solid #b7dfc9",
      borderRadius: "12px",
      mt: 3,
    }}
  >
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          py: 3,
        }}
      >
        <Box>
         <Box>
 <Typography
  sx={{
    fontSize: "25px",
    fontWeight: 700,
    color: "#143d2b",
    mb: 0.5,
  }}
>
  Thank you for your submission
</Typography>

  <Typography
  sx={{
    fontSize: "18px",
    fontWeight: 600,
    color: "#143d2b",
  }}
>
  We have received your request. We will get in touch with you ASAP.
</Typography>
</Box>

          <Typography fontSize="16px" color="#143d2b">
            Download the ebook from{" "}
           <a
  href={`${API}/files/AI-Enabled-Workforce-Solution-Guide-ww-en.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    color: "#0a66ff",
    fontWeight: 500,
    textDecoration: "underline",
  }}
>
  here
</a>
            .
          </Typography>
        </Box>

        <Box
          onClick={() => setShowSuccess(false)}
          sx={{
            cursor: "pointer",
            fontSize: "26px",
            fontWeight: 600,
          }}
        >
          ×
        </Box>
      </Box>
    </Container>
  </Box>
)}

      {/* ================= MAIN SECTION ================= */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 5 }, px: { xs: 2, sm: 3 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* LEFT CONTENT */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="h4"
              mb={1}
              mt={2}
              sx={{ fontSize: { xs: "1.4rem", sm: "1.75rem", md: "2rem" } , mt:3  }}
            >
             Smarter actively adapts to each employee’s unique needs
            </Typography>

            <Typography
              mb={2}
              lineHeight={1.6}
              mt={3}
              textAlign="justify"
              sx={{ fontSize: { xs: "14px", md: "16px" } , mt:1 }}
            >
             Enable hyper-personalized workplace experiences, maximize productivity, and optimize costs with Gen AI-powered Digital Workplace Solutions.
            </Typography>

            <Typography
              variant="h4"
              mb={1}
              lineHeight={1.6}
              textAlign="justify"
              sx={{ fontSize: { xs: "1.4rem", sm: "1.75rem", md: "2rem" } , mt:4  }}
            >
             Set new standards for employee experience
            </Typography>
            <Typography
              mb={1}
              lineHeight={1.6}
              textAlign="justify"
              sx={{ fontSize: { xs: "14px", md: "16px" }, mt:1 }}
            >
          Take hyper-personalized experiences to a new level with our flexible suite of managed and professional services – all delivered by Care of One™, our Gen AI-powered platform.
            </Typography>

            <Typography
              variant="h4"
              fontWeight={500}
              mb={1}
              lineHeight={1.6}
              textAlign="justify"
              sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.75rem" } , mt:4 }}
            >
              Focusing on business, not maintenance
            </Typography>
            <Typography
              mb={1}
              lineHeight={1.6}
              textAlign="justify"
              sx={{ fontSize: { xs: "14px", md: "16px" } , mt:1 }}
            >
              By leveraging Lenovo’s expert team to handle the operations and maintenance of over 450 devices, a leading optics manufacturer ensures streamlined operations, allowing them to dedicate additional resources to R&D, innovation, and business expansion, thus driving growth and staying competitive in the market.
            </Typography>
            <Box mt={3} display="flex" justifyContent="center"></Box>

            {/* section 2 left */}
            <Box sx={{ py: { xs: 4, md: 8 } }}>
              <Container maxWidth="lg" disableGutters>
               <Typography
  variant="h3"
  fontWeight={700}
  mb={{ xs: 4, md: 6 }}
  color="#2d0c1f"
  sx={{
    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
    textAlign: "center",
    width: "100%",            
    mx: "auto", 
    mb:4              
  }}
>
  Bring your vision to life
</Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: { xs: 4, md: 6 },
                  }}
                >
                  {features.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        textAlign: "center",
                        maxWidth: { xs: "100%", sm: "500px", md: "600px" },
                        margin: "0 auto",
                        px: { xs: 1, sm: 0 },
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 64, md: 80 },
                          height: { xs: 64, md: 80 },
                          border: "2px solid #c62828",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#c62828",
                          margin: "0 auto",
                          mb: 2,
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Typography
                        variant="h6"
                        fontWeight={700}
                        mb={1}
                        color="#2d0c1f"
                        sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        fontSize={{ xs: "13px", md: "15px" }}
                        lineHeight="1.7"
                        color="#4a4a4a"
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Container>
            </Box>
          </Box>

          {/* RIGHT FORM */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box component="form" onSubmit={handleSubmit}>
           <Typography
  sx={{
    fontSize: { xs: "16px", sm: "20px", md: "35px" }, 
    fontWeight: 600,
    lineHeight: 1.4,
    textAlign: { xs: "center", md: "left" }, 
    px: { xs: 2, md: 0 }, 
    mb:2
  }}
>
 Ready to create the digital workplace of the future – today?
</Typography>

              <Typography
                sx={{ mb: 4, fontSize: { xs: "14px", md: "16px" } }}
                textAlign="justify"
              >
           We’re here to help you find the right solution for your business.
              </Typography>

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
                <Box key={index} mb={1.5} sx={{ mt: 2 }}>
                  <Typography fontSize={{ xs: "14px", md: "16px" }} fontWeight={500}>
                    {field.label}
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    required
                    name={field.name}
                    type={field.type || "text"}
                    value={form[field.name]}
                    onChange={handleChange}
                    error={!!errors[field.name]}
                    helperText={errors[field.name]}
                    sx={{ width: { xs: "100%", sm: "85%", md: "70%" } }}
                  />
                </Box>
              ))}

              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  mt: 2,
                  mb: 2,
                  width: { xs: "100%", sm: "140px" },
                  textTransform: "none",
                  fontSize: { xs: "15px", md: "14px" },
                  py: { xs: 1.2, md: 1 },
                }}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>

              <Box>
                <FormControlLabel
                  required
                  sx={{ "& .MuiFormControlLabel-asterisk": { display: "none" } }}
                  control={
                    <Checkbox
                      name="ageConfirmed"
                      checked={form.ageConfirmed}
                      onChange={handleCheck}
                    />
                  }
                  label={
                    <Typography fontSize={{ xs: "13px", md: "14px" }}>
                      By completing this form, you are confirming you are age 18 years or older.
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
                    />
                  }
                  label={
                    <Typography
                      fontSize={{ xs: "13px", md: "14px" }}
                      lineHeight="22px"
                    >
                      By downloading the whitepaper, you agree to Intel and Adbliss.tech contacting
                      you further for marketing-related communications. Visit{" "}
                      <a
                        href="https://adbliss.tech/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#1976d2" }}
                      >
                        Adbliss Privacy Notice
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://www.lenovo.com/in/en/privacy/?orgRef=https%253A%252F%252Fwww.google.com%252F&srsltid=AfmBOopfgkmG9XooJwZIq-S2_CNFYJS-p8SXm6mptMjpHidEwlcowRJG"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#1976d2" }}
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

      {/* ================= FOOTER & LEGAL ================= */}
<Box sx={{ backgroundColor: "#f5f5f5", py: { xs: 3, md: 4 }, mt: 4 }}>
  <Container maxWidth="lg">

    {/* 🔴 Lenovo Branding */}
    <Typography
      sx={{
        fontWeight: 700,
        fontSize: { xs: "18px", md: "20px" },
        mb: 1,
        color: "#e2231a",
        textAlign: "center",
      }}
    >
      Lenovo
    </Typography>

    {/* 📄 Disclaimer */}
    <Typography
      sx={{
        fontSize: { xs: "12px", md: "13px" },
        color: "#666",
        textAlign: "justify",
        mb: 2,
        lineHeight: 1.6,
      }}
    >
      Lenovo makes no representations or warranties regarding third-party products or services.
      Performance results may vary depending on configuration, usage, and other factors.
      Lenovo services and solutions may require enabled hardware, software, or service activation.
      No product or component can be absolutely secure.
    </Typography>

    {/* 🔗 Links */}
    <Typography
      sx={{
        fontSize: { xs: "12px", md: "13px" },
        textAlign: "center",
        mb: 2,
      }}
    >
      <a
        href="https://www.lenovo.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#1976d2", marginRight: "10px" }}
      >
        Privacy Policy
      </a>
      |
      <a
        href="https://www.lenovo.com/in/en/legal/?orgRef=https%253A%252F%252Fwww.google.com%252F&srsltid=AfmBOoqcfpr6j08EJaF2VeMarHw4Rqxub-MmuqtmSs6pEvxNT1h0kO4Y"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#1976d2", marginLeft: "10px" }}
      >
        Terms of Use
      </a>
    </Typography>

    {/* © Lenovo */}
    <Typography
      sx={{
        fontSize: { xs: "12px", md: "13px" },
        textAlign: "center",
        mb: 1,
        color: "#333",
      }}
    >
      © Lenovo 2026. All rights reserved. Lenovo and the Lenovo logo are trademarks of Lenovo.
    </Typography>

    {/* Company Footer */}
    <Typography
      sx={{
        fontSize: { xs: "12px", md: "13px" },
        textAlign: "center",
        color: "#333",
      }}
    >
      © 2026 AdBliss Digital Media LLP, Bangalore, Karnataka, India.
    </Typography>

  </Container>
</Box>
    </Box>
  );
};

export default Ssg;