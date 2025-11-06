import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
  Button
} from "@mui/material";
import Aboutimg1 from "../assets/About-img1.png";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";


const About = () => {
  const navigate = useNavigate();
 const values = [
    {
      title: "Innovation",
      desc: "We transform ideas into reality by staying ahead of trends and building creative digital experiences that move people and brands forward.",
      icon: "💡",
    },
    {
      title: "Collaboration",
      desc: "We believe in the power of teamwork — blending creativity, strategy, and technology to bring visions to life with purpose.",
      icon: "🤝",
    },
    {
      title: "Integrity",
      desc: "We are transparent, honest, and committed to building long-term partnerships rooted in trust and authenticity.",
      icon: "🧭",
    },
    {
      title: "Excellence",
      desc: "Every project we deliver reflects our passion for quality, precision, and user-centered design that drives measurable results.",
      icon: "🚀",
    },
    {
      title: "Simplicity",
      desc: "We create elegant, clutter-free solutions that simplify user journeys — making technology feel natural and effortless.",
      icon: "🎯",
    },
    {
      title: "Impact",
      desc: "We don’t just build; we empower brands to make lasting impressions through design, performance, and innovation.",
      icon: "🌍",
    },
  ];

  return (

    <Box>

   
    <Box sx={{ bgcolor: "#f9fafc", minHeight: "100vh", width: "100%" }}>
      {/* ✅ Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "60vh", md: "80vh" },
          backgroundImage: `url(${Aboutimg1})`,
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
            variant="h3"
            sx={{
              fontWeight: "700",
              fontFamily: "Poppins, sans-serif",
              mb: 2,
            }}
          >
            About <span style={{ color: "#64b5f6" }}>Adbliss.tech</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: "700px",
              mx: "auto",
              color: "#e0e0e0",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Empowering businesses to create impactful, fast, and scalable
            microsites for their campaigns, brands, and digital experiences.
          </Typography>
        </Box>
      </Box>

      {/* section  */}

      <Box sx={{ my: 8, mt: 15 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: 700,
            color: "#0a192f",
            mb: 3,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Our Core Beliefs
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            color: "#555",
            maxWidth: 700,
            mx: "auto",
            mb: 2,
            fontSize: "18px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Every microsite we build starts with purpose — blending creativity,
          innovation, and technology to shape powerful digital experiences that
          drive results and tell your story beautifully.
        </Typography>

        {/* main all card section */}
        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="stretch"
          sx={{
            px: { xs: 2, md: 6 },
            flexWrap: "nowrap",
            overflowX: "auto",
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": { height: "8px" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(0,0,0,0.2)",
              borderRadius: "4px",
            },
          }}
        >
          {/* ✅ Mission Card */}
          <Box
            sx={{
              py: 8,
              px: { xs: 2, md: 6 },
              bgcolor: "#f9fafc",
            }}
          >
            <Grid
              container
              spacing={5}
              justifyContent="center"
              alignItems="stretch"
              sx={{
                flexWrap: { xs: "wrap", md: "nowrap" },
                overflowX: { xs: "auto", md: "visible" },
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": { height: "8px" },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "rgba(0,0,0,0.2)",
                  borderRadius: "4px",
                },
              }}
            >
              {/* ✅ Our Mission Card */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  flex: "0 0 48%",
                  minWidth: "350px",
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    borderRadius: "20px",
                    p: 4,
                    height: "100%",
                    color: "black",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 16px 45px rgba(0,0,0,0.25)",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 700,
                      fontFamily: "Poppins, sans-serif",
                      color: "#1976d2",
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      color: "#444",
                    }}
                  >
                    Our mission is to empower businesses with high-performing
                    microsites that combine creativity, speed, and seamless
                    functionality. We strive to simplify digital presence while
                    enhancing engagement and driving measurable results for
                    every brand.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 3,
                      color: "#1976d2",
                      fontStyle: "italic",
                    }}
                  >
                    “We don’t just design microsites — we build digital
                    experiences that convert.”
                  </Typography>
                </Card>
              </Grid>

              {/* ✅ Our Vision Card */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  flex: "0 0 48%",
                  minWidth: "350px",
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    borderRadius: "20px",
                    p: 4,
                    height: "100%",
                    bgcolor: "#ffffff",
                    color: "#0a192f",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 16px 45px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 700,
                      color: "#1976d2",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Our Vision
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      color: "#444",
                    }}
                  >
                    Our vision is to become the global leader in smart microsite
                    solutions — empowering businesses to create personalized,
                    high-impact web experiences. We aim to make digital
                    transformation accessible, efficient, and truly
                    human-centric.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 3,
                      color: "#1976d2",
                      fontStyle: "italic",
                    }}
                  >
                    “Innovation and simplicity drive everything we create.”
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>

      {/* section  */}

      



      {/* section  */}

        <Box
      sx={{
        py: 10,
        px: { xs: 3, md: 8 },
        background: "linear-gradient(135deg, #0a192f 0%, #1976d2 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative gradient orbs */}
      <Box
        sx={{
          position: "absolute",
          top: "-50px",
          left: "-50px",
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(25,118,210,0.4), transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-60px",
          right: "-60px",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(255,255,255,0.15), transparent 80%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      {/* Section Title */}
      <Box textAlign="center" mb={6} sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: "#fff",
            fontFamily: "Poppins, sans-serif",
            mb: 2,
          }}
        >
          Our Core Values
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "rgba(255,255,255,0.8)",
            maxWidth: 750,
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          The principles that shape who we are, how we work, and the experiences
          we create — defining the culture behind every Microsite we build.
        </Typography>
      </Box>

      {/* Cards Grid */}
      <Grid container spacing={6} justifyContent="center" sx={{ position: "relative", zIndex: 1 }}>
        {values.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 4,
                borderRadius: "24px",
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "#fff",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                transition: "all 0.4s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 12px 40px rgba(25,118,210,0.3)",
                  background: "rgba(255,255,255,0.25)",
                  border:'2px solid #24b1eeff'
                },
                minHeight: 320,
              }}
            >
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  bgcolor: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 3,
                  fontSize: "2rem",
                }}
              >
                {item.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  color: "#fff",
                  letterSpacing: 0.6,
                  fontFamily: "Poppins, sans-serif",
                  textTransform: "uppercase",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.8,
                  maxWidth: 280,
                  mx: "auto",
                  fontSize: "0.95rem",
                }}
              >
                {item.desc}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

      {/* ✅ Mission, Vision, and Team sections section 2 */}
      <Container maxWidth="lg" sx={{mb:13 , pb:3}}>
        <Divider sx={{ my: 8 }} />

        <Box textAlign="center" mb={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              color: "#0a192f",
              mb: 1,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Meet Our Team
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#555" }}>
            A passionate group of creators, developers, and marketers dedicated
            to transforming ideas into reality.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {[
            { name: "Abhishek Patil", role: "Founder & CEO" },
            { name: "Priya Sharma", role: "UI/UX Designer" },
            { name: "Rohan Mehta", role: "Lead Developer" },
          ].map((member, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: "16px",
                  bgcolor: "#fff",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-8px)" },
                }}
              >
                <Avatar
                  src={`https://i.pravatar.cc/150?img=${i + 10}`}
                  alt={member.name}
                  sx={{
                    width: 100,
                    height: 100,
                    mx: "auto",
                    mb: 2,
                    border: "3px solid #1976d2",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#0a192f" }}
                >
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#555" }}>
                  {member.role}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* section  */}
     



    </Box>
    

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
            Let’s Build Something Great Together
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "rgba(255,255,255,0.85)",
              mb: 4,
              lineHeight: 1.7,
            }}
          >
            Whether you’re launching a new brand or scaling your online presence,
            Adbliss.tech is your partner in digital excellence.
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


 <Footer/>
     </Box>
  );
};

export default About;
