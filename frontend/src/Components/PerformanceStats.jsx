// PerformanceStats.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Stack,
} from "@mui/material";
import BusinessCenterTwoToneIcon from "@mui/icons-material/BusinessCenterTwoTone";
import BoltTwoToneIcon from "@mui/icons-material/BoltTwoTone";
import SecurityTwoToneIcon from "@mui/icons-material/SecurityTwoTone";

const StatCard = ({ icon, title, caption, color }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: 230,
        width:390,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        transition: "transform .2s ease, box-shadow .2s ease, border-color .2s ease",
        textAlign: "center",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
          borderColor: color,
        },
      }}
    >
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        {/* Icon container with dynamic color */}
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            bgcolor: color,
            border: "2px solid",
            borderColor: color,
            color: "#fff",
          }}
          aria-hidden
        >
          {icon}
        </Box>

        <Typography
          variant="h5"
          component="p"
          sx={{ fontWeight: 700, letterSpacing: 0.2 }}
        >
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {caption}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default function PerformanceStats() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 20 },
        background:
          "linear-gradient(180deg, rgba(2,6,23,0.02) 0%, rgba(2,6,23,0.04) 100%)",
          
      }}
    >
      <Container maxWidth="xl">
        {/* Section Heading */}
        <Stack spacing={2} sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 1.5,
              color: "primary.main",
              fontWeight: 700,
              fontSize:'1.4rem'
            }}
          >
            Performance Metrics / Stats
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, lineHeight: 1.2 , mt:5 }}>
            Trusted by Professionals Worldwide
          </Typography>
          <Typography color="text.secondary" sx={{ mx: "auto" }}>
            Real results backed by teams that rely on us every day.
          </Typography>
        </Stack>

        {/* Stats Grid */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
          sx={{mt:10 ,width:'100%'}}
          
        >
          <Grid item xs={12} md={4}>
            <StatCard
              icon={<BusinessCenterTwoToneIcon fontSize="medium" />}
              title="95% of IT teams"
              caption="report improved performance, faster issue resolution, and stronger team collaboration for a more reliable IT infrastructure."
              color="#1E88E5" 
              
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <StatCard
              icon={<BoltTwoToneIcon fontSize="medium" />}
              title="3× faster startup"
              caption="deliver 3× faster startup speeds with optimized system performance and seamless data processing for time-sensitive tasks."
              color="#43A047" 
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <StatCard
              icon={<SecurityTwoToneIcon fontSize="medium" />}
              title="40% higher security"
              caption="achieve a 40% boost in endpoint protection efficiency with faster threat detection, automated response, and stronger data safeguards across all systems."
              color="#8E24AA" 
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
