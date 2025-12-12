import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Phone,
  LocationOn,
  Email,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(90deg, #0A2540 0%, #00C6FF 100%)",
        color: "#fff",
        py: 6,
        px: 2,
    
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          justifyContent="center"
          alignItems="flex-start"
        >
          {/* About Section */}
          <Grid item xs={12} md={3} textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              sx={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Adbliss<span style={{ color: "#00E0FF" }}>.tech</span>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.85,
                lineHeight: 1.8,
                maxWidth: 320,
                mx: { xs: "auto", md: 0 },
                color: "#E0F7FA",
              }}
            >
              Empowering your brand with creative marketing, modern tech, and
              digital solutions that connect your business to the world.
            </Typography>
          </Grid>

          {/* Quick Links, Our Services, Contact Us */}
          <Grid item xs={12} md={9}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: { xs: "center", sm: "space-evenly" },
                alignItems: { xs: "center", sm: "flex-start" },
                gap: { xs: 5, sm: 8 },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              {/* Quick Links */}
              <Box>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    mb: 2,
                    letterSpacing: "0.5px",
                    position: "relative",
                    pb: 1,
                    fontFamily: "'Poppins', sans-serif",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: { xs: "50%", sm: "0" },
                      transform: { xs: "translateX(-50%)", sm: "none" },
                      width: "45px",
                      height: "3px",
                      background: "#00E0FF",
                      borderRadius: "2px",
                    },
                  }}
                >
                  Quick Links
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                  {["Home", "Services", "About", "Contact"].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      underline="none"
                      color="inherit"
                      sx={{
                        fontSize: "0.95rem",
                        opacity: 0.9,
                        transition: "all 0.3s ease",
                        fontFamily: "'Poppins', sans-serif",
                        "&:hover": {
                          color: "#00E0FF",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </Box>
              </Box>

              {/* Our Services */}
              <Box>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    mb: 2,
                    letterSpacing: "0.5px",
                    position: "relative",
                    pb: 1,
                    fontFamily: "'Poppins', sans-serif",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: { xs: "50%", sm: "0" },
                      transform: { xs: "translateX(-50%)", sm: "none" },
                      width: "45px",
                      height: "3px",
                      background: "#00E0FF",
                      borderRadius: "2px",
                    },
                  }}
                >
                  Our Services
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                  {[
                    "SEO Optimization",
                    "Paid Advertising",
                    "Social Media Marketing",
                    "Content Strategy",
                  ].map((service) => (
                    <Link
                      key={service}
                      href="#"
                      underline="none"
                      color="inherit"
                      sx={{
                        fontSize: "0.95rem",
                        opacity: 0.9,
                        transition: "all 0.3s ease",
                        fontFamily: "'Poppins', sans-serif",
                        "&:hover": {
                          color: "#00E0FF",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      {service}
                    </Link>
                  ))}
                </Box>
              </Box>

              {/* Contact Us */}
              <Box>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    mb: 2,
                    letterSpacing: "0.5px",
                    position: "relative",
                    pb: 1,
                    fontFamily: "'Poppins', sans-serif",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: { xs: "50%", sm: "0" },
                      transform: { xs: "translateX(-50%)", sm: "none" },
                      width: "45px",
                      height: "3px",
                      background: "#00E0FF",
                      borderRadius: "2px",
                    },
                  }}
                >
                  Contact Us
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    fontSize: "0.95rem",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LocationOn sx={{ color: "#00E0FF", fontSize: 20 }} />
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      456 Creative Avenue, Pune, India
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Phone sx={{ color: "#00E0FF", fontSize: 20 }} />
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      +91 98765 43210
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Email sx={{ color: "#00E0FF", fontSize: 20 }} />
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      contact@adbliss.tech
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Follow Us */}
          <Grid item xs={12} textAlign="center" sx={{ mt: { xs: 5, md: 6 } }}>
            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              sx={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Follow Us
            </Typography>
            <Box>
              {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, i) => (
                <IconButton
                  key={i}
                  aria-label="social"
                  href="#"
                  sx={{
                    color: "#fff",
                    transition: "0.3s",
                    "&:hover": {
                      color: "#00E0FF",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Divider & Bottom Text */}
        <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", mt: 5, mb: 3 }} />
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#E0F7FA",
            fontSize: "0.875rem",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          &copy; {new Date().getFullYear()} Adbliss.tech — All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
