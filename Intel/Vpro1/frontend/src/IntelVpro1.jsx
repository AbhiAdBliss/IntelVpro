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

import VproBannerImg from "./assets/Vpro-img.png";
import lastimg from "./assets/last-img.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

const IntelVpro1 = () => {
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheck = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://adbliss.tech/api/intel-vpro-form", form);

      setShowSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });

      const link = document.createElement("a");
      link.href = "/Today’s Standard for the business PCs.pdf";
      link.download = "Today’s Standard for the business PCs.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

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

  const features = [
    {
      icon: icon1,
      title: "Empower your workforce",
      desc:
        "Our AI-enabled business PCs are built for today’s workloads. Accelerated performance, 20+ hours of battery life, and cutting-edge connectivity keep your workforce driving value every day.",
    },
    {
      icon: icon2,
      title: "Streamline enterprise fleet management",
      desc:
        "Shrink your TCO with business PCs designed to ease IT burdens. Native integration with modern management solutions and firmware-level remote troubleshooting help reduce IT spend.",
    },
    {
      icon: icon3,
      title: "Protect your people and data",
      desc:
        "We build security features into our firmware and silicon processors to help you stay ahead of evolving threats.",
    },
    {
      icon: icon4,
      title: "Integrate with your current systems",
      desc:
        "Built on the trusted x86 platform, delivering unparalleled compatibility with today’s and tomorrow’s software.",
    },
  ];

  return (
    <Box width="100%" bgcolor="#fff">
      {/* HERO BANNER */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "220px", sm: "300px", md: "420px" },
          backgroundColor: "#ebebeb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={VproBannerImg}
          alt="Intel vPro Banner"
          sx={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>

      {/* SUCCESS MESSAGE (ORIGINAL + ADDITION ONLY) */}
      {showSuccess && (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Box
            sx={{
              bgcolor: "#d9ede4",
              borderRadius: 2,
              p: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box>
              {/* EXISTING TEXT – UNCHANGED */}
              <Typography fontSize={18} fontWeight={600} color="#133b2d">
                We have received your request. We will get in touch with you ASAP.
              </Typography>

              {/* ✅ ADDED CODE ONLY */}
              <Typography fontSize={16} color="#133b2d" mt={1}>
                Download the white paper from{" "}
                <a
                  href="/Today’s Standard for the business PCs.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#1976d2",
                    textDecoration: "underline",
                  }}
                >
                  here
                </a>
                .
              </Typography>
            </Box>

            {/* ✅ ADDED CLOSE ICON */}
            <Box
              sx={{
                cursor: "pointer",
                fontSize: "22px",
                fontWeight: "bold",
                ml: 2,
              }}
              onClick={() => setShowSuccess(false)}
            >
              ×
            </Box>
          </Box>
        </Container>
      )}

      {/* MAIN CONTENT */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={6}>
          {/* LEFT CONTENT */}
          <Box flex={1}>
            <Typography variant="h4" mb={2}>
              Redefine what’s possible for your business
            </Typography>

            <Typography mb={4}>
              Give your people the tools to solve everyday challenges and meet
              future demands with business PCs powered by Intel® Core™ Ultra 200V
              series processors and built on Intel vPro®.
            </Typography>

            {features.map((item, index) => (
              <Box
                key={index}
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
                mb={4}
              >
                <Box component="img" src={item.icon} sx={{ height: 120 }} />
                <Typography variant="h5">{item.title}</Typography>
                <Typography maxWidth={420}>{item.desc}</Typography>
              </Box>
            ))}

            <Box mt={4}>
              <img src={lastimg} alt="Integration Visual" width="100%" />
            </Box>
          </Box>

          {/* FORM */}
          <Box component="form" onSubmit={handleSubmit} flex={1}>
            <Typography mb={2}>
              Fill out the form and download the eBook to win the day with
              business PCs that mean business
            </Typography>

            {[
              { label: "First Name", name: "firstName" },
              { label: "Last Name", name: "lastName" },
              { label: "Business Email", name: "email" },
              { label: "Business Phone", name: "phone" },
              { label: "Company", name: "company" },
              { label: "Industry", name: "industry" },
              { label: "Job Level", name: "jobLevel" },
              { label: "Job Title", name: "jobTitle" },
              { label: "City", name: "city" },
            ].map((field) => (
              <Box key={field.name} mb={1.5}>
                <Typography fontWeight={500}>{field.label}</Typography>
                <TextField
                  fullWidth
                  size="small"
                  required
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  sx={{ width: { xs: "100%", md: "70%" } }}
                />
              </Box>
            ))}

            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Submit
            </Button>

            {/* CHECKBOXES – TEXT UNCHANGED */}
             <Box mt={2}>
        <FormControlLabel
          required
          sx={{ "& .MuiFormControlLabel-asterisk": { display: "none" } }}
          control={
            <Checkbox
              name="ageConfirmed"
              checked={form.ageConfirmed}
              onChange={handleCheck}
              required
            />
          }
          label={
            <Typography fontSize={{ xs: "14px", md: "16px" }}>
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
            <Typography fontSize={{ xs: "14px", md: "16px" }} lineHeight="22px">
              By downloading the whitepaper, you agree to Intel and
              Adbliss.tech contacting you further for marketing-related
              communications. Visit{" "}
              <a
                href="https://adbliss.tech/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1976d2", textDecoration: "underline" }}
              >
                Adbliss Privacy Notice
              </a>{" "}
              and{" "}
              <a
                href="https://www.intel.com/content/www/us/en/privacy/intel-privacy-notice.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1976d2", textDecoration: "underline" }}
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
      <Box bgcolor="#e6e6e6" py={4}>
        <Container maxWidth="lg">
          <Typography>
            © Intel® Corporation. Intel® and the Intel® logo are trademarks of
            Intel Corporation.
          </Typography>
          <Typography>
            © 2025 AdBliss Digital Media LLP, Bangalore, India.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default IntelVpro1;
