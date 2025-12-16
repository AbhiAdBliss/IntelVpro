import React from "react";
import { Box, Container, Typography } from "@mui/material";
import BannerImg from "../assets/PPbanner.png";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ fontFamily: "Poppins, sans-serif" }}>
      {/* ================= Banner Section ================= */}
      <Box
        sx={{
          backgroundImage: `url(${BannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "240px", sm: "300px", md: "400px" },
          display: "flex",
          alignItems: "center",
          color: "#fff",
          px: { xs: 2, sm: 0 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            fontWeight={600}
            sx={{
              fontSize: { xs: "22px", sm: "30px", md: "36px" },
              lineHeight: 1.2,
            }}
          >
            Your Unrivaled Business PC Solution
          </Typography>

          <Typography
            mt={2}
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              maxWidth: "800px",
            }}
          >
            Ready to accelerate productivity, maintain greater security, reduce
            your costs and provide employees with a great user experience?
          </Typography>
        </Container>
      </Box>

      {/* ================= Privacy Policy Content ================= */}
      <Container
        maxWidth="md"
        sx={{
          py: { xs: 4, sm: 6 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Typography
          fontWeight={700}
          mb={3}
          sx={{ fontSize: { xs: "22px", sm: "26px", md: "30px" } }}
        >
          Privacy Policies
        </Typography>

        <Typography
          fontWeight={600}
          mb={2}
          sx={{ fontSize: { xs: "16px", sm: "18px" } }}
        >
          Privacy and Data Use Policy for adbliss.tech
        </Typography>

        <Typography paragraph sx={{ fontSize: { xs: "14px", sm: "15px" } }}>
          <b>adbliss.tech</b> is an advertising network that may deliver
          advertisements to the Web sites you visit. <b>adbliss.tech</b>{" "}
          understands that your online privacy is important to you. We have
          created this Privacy Policy ("Policy") to explain what information we
          collect and how we use it.
        </Typography>

        <Typography paragraph sx={{ fontSize: { xs: "14px", sm: "15px" } }}>
          Please read this Policy carefully. By using the{" "}
          <b>adbliss.tech</b> Site Network or sharing information with us, you
          agree to this Policy.
        </Typography>

        <Typography paragraph sx={{ fontSize: { xs: "14px", sm: "15px" } }}>
          The terms “you,” “your,” and “yours” refer to the Web site visitor or
          consumer. The terms “adbliss.tech,” “we,” “us,” and “our” refer to
          AdBliss Digital Media LLP.
        </Typography>

        {/* ---------- Section ---------- */}
        <Typography fontWeight={600} mt={4} sx={{ fontSize: "18px" }}>
          Information We Collect – Ad Delivery & Reporting Across Multiple Sites
        </Typography>

        <Typography paragraph sx={{ fontSize: { xs: "14px", sm: "15px" } }}>
          We collect browser type, operating system, domain name, time of visit,
          and pages viewed to deliver ads and measure performance.
        </Typography>

        <Typography fontWeight={600} mt={4} sx={{ fontSize: "18px" }}>
          Relevant Advertising
        </Typography>

        <Typography paragraph sx={{ fontSize: { xs: "14px", sm: "15px" } }}>
          We collect anonymous data to deliver more relevant advertising based
          on user behavior across websites. You can opt-out anytime.
        </Typography>

        <Typography fontWeight={600} mt={4} sx={{ fontSize: "18px" }}>
          Internet Technology
        </Typography>

        <Typography paragraph sx={{ fontSize: { xs: "14px", sm: "15px" } }}>
          We use log files, web beacons, and cookies to collect browsing data.
        </Typography>

        <Box component="ul" sx={{ pl: 3, fontSize: { xs: "14px", sm: "15px" } }}>
          <li>Log files collect IP address, browser type, ISP, and timestamps.</li>
          <li>Web beacons help track pages viewed and ad engagement.</li>
          <li>Cookies store browsing activity and deliver relevant ads.</li>
        </Box>

        <Typography paragraph sx={{ fontSize: { xs: "14px", sm: "15px" } }}>
          Learn more about cookies at{" "}
          <a href="https://www.allaboutcookies.org" target="_blank" rel="noreferrer">
            allaboutcookies.org
          </a>
        </Typography>

        <Typography fontWeight={600} mt={4} sx={{ fontSize: "18px" }}>
          Security
        </Typography>

        <Typography paragraph sx={{ fontSize: { xs: "14px", sm: "15px" } }}>
          We use standard industry measures to protect your data, but no system
          is 100% secure.
        </Typography>
      </Container>

      {/* ================= Footer ================= */}
      <Box
        sx={{
          background: "#111",
          color: "#fff",
          py: 3,
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography sx={{ fontSize: { xs: "13px", sm: "14px" } }}>
          © 2025 AdBliss Digital Media LLP
        </Typography>
        <Typography sx={{ fontSize: { xs: "12px", sm: "13px" } }}>
          Kudlu Gate, Bangalore, Karnataka, India.
        </Typography>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;