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
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import IntelLogo from "./assets/intel-boxed-logo.png";

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
  const [phoneError, setPhoneError] = useState("");

  // ------------------ BLOCK PERSONAL EMAILS ------------------
  const personalEmailDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "icloud.com",
    "rediffmail.com",
  ];

  const isPersonalEmail = (email) => {
    const domain = email.split("@")[1]?.toLowerCase();
    return personalEmailDomains.includes(domain);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheck = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  // ================= SUBMIT FORM =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isPersonalEmail(form.email)) {
      alert("Please enter your business email address.");
      return;
    }

    if (form.phone.length < 10) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      await axios.post("https://adbliss.tech/api/intel-vpro-form", form);

      setShowSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });

      // AUTO DOWNLOAD PDF
      const link = document.createElement("a");
      link.href = "/Intel/Vpro1/todays-standard-for-business-pcs.pdf";
      link.download = "todays-standard-for-business-pcs.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

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
      setPhoneError("");
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
        "Our AI-enabled business PCs are built for today’s workloads. Accelerated performance, 20+ hours of battery life,1 and cutting-edge connectivity keep your workforce driving value every day.",
    },
    {
      icon: icon2,
      title: "Streamline enterprise fleet management",
      desc:
        "Shrink your TCO with business PCs designed to ease IT burdens. Native integration with modern management solutions and firmware-level remote troubleshooting, even when the OS is inaccessible, help reduce IT spend.2",
    },
    {
      icon: icon3,
      title: "Protect your people and data",
      desc:
        "We build security features into our firmware and silicon processors to help you get ahead of evolving threats. And our vast developer network offers security solutions tailored to your organization’s unique needs.",
    },
    {
      icon: icon4,
      title: "Integrate with your current systems",
      desc:
        "Intel® Core™ Ultra 200V series processors are built on the stable, trusted x86 platform, giving you unparalleled compatibility with software from hundreds of independent developers. Run today’s solutions—and tomorrow’s—with peace of mind.",
    },
  ];

  return (
    <Box width="100%" bgcolor="#fff">
      {/* INTEL BOXED LOGO */}
      <Box position="absolute" top={20} left={20} zIndex={10}>
       
      </Box>

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

      {/* SUCCESS MESSAGE */}
      {showSuccess && (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Box
            sx={{
              bgcolor: "#dff1e8",
              borderRadius: 2,
              p: 3,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography fontWeight={600}>
              We have received your request. We will get in touch with you ASAP.
            </Typography>
            <Typography
              sx={{ cursor: "pointer", fontWeight: "bold" }}
              onClick={() => setShowSuccess(false)}
            >
              ×
            </Typography>
          </Box>
        </Container>
      )}

      {/* MAIN CONTENT */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={6}>
          {/* LEFT */}
          <Box flex={1}>
            <Typography variant="h4" mb={2}>
              Redefine what’s possible for your business
            </Typography>

            <Typography mb={4}>
              Give your people the tools to solve everyday challenges and meet future demands with business PCs powered by Intel<span>®</span> Core <span>™</span> Ultra 200V series processors and built on Intel vPro<span>®</span>.
            </Typography>

            {features.map((item, index) => (
              <Box key={index} textAlign="center" mb={4}>
                <Box component="img" src={item.icon} sx={{ height: 120 }} />
                <Typography variant="h6">{item.title}</Typography>
                <Typography>{item.desc}</Typography>
              </Box>
            ))}

            <img src={IntelLogo} alt="Visual" width="100%" />
          </Box>

          {/* FORM */}
          <Box component="form" onSubmit={handleSubmit} flex={1}>
            <Typography mb={2}>
              Fill out the form to download the eBook
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
                  onChange={(e) => {
                    if (field.name === "phone") {
                      const value = e.target.value.replace(/\D/g, "");
                      setForm({ ...form, phone: value });
                      setPhoneError(
                        value.length < 10
                          ? "Please enter a valid 10-digit phone number"
                          : ""
                      );
                    } else {
                      handleChange(e);
                    }
                  }}
                  error={field.name === "phone" && Boolean(phoneError)}
                  helperText={field.name === "phone" ? phoneError : ""}
                />
              </Box>
            ))}

            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Submit
            </Button>

            {/* CHECKBOXES */}
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
                             <Typography fontSize="14px">
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
                             />
                           }
                           label={
                             <Typography fontSize="14px" lineHeight="22px">
                               By downloading the whitepaper, you agree to Intel and
                               Adbliss.tech contacting you further for marketing-related
                               communications. Visit{" "}
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
                      
                                 href="https://www.intel.com/content/www/us/en/privacy/intel-privacy-notice.html"
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
      </Container>

      {/* INTEL LEGAL DISCLAIMER */}
      <Box bgcolor="#f5f5f5" py={3}>
        <Container maxWidth="lg">
          <Typography fontSize="12px">
            Intel technologies may require enabled hardware, software or service
            activation. No product or component can be absolutely secure.
          </Typography>
          <Typography fontSize="12px" mt={1}>
            Intel, the Intel logo, Intel Core<sup>™</sup>, Intel vPro<sup>®</sup>
            are trademarks of Intel Corporation or its subsidiaries.
          </Typography>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box bgcolor="#e6e6e6" py={3}>
        <Container maxWidth="lg">
          <Typography fontSize="12px">
            © 2025 Intel Corporation. © 2025 AdBliss Digital Media LLP.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default IntelVpro1;
