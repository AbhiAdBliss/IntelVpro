import React from 'react';
import { Box, Container, Divider,Typography } from '@mui/material';

const logos = [
  { src: '/Amazon-brand.png', alt: 'Amazon' },
  { src: '/Bajaj-brand.svg', alt: 'Bajaj' },
  { src: '/Cisco_logo.svg', alt: 'Cisco' },
  { src: '/Intel-logo.svg.png', alt: 'Intel' },
  { src: '/lenovo-brand.svg', alt: 'Lenovo' },
  { src: '/Taj-logo.svg', alt: 'Taj' },
  { src: '/shreeram-logo.webp', alt: 'Shreeram' },
  { src: '/Toshiba_logo.svg.png', alt: 'Toshiba' },
  { src: '/TVS_Motor_logo.svg.png', alt: 'TVS Motor' },
  { src: '/tvs_emerald_logo.webp', alt: 'TVS Emerald' },
  { src: '/Zeiss_logo.svg.png', alt: 'Zeiss' },
];

const LogosSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 6,
        mt: 9,
        overflow: 'hidden',
        bgcolor: "#f9f9f9",
      }}
    >
           <Typography
    variant="h2"
    sx={{
      fontWeight: 600,
      fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' }, 
      lineHeight: 1.3,
      textAlign:'center',
      py:8,
    
    }}
  >
    OUR CLIENTS
  </Typography>
      
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
     
        <Box sx={{ display: 'flex', overflow: 'hidden' }}>
          <Box
            className="animate-scroll-x"
            sx={{
              display: 'flex',
              gap: { xs: 2, sm: 3, lg: 4 },
            }}
          >
            {/* Duplicate the list for continuous scroll */}
            {logos.concat(logos).map((logo, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  width: { xs: 100, sm: 130, lg: 150 },
                  height: { xs: 40, sm: 50, lg: 60 },
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Divider sx={{ mt: { xs: 3, sm: 4 }, borderColor: 'primary.main' }} />
      </Container>

      {/* Add the animation styles */}
      <style>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-x {
          animation: scroll-x 20s linear infinite;
          width: max-content;
        }
        .animate-scroll-x:hover {
          animation-play-state: paused;
        }
      `}</style>
    </Box>
  );
};

export default LogosSection;
