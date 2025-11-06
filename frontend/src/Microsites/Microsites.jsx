import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import micrositeimg1 from "../assets/Microsites-img1.png";
import heroImage4 from "../assets/hero-img4.png";
import heroImage5 from "../assets/hero-img5.png";
import heroImage6 from "../assets/hero-img6.png";
import heroImage7 from "../assets/hero-img7.png";
import heroImage8 from "../assets/hero-img8.png";
import heroImage9 from "../assets/hero-img9.png";
import CampaignIcon from "@mui/icons-material/Campaign";
import BusinessIcon from "@mui/icons-material/Business";
import EventIcon from "@mui/icons-material/Event";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import Footer from "../Components/Footer";

const services = [
  {
    title: "Campaign Microsites",
    description:
      "Ideal for product launches, seasonal campaigns, or special events that need focused attention and clear calls to action.",
    icon: <CampaignIcon sx={{ fontSize: 45, color: "#fff" }} />,
    color: "linear-gradient(135deg, #007bff, #00b4d8)",
  },
  {
    title: "Corporate Partnerships",
    description:
      "Dedicated portals for B2B collaborations and co-branded digital experiences with seamless integrations.",
    icon: <BusinessIcon sx={{ fontSize: 45, color: "#fff" }} />,
    color: "linear-gradient(135deg, #6a11cb, #2575fc)",
  },
  {
    title: "Event & Webinar Pages",
    description:
      "Promote registrations, live streams, and engagement tracking with dynamic event microsites.",
    icon: <EventIcon sx={{ fontSize: 45, color: "#fff" }} />,
    color: "linear-gradient(135deg, #ff512f, #dd2476)",
  },
  {
    title: "Interactive Landing Pages",
    description:
      "Modern landing pages with animations, storytelling, and form integrations for conversion-driven campaigns.",
    icon: <TouchAppIcon sx={{ fontSize: 45, color: "#fff" }} />,
    color: "linear-gradient(135deg, #11998e, #38ef7d)",
  },
];

function Microsites() {

   const navigate = useNavigate();


  const micrositeList = [
    {
      title: "Intel vPro Microsite",
      description:
        "Explore Intel vPro microsite showcasing secure, powerful, and business-ready devices designed to optimize productivity and security for modern enterprises.",
      image: heroImage5,
      link: "https://businestech.in/mailer/win11/index.php?referrer=google",
    },
    {
      title: "Lenovo Microsite",
      description:
        "Discover Lenovo’s cutting-edge range of devices and business solutions powered by innovation, performance, and reliability — all in one microsite.",
      image: heroImage7,
      link: "https://businestech.in/mailer/vproq2/v2.php",
    },
    {
      title: "Lenovo Microsite",
      description:
        "Discover Lenovo’s cutting-edge range of devices and business solutions powered by innovation, performance, and reliability — all in one microsite.",
      image: heroImage6,
      link: "https://businestech.in/mailer/ai/index.php?referrer=google",
    },
    {
      title: "Lenovo Microsite",
      description:
        "Discover Lenovo’s cutting-edge range of devices and business solutions powered by innovation, performance, and reliability — all in one microsite.",
      image: heroImage8,
      link: "https://businestech.in/mailer/datacenter-q2/v2.php",
    },
    {
      title: "Lenovo Microsite",
      description:
        "Discover Lenovo’s cutting-edge range of devices and business solutions powered by innovation, performance, and reliability — all in one microsite.",
      image: heroImage4,
      link: "http://3.7.30.237/",
    },
    {
      title: "Lenovo Microsite",
      description:
        "Discover Lenovo’s cutting-edge range of devices and business solutions powered by innovation, performance, and reliability — all in one microsite.",
      image: heroImage9,
      link: "https://businestech.in/mailer/datacenter-q2/v3.php",
    },
  ];

  // section

  

  return (
    <Box>
      {/* ✅ Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "60vh", md: "80vh" },
          backgroundImage: `url(${micrositeimg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          color: "#fff",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Overlay for readability */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "rgba(10, 25, 47, 0.65)",
          }}
        />

        {/* Text content */}
        <Box sx={{ position: "relative", zIndex: 2, px: 2 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "700",
              fontFamily: "Poppins, sans-serif",
              mb: 2,
            }}
          >
            About <span style={{ color: "#64b5f6" }}>Microsites</span>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: "1000px",
              mx: "auto",
              color: "#e0e0e0",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Empowering brands to launch focused, high-performing, and visually
            engaging microsites that drive campaigns, enhance visibility, and
            deliver seamless digital experiences.
          </Typography>
        </Box>
      </Box>

      {/* section 2 */}

      <Box sx={{ py: { xs: 8, sm: 10 }, mt: 3 }}>
        {/* Heading */}
        <Typography
          variant="h2"
          align="center"
          fontWeight={700}
          sx={{
            color: "#0f172a",
            mb: 2,
            fontSize: { xs: "1.8rem", sm: "3.5rem" },
          }}
        >
          We Build Microsites That Deliver Impact
        </Typography>

        <Typography
          align="center"
          sx={{
            color: "#475569",
            mb: 6,
            maxWidth: "1000px",
            mx: "auto",
            fontSize: { xs: "0.95rem", sm: "1.3rem" },
            mt: 4,
          }}
        >
          We specialize in designing and developing performance-driven
          microsites that combine creative storytelling with technical
          precision. Our process ensures your campaign stands out with fast load
          times, responsive layouts, and measurable analytics.
        </Typography>

        {/* 2x2 Grid Layout */}
        <Grid
          container
          spacing={8}
          justifyContent="center"
          alignItems="stretch"
          sx={{ display: "flex", mt: 5 }}
        >
          {services.map((service, index) => {
            // 🎨 Different color for each icon
            const iconColors = ["#1976d2", "#9c27b0", "#ff9800", "#009688"];
            return (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card
                  sx={{
                    maxWidth: 550,
                    mx: "auto",
                    mt: 6,
                    height: 300,
                    borderRadius: "20px",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.25)",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.30)",
                      backgroundColor: "#ffffff",
                    },
                  }}
                >
                  <CardActionArea
                    disableRipple // remove click ripple effect
                    sx={{
                      cursor: "default", // remove pointer
                      height: "100%",
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        mb: 2,
                        color: iconColors[index % iconColors.length],
                      }}
                    >
                      {React.cloneElement(service.icon, {
                        sx: {
                          fontSize: 50,
                          color: iconColors[index % iconColors.length],
                        },
                      })}
                    </Box>

                    <CardContent sx={{ p: 0 }}>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        gutterBottom
                        sx={{
                          fontSize: { xs: "1.1rem", sm: "1.6rem" },
                          color: "#0f172a",
                          mt: 2,
                        }}
                      >
                        {service.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#475569",
                          opacity: 0.9,
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", sm: "1.2rem" },
                        }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {/* section 3 */}
      <Box
        sx={{
          backgroundColor: "#aecbf697",
          minHeight: "100vh",
          pt: { xs: 8, sm: 12 },
          pb: { xs: 6, sm: 10 },
          mt: 5,
        }}
      >
        <Container maxWidth="lg">
          {/* Page Heading */}
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#0A2540",
                mb: 2,
              }}
            >
              Our <span style={{ color: "#64b5f6" }}>Microsites</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#555",
                maxWidth: "700px",
                mx: "auto",
              }}
            >
              Explore our dedicated microsites crafted for technology and
              innovation partnerships. Each microsite provides tailored
              experiences and focused insights into our collaborations.
            </Typography>
          </Box>

          {/* Microsite Cards */}
          <Grid container spacing={6}>
            {micrositeList.map((site, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card
                  sx={{
                    borderRadius: "16px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={site.image}
                    alt={site.title}
                    sx={{ objectPosition: "top" }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#0A2540",
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      {site.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#555",
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      {site.description}
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => window.open(site.link, "_blank")}
                      sx={{
                        background:
                          "linear-gradient(90deg, #367bbfff 0%, #4ac0e1ff 100%)",
                        color: "#fff",
                        borderRadius: "25px",
                        px: 3,
                        py: 1,
                        textTransform: "none",
                        fontWeight: 600,
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, #6dc9e3ff 0%, #1f65aaff 100%)",
                        },
                      }}
                    >
                      Visit Microsite
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* section last  */}

      {/* CTA Section */}
      <Box
        sx={{
          py: 10,
          textAlign: "center",
          background: "linear-gradient(135deg, #1976d2 0%, #0a192f 100%)",
          color: "#fff",
          
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Ready to Launch Your Microsite?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255,255,255,0.85)",
              mb: 4,
              lineHeight: 1.7,
              
            }}
          >
            Let’s craft a high-impact microsite that captures attention,
            converts visitors, and builds your brand’s digital presence. Whether
            it’s for a campaign, event, or product, our creative and technical
            experts will bring your vision to life.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#64b5f6",
              color: "#0a192f",
              borderRadius: "50px",
              px: 4,
              py: 1.2,
              fontWeight: 600,
              "&:hover": {
                bgcolor: "#2196f3",
                color: "#fff",
              },
            }}
             onClick={() => navigate("/register")}
          >
            Get in Touch
          </Button>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default Microsites;
