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
import lastimg from "./assets/Dcoi-mage.png";

const Dco = () => {
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

    // ❌ BLOCK PERSONAL EMAIL IDS
    const personalEmailRegex = /@(gmail|yahoo|outlook|hotmail|live|icloud|aol|protonmail)\./i;
    if (personalEmailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid business email address.";
    }

    // ❌ VALIDATE PHONE NUMBER LENGTH
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      newErrors.phone = "Please enter a valid phone number (at least 10 digits).";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await axios.post("https://adbliss.tech/dco-api/intel-dco-form", form);
      setShowSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });

      const link = document.createElement("a");
      link.href = "/Intel/Dco/modernize-your-data-centers-to-meet-the-promise-of-ai.pdf";
      link.download = "modernize-your-data-centers-to-meet-the-promise-of-ai.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setForm({
        firstName: "", lastName: "", email: "", phone: "",
        company: "", industry: "", jobLevel: "", jobTitle: "",
        city: "", ageConfirmed: false, consent: false,
      });
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    }
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
      {/* ================= BANNER ================= */}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", background: "#f3f3f3" }}>
        <Box
          component="img"
          src={VproBannerImg}
          alt="Intel DCO Banner"
          sx={{ width: { xs: "95%", md: "80%" }, maxWidth: "1600px", height: "auto", objectFit: "contain" }}
        />
      </Box>

      {/* ================= SUCCESS MESSAGE ================= */}
      {showSuccess && (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Box sx={{ backgroundColor: "#d9ede4", borderRadius: "10px", padding: "25px", position: "relative" }}>
            <Typography onClick={() => setShowSuccess(false)} sx={{ position: "absolute", right: 20, top: 15, cursor: "pointer", fontSize: "26px", fontWeight: 600 }}>×</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: "20px", color: "#133b2d", mb: 1 }}>
              We have received your request. We will get in touch with you ASAP.
            </Typography>
            <Typography sx={{ color: "#133b2d", fontSize: "16px" }}>
              Download the ebook from <a href="/Intel/Dco/modernize-your-data-centers-to-meet-the-promise-of-ai.pdf" download style={{ color: "#0078ff", textDecoration: "underline", fontWeight: 500 }}>here</a>.
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
              Drive more value with the proven processor for data centers<sup>1</sup>
            </Typography>
            <Typography mb={3} lineHeight={1.6} mt={3} textAlign="justify">
              AI workloads are here, and they’re getting bigger every day. As you refresh your data center infrastructure to accommodate these new challenges, choosing among a wide variety of available options can be difficult. Instead of opting for the most processing power, take time and carefully evaluate your priorities against the specs to see how you can meet your AI needs while minimizing TCO.
            </Typography>
            <Typography mb={3} lineHeight={1.6} textAlign="justify">
              Learn how Intel<sup>®</sup> Xeon<sup>®</sup> 6 processors can help optimize your data centers for AI.
            </Typography>
            <Box mt={3} display="flex" justifyContent="center">
              <Box component="img" src={lastimg} alt="Intel Xeon AI Data Center" sx={{ width: { xs: "100%", sm: "90%", md: "520px" }, maxHeight: { xs: 220, sm: 320, md: 450 }, height: { xs: 220, sm: 320, md: 450 }, objectFit: "cover", borderRadius: "10px", display: "block" }} />
            </Box>
          </Box>

          {/* RIGHT FORM */}
          <Box sx={{ flex: 1 }}>
            <Box component="form" onSubmit={handleSubmit}>
              <Typography mb={2}>
                Fill out the form below to download the exclusive eBook: <br />
                <strong>“Modernize Your Data Centers to Meet the Promise of AI”</strong>
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

              <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2, width: "120px", textTransform: "none" }}>Submit</Button>

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
            © 2025 AdBliss Digital Media LLP, Bangalore, Karnataka, India.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Dco;