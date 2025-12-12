import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent,  Divider , CardMedia } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ChecklistIcon from '@mui/icons-material/Checklist';
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideocamIcon from "@mui/icons-material/Videocam";
import ComputerIcon from "@mui/icons-material/Computer";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import heroImage from '../assets/hero-img1.png';
import heroImage2 from '../assets/hero-img2.png';
import heroImage3 from '../assets/hero-im3.png';
import heroImage4 from '../assets/hero-img4.png';
import heroImage5 from '../assets/hero-img5.png';
import heroImage6 from '../assets/hero-img6.png';
import heroImage7 from '../assets/hero-img7.png';
import heroImage8 from '../assets/hero-img8.png';
import heroImage9 from '../assets/hero-img9.png';
import Footer from './Footer';
import BrandLogo from "./BrandLogo";
import { FaChevronRight } from 'react-icons/fa6'
import { useNavigate } from "react-router-dom";
import PerformanceStats from './PerformanceStats';







const features = [
  {
    icon: <ShoppingCartCheckoutIcon sx={{ fontSize: 40, color: '#00bfa5' }} />,
    title: 'Grow your business anywhere customers spend their time',
    description:
      "Reach customers while they shop. Our offerings help you achieve your advertising goals while helping to bring a global audience of customers the products they're looking for.",
  },
  {
    icon: <MonetizationOnIcon sx={{ fontSize: 40, color: '#6a1b9a' }} />,
    title: 'Ad solutions for every budget',
    description:
      "Choose the budget that's right for your business. You decide how much you want to spend, and just $10 USD a day can help increase sales.",
  },
  {
    icon: <ChecklistIcon sx={{ fontSize: 40, color: '#d32f2f' }} />,
    title: 'Quick and simple execution',
    description:
      "Create and launch a campaign in as little as 5 minutes. Our ads are designed for everyone, meaning you don't need to have any advertising experience to launch a campaign. We’ll provide performance insights and reporting before and after campaigns, too.",
  },
];


// section 
const products = [
    {
      icon: <ComputerIcon sx={{ fontSize: 60, color: "#FFC107" }} />,
      title: "Adbliss.tech DSP",
      subtitle: "REACH AUDIENCES WHERE THEY SPEND THEIR TIME",
      description:
        "Enables advertisers to programmatically buy display, video, and audio ads.",
    },
    {
      icon: <HeadphonesIcon sx={{ fontSize: 60, color: "#2196F3" }} />,
      title: "Audio ads",
      subtitle: "GO BEYOND THE SCREEN",
      description:
        "10-to-30-second audio ads played periodically during breaks between content.",
    },
    {
      icon: <DesignServicesIcon sx={{ fontSize: 60, color: "#00E5A0" }} />,
      title: "Creative solutions",
      subtitle: "DELIVER YOUR UNIQUE MESSAGE",
      description:
        "Tailor-made advertising experiences based on your business goals.",
    },
  ];


//   section 
const cards = [
 
  {
    image: heroImage5,
    title:
      'Accelerate business outcomes with your tech refresh',
    description:
      '  With Lenovo as your trusted IT partner, enjoy a seamless and secure experience tailored to your business goals. Discover Lenovo TruScale Device as a Service for easy access to Windows 11 Pro devices — without large upfront costs.',
    tag: 'Press Releases',
     link: 'https://businestech.in/mailer/win11/index.php?referrer=google',

  },
 
  {
    image: heroImage7,
    title:
      'Move from OpenAI to Open Source with OPEA',
    description:
      'Moving from OpenAI to open-source solutions offers AI practitioners enhanced data privacy control and the potential for reduced costs. The shift emphasizes open-source standards across datasets, formats, and APIs, which empowers greater flexibility and control.',
    tag: 'Press Releases',
     link: 'https://businestech.in/mailer/vproq2/v2.php',

  },
   {
    image: heroImage4,
    title: 'Discover more business potential with AI PCs',
    description:
      'A robust foundation is key to your AI enterprise vision and strategy. Make the move now to empower your team with the latest AI PCs for a competitive edge.',
    tag: 'Press Releases',
     link: 'http://3.7.30.237/',
  },
   {
    image: heroImage6,
    title:
      'Move from OpenAI to Open Source with OPEA',
    description:
      'Moving from OpenAI to open-source solutions offers AI practitioners enhanced data privacy control and the potential for reduced costs. The shift emphasizes open-source standards across datasets, formats, and APIs, which empowers greater flexibility and control.',
    tag: 'Press Releases',
     link: 'https://businestech.in/mailer/ai/index.php?referrer=google',

    
  },
  {
    image: heroImage8,
    title:
      'Move from OpenAI to Open Source with OPEA',
    description:
      'Moving from OpenAI to open-source solutions offers AI practitioners enhanced data privacy control and the potential for reduced costs. The shift emphasizes open-source standards across datasets, formats, and APIs, which empowers greater flexibility and control.',
    tag: 'Press Releases',
     link:  'https://businestech.in/mailer/datacenter-q2/v2.php',

   
  },
  {
    image: heroImage9,
    title:
      'Move from OpenAI to Open Source with OPEA',
    description:
      'Moving from OpenAI to open-source solutions offers AI practitioners enhanced data privacy control and the potential for reduced costs. The shift emphasizes open-source standards across datasets, formats, and APIs, which empowers greater flexibility and control.',
    tag: 'Press Releases',
     link:  'https://businestech.in/mailer/datacenter-q2/v3.php',
    
  },
];

// section 
 const stats = [
    { value: "#1", label: "Buyer Intent" },
    { value: "417M", label: "Professionals" },
    { value: "116", label: "Functions" },
    { value: "129", label: "Industries" },
  ];

const Hero = () => {
   const navigate = useNavigate();
  return (
    <Box>
      {/* Hero Section */}
     <Box
  sx={{
    position: 'relative',
    height: { xs: '70vh', sm: '80vh' },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    px: 2,
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', 
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.40)',
      zIndex: 1,
    },
  }}
>
  <Container sx={{ position: 'relative', zIndex: 2 }}>
    <Typography
      variant="h3"
      component="h1"
      gutterBottom
      sx={{
        fontWeight: 'bold',
        fontSize: { xs: 32, sm: 45, md:50, lg:50 },
        lineHeight: 1.2,
      }}
    >
      Experience Innovation. Power. Performance.
    </Typography>

    <Typography
      variant="h5"
      component="p"
      gutterBottom
      sx={{
        mb: 4,
        fontSize: { xs: 16, sm: 20, md: 25, lg: 24 },
        px: { xs: 1, sm: 5, md: 10 },
      }}
    >
     Discover how cutting-edge technology transforms everyday business efficiency
Built to perform, designed to empower — welcome to a new era of digital excellence.
    </Typography>

    <Button
      variant="contained"
      color="primary"
      sx={{
        px: 1.5,
        py: 1.3,
        width: { xs: 130, sm: 150 },
        fontSize: { xs: 14, sm: 16 },
      }}
      onClick={() => navigate("/register")} 
    >
      Start Now
    </Button>
  </Container>
</Box>

{/* section  */}
 
<Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 6, md: 10 },
        mt: 6,
        
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          letterSpacing: 2,
          textTransform: "uppercase",
          mb: { xs: 4, md: 8 },
          color: "#1c1c1c",
          fontSize: { xs: "1.7rem", sm: "2.2rem", md: "2.8rem" },
          lineHeight: 1.2,
        }}
      >
        Engage All Decision-Makers
      </Typography>

      {/* Stats Grid */}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, sm: 5, md: 8 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {stats.map((stat, index) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  color: "#3f95f2ff",
                  fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3.5rem" },
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
                  lineHeight: 1.6,
                }}
              >
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>


      {/* Section 2 */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 3,
          mt: { xs: 8, md: 15 },
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          fontWeight={700}
          gutterBottom
          align="center"
          mb={1}
          sx={{
            fontSize: { xs: 26, sm: 32, md: 60 },
            textAlign: 'center',
            px: { xs: 2, sm: 5 },
          }}
        >
          Available to businesses of all sizes
        </Typography>
        <Typography
          variant="body1"
          align="center"
          mb={6}
          color="text.primary"
          sx={{ maxWidth: 800, fontSize: { xs: 15, sm: 17 , md:20 }, px: 2 , mt:2 }}
        >
          And accessible to marketers of every level of expertise. Amazon Ads provides ad solutions that help your business connect with customers at every stage of their journey.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 3, sm: 4, md: 5 },
          }}
        >
          {features.map((feature, i) => (
            <Box
              key={i}
              sx={{
                width: { xs: '90%', sm: 350, md: 380 },
                border: '1px solid #ddd',
                mt:8,
                borderRadius: 2,
                p: { xs: 3, sm: 4 },
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 2,
                boxShadow: '0 4px 8px rgba(0,0,0,0.30)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                },
              }}
            >
              <Box>{feature.icon}</Box>
              <Typography
                variant="h5"
                component="h3"
                fontWeight={700}
                sx={{ fontSize: { xs: 18, sm: 20 } }}
              >
                {feature.title}
              </Typography>
              <Typography
                color="text.secondary"
                lineHeight={1.6}
                sx={{ textAlign: 'justify', fontSize: { xs: 14, sm: 15 } }}
              >
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

<BrandLogo/>



     

      {/* Section 3 */}
     <Box
  sx={{
    bgcolor: "#0A2540",
    color: "#fff",
    py: { xs: 8, sm: 10 },
    textAlign: "center",
    mt: { xs: 10, md: 15 },
    px: { xs: 2, sm: 4 },
  }}
>
  <Typography
    variant="h1"
    fontWeight={700}
    sx={{ fontSize: { xs: 26, sm: 32, md: 55 } }}
  >
    Ad Products
  </Typography>
  <Typography
    variant="subtitle1"
    sx={{
      letterSpacing: 2,
      mt: 1,
      textTransform: "uppercase",
      fontSize: { xs: 12, sm: 14, md: 16 },
    }}
  >
    Self-Service, Smart & Easy-to-Use Advertising Solutions
  </Typography>

  {/* Content1 Card 1 */}
  <Box
  sx={{
    mt: { xs: 5, sm: 8 },
    mx: "auto",
    maxWidth: "1100px",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    bgcolor: "#f9f9f9",
    color: "#000",
    borderRadius: 4,
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    p: { xs: 3, sm: 5, md: 6 },
    textAlign: { xs: "center", md: "left" },
    width: "100%",
    gap: { xs: 0, md: 4 }, 
    minHeight: { xs: "400px", md: "460px" },
  }}
>
  {/* Left Section */}
  <Box
    sx={{
      flex: "1 1 400px",
      mb: { xs: 0, md: 0 },
      pb: { xs: 0, md: 0 },
      px: { xs: 0, md: 2 },
    }}
  >
    <Box
      sx={{
        backgroundColor: "#004aad",
        width: 60,
        height: 60,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2,
        mx: { xs: "auto", md: 0 },
      }}
    >
      <LaptopMacIcon sx={{ fontSize: 32, color: "#fff" }} />
    </Box>

    <Typography
      variant="h4"
      fontWeight={700}
      sx={{ fontSize: { xs: 22, sm: 26, md: 30 } }}
    >
      Sponsored Products
    </Typography>

    <Typography
      variant="subtitle2"
      sx={{
        mb: 2,
        letterSpacing: 1.5,
        textTransform: "uppercase",
        color: "#444",
        fontSize: { xs: 13, sm: 14 },
        mt: { xs: 6, md: 2 }, 
      }}
    >
      Improve Visibility of Your Products
    </Typography>

    <ul
      style={{
        lineHeight: 1.8,
        margin: 0,
        padding: 0,
        textAlign: "left",
        fontSize: "18px",
        listStylePosition: "inside",
        fontFamily: "inherit",
      }}
    >
      <li>Cost-per-click advertising</li>
      <li>Appear in search results and product pages</li>
      <li>Feature products relevant to shopping intent</li>
    </ul>
  </Box>

  {/* Right Section */}
  <Box
    component="img"
    src={heroImage2}
    alt="Sponsored Product"
    sx={{
      flex: "1 1 400px",
      width: "100%",
      height: "auto",
      maxWidth: { xs: "100%", sm: "450px", md: "420px" },
      mt: { xs: 0, md: 0 },
      borderRadius: 3,
      objectFit: "contain",
      display: "block",
      mx: { xs: "auto", md: 0 },
    }}
  />
</Box>


{/* section 3 container 2 */}

<Box
  sx={{
    mt: { xs: 5, sm: 8 },
    mx: "auto",
    maxWidth: "1100px",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { xs: "center", md: "space-between" },
    alignItems: { xs: "stretch", md: "center" },
    bgcolor: "#f9f9f9",
    color: "#000",
    borderRadius: 4,
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    p: { xs: 0, sm: 5, md: 6 }, // remove extra padding on mobile
    textAlign: { xs: "center", md: "left" },
    width: "100%",
    gap: { xs: 0, md: 4 },
    minHeight: { xs: "auto", md: "440px" },
    overflow: "hidden",
  }}
>
  {/* Left Section */}
  <Box
    sx={{
      flex: "1 1 400px",
      mb: { xs: 0, md: 0 },
      px: { xs: 2, md: 2 },
      py: { xs: 3, md: 0 },
      bgcolor: "#f9f9f9",
    }}
  >
    <Box
      sx={{
        backgroundColor: "#004aad",
        width: 60,
        height: 60,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2,
        mx: { xs: "auto", md: 0 },
      }}
    >
      <StorefrontIcon sx={{ fontSize: 32, color: "#fff" }} />
    </Box>

    <Typography
      variant="h4"
      fontWeight={700}
      sx={{ fontSize: { xs: 22, sm: 26, md: 30 } }}
    >
      Sponsored Brands
    </Typography>

    <Typography
      variant="subtitle2"
      sx={{
        mb: 2,
        letterSpacing: 1.5,
        textTransform: "uppercase",
        color: "#444",
        fontSize: { xs: 13, sm: 14 },
        mt: { xs: 6, md: 2 }, 

      }}
    >
      Boost brand awareness
    </Typography>

    <ul
      style={{
        lineHeight: 1.8,
        margin: 0,
        padding: 0,
        textAlign: "left",
        fontSize: "18px",
        listStylePosition: "inside",
        fontFamily: "inherit",
        
         
      }}
    >
      <li>Cost-per-click</li>
      <li>Appear in shopping results and on product pages</li>
      <li>Feature custom headlines, videos, and images</li>
    </ul>
  </Box>

  {/* Right Section */}
  <Box
    component="img"
    src={heroImage3}
    alt="Sponsored Product"
    sx={{
      flex: "1 1 400px",
      width: "100%",
      height: "auto",
      maxWidth: { xs: "100%", sm: "100%", md: "420px" },
      borderRadius: { xs: 0, md: 3 },
      objectFit: "cover",
      display: "block",
      m: 0, // removes all margin
    }}
  />
</Box>




  {/* section 3 container 3 */}

 <Box
  sx={{
    mt: { xs: 5, sm: 8 },
    mx: "auto",
    maxWidth: "1100px",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    bgcolor: "#f9f9f9",
    color: "#000",
    borderRadius: 4,
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    p: { xs: 3, sm: 5, md: 6 },
    textAlign: { xs: "center", md: "left" },
    width: "100%",
    gap: { xs: 0, md: 4 },
    minHeight: { xs: "360px", md: "440px" }, 
  }}
>
  {/* Left Section (Text) */}
  <Box
    sx={{
      flex: "1 1 400px",
      mb: { xs: 0, md: 0 }, 
      px: { xs: 0, md: 2 },
    }}
  >
    <Box
      sx={{
        backgroundColor: "#004aad",
        width: 60,
        height: 60,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2,
        mx: { xs: "auto", md: 0 },
      }}
    >
      <VideocamIcon sx={{ fontSize: 32, color: "#fff" }} />
    </Box>

    <Typography
      variant="h4"
      fontWeight={700}
      sx={{ fontSize: { xs: 22, sm: 26, md: 30 } }}
    >
      Video ads
    </Typography>

    <Typography
      variant="subtitle2"
      sx={{
        mb: 2,
        letterSpacing: 1.5,
        textTransform: "uppercase",
        color: "#444",
        fontSize: { xs: 13, sm: 14 },
        mt: { xs: 6, md: 2 }, 

      }}
    >
      Showcase your story
    </Typography>

    <ul
      style={{
        lineHeight: 1.8,
        margin: 0,
        padding: 0,
        textAlign: "left",
        fontSize: "18px",
        listStylePosition: "inside",
        fontFamily: "inherit",
         mt: { xs: 3, md: 1 }, 
      }}
    >
      <li>
        Use Streaming TV and online video ads to put your brand in the spotlight alongside their favorite movies, TV shows, news, and live sports
      </li>
    </ul>
  </Box>

  {/* Right Section (Video) */}
  <Box
    sx={{
      flex: "1 1 400px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      mt: { xs: 0, md: 0 }, 
    }}
  >
    <Box
      component="video"
      src="/GEMINI Cooking OIL.mp4"
      autoPlay
      muted
      loop
      playsInline
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: "450px", md: "420px" },
        borderRadius: 3,
        boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
        objectFit: "cover",
      }}
    />
  </Box>
</Box>




 {/* section 3 container 4 */}

<Box
  sx={{
    py: { xs: 8, md: 10 },
    px: { xs: 3, md: 8 },
    textAlign: "center",
  }}
>
  <Grid
    container
    spacing={3}
    justifyContent="center"
    alignItems="stretch"
  >
    {products.map((item, index) => (
      <Grid
        item
        xs={12} 
        sm={6}   
        md={4}   
        key={index}
      >
        <Card
          sx={{
            height: "100%",
            maxWidth: 400,  
    mx: "auto",  
            borderRadius: 2,
            p: 3,
            textAlign: "left",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
            },
          }}
        >
          <CardContent>
            <Box sx={{ mb: 2 }}>{item.icon}</Box>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 1,
                color: "#111",
              }}
            >
              {item.title}
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{
                letterSpacing: 2,
                fontWeight: 600,
                color: "#1C1C1C",
                mb: 2,
              }}
            >
              {item.subtitle}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#333", lineHeight: 1.6, mb: 3 }}
            >
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>

  

</Box> 


{/* Full Page Iframe */}


{/* section 4  */}

<Box sx={{mt:15 , textAlign:'center' , pb:5}}>
<Box sx={{ mt: 10, textAlign: 'center', px: { xs: 2, sm: 4, md: 6 } }}>
  <Typography
    variant="h2"
    sx={{
      fontWeight: 600,
      fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' }, 
      lineHeight: 1.3,
    }}
  >
    Our Microsites
  </Typography>

  <Typography
    variant="h5"
    sx={{
      fontWeight: 400,
      fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' }, 
      mt: 2,
      color: '#555',
      lineHeight: 1.6,
      py:2
    }}
  >
    Empower your digital marketing strategy with tailored microsites designed to capture leads,
    boost engagement, <br /> and drive measurable results
  </Typography>
</Box>


<Box sx={{ py: 10, px: { xs: 2, md: 6 } }}>
    
  <Grid
    container
    spacing={5}
    justifyContent="center"
    alignItems="stretch"
  >
    

    {cards.map((card, index) => (
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        key={index}
        display="flex"
        justifyContent="center"
      >
       <Card
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 3,
    boxShadow: '0 4px 15px rgba(20, 20, 20, 0.15)',
    overflow: 'hidden',
    bgcolor: 'white',
    width: '100%',
    height: '100%',
    maxWidth: 600,
    cursor: 'pointer',
    border: '1px solid transparent', 
    transition: 'all 0.4s ease', 
    '&:hover': {
      transform: 'translateY(-6px)',
      boxShadow: '0 8px 25px rgba(34, 34, 34, 0.25)',
      border: '2px solid #1976d2', 
    },
  }}
  onClick={() => window.open(card.link, '_blank')}
>

          {/* Image Section */}
          <CardMedia
            component="img"
            height="220"
            image={card.image}
            alt={card.title}
            sx={{
              objectFit: 'cover',
            }}
          />

          {/* Text Content */}
          <CardContent sx={{ flexGrow: 1, p: 3 }}>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{
                color: '#111',
                mb: 1.5,
                lineHeight: 1.4,
                fontSize: { xs: 17, sm: 18 },
              }}
            >
              {card.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#555',
                mb: 2,
                fontSize: { xs: 14, sm: 15 },
                flexGrow: 1,
              }}
            >
              {card.description}
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Button
              disableElevation
              variant="contained"
              size="small"
              sx={{
                backgroundColor: '#f0f4f8',
                color: '#555',
                borderRadius: 20,
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#e3e9ef',
                },
              }}
            >
              {card.tag}
            </Button>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>
    
</Box>

{/* section  */}

<PerformanceStats/>

{/* section last */}
 <Box
        component="section"
        sx={{
          py: { xs: 10, sm: 8 },
          background: 'linear-gradient(135deg, #5aa0b8ff, #4182d6ff)',
          color: 'white',
          pt:2
        }}
      >
        <Container maxWidth="lg">
          {/* Title */}
          <Box textAlign="center">
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '24px', sm: '32px', lg: '55px' },
              }}
            ></Typography>
          </Box>
          {/* Subtitle */}
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '22px', sm: '30px', lg: '45px' },
                lineHeight: 1.2,
              }}
            >
             Transform Engagement with Powerful Microsites
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 3,
                maxWidth: {
                  xs: '100%',
                  sm: '90%',
                  md: '80%',
                  textAlign: 'center',
                },
                mx: 'auto',
                fontSize: { xs: '16px', sm: '18px', lg: '20px' },
                lineHeight: 1.7,
              }}
            >
              At Adbliss.tech, we craft dynamic, conversion-focused microsites that amplify your campaigns, capture quality leads, and deliver measurable marketing success.
            </Typography>
          </Box>
          {/* Button */}
          <Box display="flex" justifyContent="center" mt={6}>
            
              <Button
                variant="outlined"
                endIcon={<FaChevronRight />}
                sx={{
                  borderColor: '#f7faf9',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '19px',
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1.5, sm: 2 },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#fdfcfd',
                    color: '#333333',
                    borderColor: '#fdfcfd',
                  },
                  '&:active': {
                    transform: 'scale(0.95)',
                    backgroundColor: '#7c3aed',
                    color: '#fff',
                  },
                  
                }}
                onClick={() => navigate("/register")} 

              >
                Get in Touch
              </Button>
            
          </Box>
        </Container>
      </Box>




<Footer/>

    </Box>
  );
};

export default Hero;
