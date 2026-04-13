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
import logo from "../src/assets/lenovo-vert-logo.png";
import { MenuItem } from "@mui/material";


import LaptopIcon from "@mui/icons-material/LaptopMac";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SecurityIcon from "@mui/icons-material/Security";

const Ssg = () => {
  const [form, setForm] = useState({
    firstName: "",
lastName: "",
company: "",
jobTitle: "",
email: "",
phone: "",
department: "",
industry: "",
companySize: "",
requirement: "",
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

// ✅ NEW VALIDATIONS (ADD HERE 👇)
  if (!form.firstName) newErrors.firstName = "Required";
if (!form.lastName) newErrors.lastName = "Required";
if (!form.company) newErrors.company = "Required";
if (!form.jobTitle) newErrors.jobTitle = "Required";
if (!form.email) newErrors.email = "Required";
if (!form.phone) newErrors.phone = "Required";
if (!form.department) newErrors.department = "Required";
if (!form.industry) newErrors.industry = "Required";
if (!form.companySize) newErrors.companySize = "Required";
if (!form.requirement) newErrors.requirement = "Required";

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
 `${API}/lenovo-api/lenovo-ssg-form`,
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
  company: "",
  jobTitle: "",
  email: "",
  phone: "",
  department: "",
  industry: "",
  companySize: "",
  requirement: "",
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
      desc: `Accelerate your digital transformation while lowering IT costs through superior managed services and our Gen AI powered Care of One™ delivery platform. Support and scale your portfolio to match your business' needs without disruption while elevating the employee experience.`,
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: { xs: 32, md: 40 } }} />,
      title: "Improve productivity",
      desc: `Arm every employee with the tools and technologies they need to maximize their productivity while providing them a superior hyper-personalized experience. Our Gen AI powered Care of One™ delivery platform actively adapts to support their evolving needs – at home, in the office or on the go.`,
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
     <Box sx={{ width: "100%", mt: { xs: 2, md: 1 } }}>
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
    top: { xs: 60, sm: 12, md: 150 },
    left: { xs: 0, sm: 0, md: 0 },
    width: { xs: 30, sm: 60, md: 70 },
    backgroundColor: "#e1140a",
    padding: "6px",
    borderRadius: "6px",
  }}
/>


  </Box>
</Box>

{/*  */}


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
  { label: "Company Name*", name: "company" },
  { label: "Job Title*", name: "jobTitle" },
  { label: "Business Email*", name: "email", type: "email" },
  { label: "Business Phone*", name: "phone", type: "tel" },
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

              {/* Department Dropdown */}
<Box mb={1.5} mt={2}>
  <Typography>Department*</Typography>

  <TextField
    select
    size="small"
    name="department"
    value={form.department}
    onChange={handleChange}
    error={!!errors.department}
    helperText={errors.department}
    sx={{
      width: { xs: "100%", sm: "85%", md: "70%" },

      // ✅ Transparent input
      "& .MuiOutlinedInput-root": {
        backgroundColor: "transparent",
      },

      // ✅ Remove white background inside select
      "& .MuiSelect-select": {
        padding: "10px",
        backgroundColor: "transparent",
      },
    }}
    SelectProps={{
      MenuProps: {
        PaperProps: {
          sx: {
            borderRadius: "10px",
            mt: 1,

            // ✅ Transparent dropdown background (light effect)
            backgroundColor: "#fff",

            // ✅ Menu item styling
            "& .MuiMenuItem-root": {
              fontSize: "14px",
              padding: "10px 16px",

              // 🔥 HOVER EFFECT
              "&:hover": {
                backgroundColor: "#4a90e2",
                color: "#fff",
              },
            },

            // 🔥 SELECTED ITEM
            "& .Mui-selected": {
              backgroundColor: "#4a90e2 !important",
              color: "#fff",
            },
          },
        },
      },
    }}
  >
    <MenuItem value="">Select...</MenuItem>
    <MenuItem value="IT & IS">IT & IS</MenuItem>
    <MenuItem value="Finance & Administration">Finance & Administration</MenuItem>
    <MenuItem value="Support">Support</MenuItem>
    <MenuItem value="Other">Other</MenuItem>
    <MenuItem value="Engineering & Research">Engineering & Research</MenuItem>
    <MenuItem value="Sales">Sales</MenuItem>
    <MenuItem value="Marketing">Marketing</MenuItem>
    <MenuItem value="Human Resources">Human Resources</MenuItem>
    <MenuItem value="Operations">Operations</MenuItem>
  </TextField>
</Box>

{/* Industry Dropdown */}
<Box mb={1.5} mt={2}>
  <Typography>Industry*</Typography>

  <TextField
    select
    size="small"
    name="industry"
    value={form.industry}
    onChange={handleChange}
    error={!!errors.industry}
    helperText={errors.industry}
    sx={{
      width: { xs: "100%", sm: "85%", md: "70%" },

      "& .MuiOutlinedInput-root": {
        backgroundColor: "transparent",
      },

      "& .MuiSelect-select": {
        padding: "10px",
        backgroundColor: "transparent",
      },
    }}
    SelectProps={{
      MenuProps: {
        PaperProps: {
          sx: {
            borderRadius: "10px",
            mt: 1,
            backgroundColor: "#fff",

            "& .MuiMenuItem-root": {
              fontSize: "14px",
              padding: "10px 16px",

              // ✅ Hover
              "&:hover": {
                backgroundColor: "#4a90e2",
                color: "#fff",
              },
            },

            // ✅ Selected
            "& .Mui-selected": {
              backgroundColor: "#4a90e2 !important",
              color: "#fff",
            },
          },
        },
      },
    }}
  >
    <MenuItem value="">Select...</MenuItem>
    <MenuItem value="Automotive">Automotive</MenuItem>
    <MenuItem value="Education – Higher Education">Education – Higher Education</MenuItem>
    <MenuItem value="Education – Primary and Secondary Education">Education – Primary and Secondary Education</MenuItem>
    <MenuItem value="Energy & Utilities">Energy & Utilities</MenuItem>
    <MenuItem value="Entertainment">Entertainment</MenuItem>
    <MenuItem value="Financial Service – Banking">Financial Service – Banking</MenuItem>
    <MenuItem value="Financial Service – Insurance">Financial Service – Insurance</MenuItem>
    <MenuItem value="Government – Local and Regional">Government – Local and Regional</MenuItem>
    <MenuItem value="Government – National and International Government">Government – National and International Government</MenuItem>
    <MenuItem value="Healthcare">Healthcare</MenuItem>
    <MenuItem value="IT – Hardware">IT – Hardware</MenuItem>
    <MenuItem value="IT – Services and Software">IT – Services and Software</MenuItem>
    <MenuItem value="IT – Telecommunications">IT – Telecommunications</MenuItem>
    <MenuItem value="Life Sciences">Life Sciences</MenuItem>
    <MenuItem value="Manufacturing & Construction">Manufacturing & Construction</MenuItem>
    <MenuItem value="Media and Advertising">Media and Advertising</MenuItem>
    <MenuItem value="Natural Resources & Materials">Natural Resources & Materials</MenuItem>
    <MenuItem value="Restaurants and Hospitality">Restaurants and Hospitality</MenuItem>
    <MenuItem value="Retail">Retail</MenuItem>
    <MenuItem value="Warehousing, Couriers, Support Services">Warehousing, Couriers, Support Services</MenuItem>
    <MenuItem value="Wholesale Durable and Nondurable Goods">Wholesale Durable and Nondurable Goods</MenuItem>
    <MenuItem value="Other Business">Other Business</MenuItem>
  </TextField>
</Box>

{/* Company Size */}
<Box mb={1.5} mt={2}>
  <Typography>Size of Company (Employees)*</Typography>

  <TextField
    select
    size="small"
    name="companySize"
    value={form.companySize}
    onChange={handleChange}
    error={!!errors.companySize}
    helperText={errors.companySize}
    sx={{
      width: { xs: "100%", sm: "85%", md: "70%" },

      "& .MuiOutlinedInput-root": {
        backgroundColor: "transparent",
      },

      "& .MuiSelect-select": {
        padding: "10px",
        backgroundColor: "transparent",
      },
    }}
    SelectProps={{
      MenuProps: {
        PaperProps: {
          sx: {
            borderRadius: "10px",
            mt: 1,
            backgroundColor: "#fff",

            "& .MuiMenuItem-root": {
              fontSize: "14px",
              padding: "10px 16px",

              // ✅ Hover
              "&:hover": {
                backgroundColor: "#4a90e2",
                color: "#fff",
              },
            },

            // ✅ Selected
            "& .Mui-selected": {
              backgroundColor: "#4a90e2 !important",
              color: "#fff",
            },
          },
        },
      },
    }}
  >
    <MenuItem value="">Select...</MenuItem>
    <MenuItem value="No Employees">No Employees</MenuItem>
    <MenuItem value="1–9 Employees">1–9 Employees</MenuItem>
    <MenuItem value="10–19 Employees">10–19 Employees</MenuItem>
    <MenuItem value="20–49 Employees">20–49 Employees</MenuItem>
    <MenuItem value="50–99 Employees">50–99 Employees</MenuItem>
    <MenuItem value="100–249 Employees">100–249 Employees</MenuItem>
    <MenuItem value="250–299 Employees">250–299 Employees</MenuItem>
    <MenuItem value="300–499 Employees">300–499 Employees</MenuItem>
    <MenuItem value="500–999 Employees">500–999 Employees</MenuItem>
    <MenuItem value="1000–2999 Employees">1000–2999 Employees</MenuItem>
    <MenuItem value="3000+ Employees">3000+ Employees</MenuItem>
  </TextField>
</Box>

{/* Requirement */}
<Box mb={1.5} mt={2}>
  <Typography>Please let us know how we can help*</Typography>
 <TextField
  
  multiline
  rows={4}
  name="requirement"
  value={form.requirement}
  onChange={handleChange}
  error={!!errors.requirement}
  helperText={errors.requirement}
   sx={{ width: { xs: "100%", sm: "85%", md: "70%" } }} 
/>
</Box>

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