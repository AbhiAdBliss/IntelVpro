import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
   Stack,
  Button,
} from "@mui/material";
import {
  WebOutlined,
  CampaignOutlined,
  BrushOutlined,
  TrendingUpOutlined,
  PhoneIphoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import Servicesimg1 from "../assets/Services-img1.png";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import CampaignIcon from "@mui/icons-material/Campaign";
import BusinessIcon from "@mui/icons-material/Business";
import EventIcon from "@mui/icons-material/Event";
import TouchAppIcon from "@mui/icons-material/TouchApp";


// Our Services
// At Adbliss.tech, we merge creativity, technology, and strategy to deliver digital solutions that drive real business results. From startups to enterprises — we empower brands to grow, engage, and succeed online.

const services = [
  {
    title: "Web Development",
    desc: "We craft responsive, high-performance websites that deliver seamless user experiences and align perfectly with your brand identity.",
    icon: <WebOutlined sx={{ fontSize: 40 }} />,
    color: "#1976d2",
  },
  {
    title: "Digital Marketing",
    desc: "Maximize your online visibility and brand reach with tailored marketing campaigns across Google, Meta, and other digital platforms.",
    icon: <CampaignOutlined sx={{ fontSize: 40 }} />,
    color: "#2196f3",
  },
  {
    title: "UI/UX Design",
    desc: "Our creative designers combine art and strategy to build visually stunning interfaces that engage and convert visitors effortlessly.",
    icon: <BrushOutlined sx={{ fontSize: 40 }} />,
    color: "#00bcd4",
  },
  {
    title: "SEO Optimization",
    desc: "We help your business climb to the top of search results with ethical, data-driven SEO strategies that bring organic traffic and growth.",
    icon: <SearchOutlined sx={{ fontSize: 40 }} />,
    color: "#43a047",
  },
  {
    title: "Mobile App Development",
    desc: "From concept to code — we build intuitive mobile apps that offer smooth performance, beautiful design, and engaging experiences.",
    icon: <PhoneIphoneOutlined sx={{ fontSize: 40 }} />,
    color: "#7b1fa2",
  },
  {
    title: "Brand Strategy",
    desc: "We help brands find their voice — crafting identity, visuals, and storytelling that connect emotionally with your audience.",
    icon: <TrendingUpOutlined sx={{ fontSize: 40 }} />,
    color: "#ff9800",
  },
];

const Services = () => {

  const solutions = [
    {
      title: "Campaign Microsites",
      description:
        "Ideal for product launches, seasonal campaigns, or events that demand attention and engagement.",
      icon: <CampaignIcon sx={{ fontSize: 55 }} />,
      color: "#2563eb", // blue
    },
    {
      title: "Corporate Partnerships",
      description:
        "Dedicated portals for B2B collaborations and co-branded experiences with seamless performance.",
      icon: <BusinessIcon sx={{ fontSize: 55 }} />,
      color: "#9333ea", // purple
    },
    {
      title: "Event & Webinar Pages",
      description:
        "Promote registrations, live streams, and engagement tracking for impactful event experiences.",
      icon: <EventIcon sx={{ fontSize: 55 }} />,
      color: "#f59e0b", // amber
    },
    {
      title: "Interactive Landing Pages",
      description:
        "Modern interfaces with animations, forms, and storytelling to convert visitors into customers.",
      icon: <TouchAppIcon sx={{ fontSize: 55 }} />,
      color: "#10b981", // green
    },
  ];

  const navigate = useNavigate();
  return (
    <Box sx={{ bgcolor: "#f9fafc", minHeight: "100vh" }}>
      {/* Hero Section */}
       <Box
  sx={{
    width: "100vw", 
    height: { xs: "70vh", md: "80vh" }, 
    backgroundImage: `url(${Servicesimg1})`,
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
    mx: "calc(-50vw + 50%)", 
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
      bgcolor: "rgba(10, 25, 47, 0.55)", 
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
      Empowering businesses to create impactful, fast, and scalable microsites for their campaigns, brands, and digital experiences.
    </Typography>
  </Box>
</Box>


{/* section 2 */}

 <Box
      sx={{
        py: { xs: 8, sm: 10 },
        px: 2,
        background:
          "linear-gradient(180deg, #f9fafb 0%, #eef2ff 50%, #f9fafb 100%)",
      }}
    >
      {/* Label */}
      <Typography
        align="center"
        sx={{
          color: "#0ea5e9",
          fontWeight: 700,
          letterSpacing: 1,
          mb: 2,
          textTransform: "uppercase",
          fontSize: { xs: "1rem", sm: "1.3rem" },
        }}
      >
        Our Microsite Solutions
      </Typography>

      {/* Heading */}
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: "#0f172a",
          fontWeight: 700,
          fontSize: { xs: "1.9rem", sm: "3.2rem" },
          mb: 3,
        }}
      >
        We Build Microsites That Deliver Impact
      </Typography>

      {/* Description */}
      <Typography
        align="center"
        sx={{
          color: "#475569",
          maxWidth: "850px",
          mx: "auto",
          mb: 8,
          fontSize: { xs: "1rem", sm: "1.2rem" },
          lineHeight: 1.7,
        }}
      >
        We specialize in designing and developing performance-driven microsites
        that combine creative storytelling with technical precision. Our process
        ensures your campaign stands out with fast load times, responsive
        layouts, and measurable analytics.
      </Typography>

      {/* Solution Highlights - Icon-based Grid */}
      <Grid
        container
        spacing={6}
        justifyContent="center"
        alignItems="stretch"
        sx={{ maxWidth: "1200px", mx: "auto" }}
      >
        {solutions.map((solution, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Stack
              spacing={2.5}
              alignItems="center"
              justifyContent="center"
              sx={{
                textAlign: "center",
                px: 2,
                py: 4,
                height: "100%",
                borderRadius: "18px",
                backgroundColor: "rgba(255,255,255,0.8)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                 
                  
                },
              }}
            >
              <Box
                sx={{
                  color: solution.color,
                  transition: "all 0.3s ease",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                {solution.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.1rem", sm: "1.4rem" },
                  color: "inherit",
                }}
              >
                {solution.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "inherit",
                  opacity: 0.9,
                  fontSize: { xs: "0.95rem", sm: "1.1rem" },
                  lineHeight: 1.6,
                }}
              >
                {solution.description}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>


      {/* Services Section */}
    <Container maxWidth="xlg" sx={{ py: 15 }}>
           <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontFamily: "Poppins, sans-serif",
              mb: 2,
              textAlign:'center'
            }}
          >
            Company Services
          </Typography>
  <Grid
    container
    spacing={6}
    justifyContent="center"
    alignItems="stretch"
    sx={{
        py:7,
      flexWrap: "wrap",
      overflowX: "auto",
      scrollbarWidth: "thin",
      "&::-webkit-scrollbar": { height: "8px" },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,0.2)",
        borderRadius: "4px",
        pb:3,
         
      },
    }}
  >
    {services.map((service, index) => (
      <Grid
        item
        key={index}
        sx={{
          flex: "0 0 450px",
          display: "flex",
          justifyContent: "center",
          position: "relative", 
          zIndex: 0, 
          
        }}
      >
        <Card
          sx={{
            flexGrow: 1,
            borderRadius: "20px",
            p: 4,
            textAlign: "center",
            background: "#fff",
            boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
            transition: "all 0.3s ease",
            position: "relative",
            zIndex: 1,
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: `0 16px 40px ${service.color}44`,
              zIndex: 10, 
            },
          }}
        >
          {/* Icon */}
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              bgcolor: `${service.color}15`,
              color: service.color,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              mb: 3,
              transition: "all 0.3s ease",
              "&:hover": { bgcolor: `${service.color}25` },
            }}
          >
            {service.icon}
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 1,
              mt:3,
              color: "#0a192f",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {service.title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: 1.8,
              mb: 3,
              mt:2,
            }}
          >
            {service.desc}
          </Typography>
        </Card>
      </Grid>
    ))}
  </Grid>
</Container>



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

export default Services;
