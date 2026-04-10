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
import Aura1 from "../src/assets/Aura-1.png";
import Aura2 from "../src/assets/Aura-2.png";
import Auraicon1 from "../src/assets/Aura-icon-1.png";
import Auraicon2 from "../src/assets/Aura-icon-2.png";


const Aura = () => {
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
    ? "http://localhost:5004"
    : "https://adbliss.tech";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
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

  const personalEmailRegex = /@(gmail|yahoo|outlook|hotmail|live|icloud|aol|protonmail)\./i;
  if (personalEmailRegex.test(form.email)) {
    newErrors.email = "Please enter a valid business email address.";
  }

  const phoneDigits = form.phone.replace(/\D/g, "");
  if (phoneDigits.length < 10) {
    newErrors.phone = "Please enter a valid phone number (at least 10 digits).";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  try {
    setLoading(true); // ✅ start loading

     await axios.post(`${API}/lenovo-api/lenovo-aura-form`, form);

    setShowSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    setForm({
      firstName: "", lastName: "", email: "", phone: "",
      company: "", industry: "", jobLevel: "", jobTitle: "",
      city: "", ageConfirmed: false, consent: false,
    });

  } catch (error) {
    console.error(error);
    alert("Error submitting form");
  } finally {
    setLoading(false); // ✅ always runs
  }
};

  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff",  }}>
      {/* ================= BANNER ================= */}
 <Box sx={{ width: "100%", mt: 4 }}>
  <Box
    sx={{
      position: "relative",
      width: "100%",
    }}
  >
    {/* MAIN IMAGE */}
    <Box
      component="img"
      src={Aura1}
      alt="Intel Xeon AI Data Center"
      sx={{
        width: "100%",
        height: { xs: 250, sm: 400, md: 550 },
        objectFit: "cover",
        display: "block",
      }}
    />

    {/* LEFT LOGO (LENOVO) */}
    <Box
      component="img"
      src={Auraicon2}
      alt="Lenovo Aura"
      sx={{
        position: "absolute",
        top: { xs: 10, md: 20 },
        left: { xs: 10, md: 30 },
        width: { xs: 110, sm: 140, md: 180 },
       
        padding: "6px",
        borderRadius: "6px",
      }}
    />

    {/* RIGHT LOGO (INTEL) */}
    <Box
      component="img"
      src={Auraicon1}
      alt="Intel Logo"
      sx={{
        position: "absolute",
        bottom: { xs: 10, md: 20 }, 
        right: { xs: 10, md: 30 },
        width: { xs: 90, sm: 120, md: 160 },
  
        padding: "6px",
        borderRadius: "6px",
      }}
    />
  </Box>
</Box>

      {/* ================= SUCCESS MESSAGE ================= */}
     {showSuccess && (
  <Container maxWidth="lg" sx={{ mt: 4 }}>
    <Box
      sx={{
        backgroundColor: "#e6f4ea",
        borderRadius: "10px",
        padding: "30px",
        position: "relative",
        textAlign: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      {/* Close Button */}
      <Typography
        onClick={() => setShowSuccess(false)}
        sx={{
          position: "absolute",
          right: 20,
          top: 15,
          cursor: "pointer",
          fontSize: "26px",
          fontWeight: 600,
        }}
      >
        ×
      </Typography>

      {/* Message */}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "22px",
          color: "#1b5e20",
          mb: 1,
        }}
      >
        🎉 Thank You!
      </Typography>

      <Typography
        sx={{
          fontSize: "16px",
          color: "#2e7d32",
        }}
      >
        We have received your request. Our team will get in touch with you shortly.
      </Typography>
    </Box>
  </Container>
)}

      {/* ================= MAIN SECTION ================= */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6 }}>
          {/* LEFT CONTENT */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" mb={1} mt={2}>
              Elevating the AI PC experience
            </Typography>

            <Typography mb={2} lineHeight={1.6} mt={3} textAlign="justify">
  Lenovo Aura Edition Copilot+ PCs offer personalized, productive, and protected AI with the latest Intel<sup style={{ fontSize: "0.6em" }}>®</sup> Core Ultra processors.
</Typography>

            <Typography variant="h4"  mb={1} lineHeight={1.6} textAlign="justify">
              Reimagined ThinkPad<sup>®</sup> experience
            </Typography>
            <Typography mb={1} lineHeight={1.6} textAlign="justify">
            While 91% of employees use GenAI at work, only 13% report that their companies have fully implemented AI.
            </Typography>

            <Typography variant="h4" fontWeight={500} mb={1} lineHeight={1.6} textAlign="justify">
              Unleash the potential of every user
            </Typography>
           <Typography mb={1} lineHeight={1.6} textAlign="justify">
  The new Lenovo ThinkPad
  <sup style={{ fontSize: "0.6em" }}>®</sup> X1 Carbon Gen 13 Aura Edition, imagined with Intel, is the lightest, thinnest, and most powerful ThinkPad
  <sup style={{ fontSize: "0.6em" }}>®</sup> X1 Carbon yet—now optimized for peak performance with Windows 11. Discover how it can revolutionize your workflow with AI-driven features and enterprise-ready security.
</Typography>
         <Box mt={3} display="flex" justifyContent="center">
  <Box
    component="img"
    src={Aura2}
    alt="Intel Xeon AI Data Center"
    sx={{
      width: { xs: "100%", sm: "90%", md: "520px" },
      height: "auto",              // ✅ important
      maxHeight: { xs: 220, sm: 320, md: 450 },
      objectFit: "contain",       // ✅ FIX
      borderRadius: "10px",
      display: "block"
    }}
  />
</Box>
          </Box>

          {/* RIGHT FORM */}
          <Box sx={{ flex: 1 }}>
            <Box component="form" onSubmit={handleSubmit}>
              <Typography mb={2} textAlign={"justify"}>
  The Lenovo ThinkPad
  <sup style={{ fontSize: "0.6em" }}>®</sup> X9 Aura Edition Series, imagined with Intel, redefines productivity with next-gen AI, best-in-class battery life, and innovations from Lenovo AI Now and Copilot+, exclusively on Windows 11. The best part? It's all wrapped in a sleek, quiet, and cool design. Ready to elevate your workforce's productivity? Download our solution guide now to see the X9 performance boost.
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
                <Box key={index} mb={1.5}>
                  <Typography fontSize="16px" fontWeight={500}>{field.label}</Typography>
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
                    sx={{ width: { xs: "100%", md: "70%" } }}
                  />
                </Box>
              ))}

              <Button
  type="submit"
  variant="contained"
  disabled={loading}
  sx={{ mt: 2, mb: 2, width: "120px", textTransform: "none" }}
>
  {loading ? "Submitting..." : "Submit"}
</Button>

              <Box>
                <FormControlLabel
                  required
                  sx={{ "& .MuiFormControlLabel-asterisk": { display: "none" } }}
                  control={<Checkbox name="ageConfirmed" checked={form.ageConfirmed} onChange={handleCheck} />}
                  label={<Typography fontSize="14px">By completing this form, you are confirming you are age 18 years or older.</Typography>}
                />

                <FormControlLabel
                  required
                  sx={{ alignItems: "flex-start", "& .MuiFormControlLabel-asterisk": { display: "none" } }}
                  control={<Checkbox name="consent" checked={form.consent} onChange={handleCheck} />}
                  label={
                    <Typography fontSize="14px" lineHeight="22px">
                      By downloading the whitepaper, you agree to Intel and Adbliss.tech contacting you further for marketing-related communications. Visit <a href="https://adbliss.tech/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#1976d2" }}>Adbliss Privacy Notice</a> and <a href="https://www.intel.com/content/www/us/en/privacy/intel-privacy-notice.html" target="_blank" rel="noopener noreferrer" style={{ color: "#1976d2" }}>Privacy and Cookies</a> notices.
                    </Typography>
                  }
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* ================= FOOTER & LEGAL ================= */}
      <Box sx={{ backgroundColor: "#e6e6e6", py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="caption" fontSize="13px" display="block" sx={{ mb: 2, color: "#666", textAlign: "justify" }}>
            1. For workloads and configurations visit <a href="https://www.Intel.com/PerformanceIndex" target="_blank" rel="noreferrer">www.Intel.com/PerformanceIndex</a>. Results may vary. <br />
            Intel technologies may require enabled hardware, software or service activation. No product or component can be absolutely secure. Your costs and results may vary.
          </Typography>
          <Typography fontSize="13px" textAlign={"center"} mb={2}>
            © Intel<sup>®</sup> Corporation. Intel<sup>®</sup>, the Intel<sup>®</sup> logo, and other Intel<sup>®</sup> marks are trademarks of Intel<sup>®</sup> Corporation or its subsidiaries.
          </Typography>
          <Typography fontSize="13px"  textAlign={"center"}>
            © 2026 AdBliss Digital Media LLP, Bangalore, Karnataka, India.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Aura;