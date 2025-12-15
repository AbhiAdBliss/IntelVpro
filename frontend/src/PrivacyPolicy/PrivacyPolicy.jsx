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
          height: "400px",
          display: "flex",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight={600}>
            Your Unrivaled Business PC Solution
          </Typography>

          <Typography mt={2} fontSize="18px">
            Ready to accelerate productivity, maintain greater security,
            reduce your costs and provide employees with a great user
            experience?
          </Typography>
        </Container>
      </Box>

      {/* ================= Privacy Policy Content ================= */}
      <Container sx={{ padding: "50px 0", maxWidth: "900px" }}>
        <Typography variant="h4" fontWeight={700} mb={3}>
          Privacy Policies
        </Typography>

        <Typography variant="h6" fontWeight={600} mb={2}>
          Privacy and Data Use Policy for businestech.in
        </Typography>

        <Typography paragraph>
          <b>businestech.in</b> is an advertising network that may deliver
          advertisements to the Web sites you visit.
          <b> businestech.in</b> understands that your online privacy is
          important to you. We have created this Privacy Policy ("Policy") to
          explain what information we collect and how we use it.
        </Typography>

        <Typography paragraph>
          Please read this Policy carefully. By using the{" "}
          <b>businestech.in</b> Site Network or sharing information with us,
          you agree to this Policy.
        </Typography>

        <Typography paragraph>
          The terms “you,” “your,” and “yours” refer to the Web site visitor or
          consumer. The terms “businestech.in,” “we,” “us,” and “our” refer to
          AdBliss Digital Media LLP.
        </Typography>

        {/* ---------- Section ---------- */}
        <Typography variant="h6" fontWeight={600} mt={4}>
          Information We Collect – Ad Delivery & Reporting Across Multiple Sites
        </Typography>

        <Typography paragraph>
          We collect browser type, operating system, domain name, time of visit,
          and pages viewed to deliver ads and measure performance.
        </Typography>

        {/* ---------- Section ---------- */}
        <Typography variant="h6" fontWeight={600} mt={4}>
          Relevant Advertising
        </Typography>

        <Typography paragraph>
          We collect anonymous data to deliver more relevant advertising based
          on user behavior across websites. You can opt-out anytime.
        </Typography>

        {/* ---------- Section ---------- */}
        <Typography variant="h6" fontWeight={600} mt={4}>
          Internet Technology
        </Typography>

        <Typography paragraph>
          We use log files, web beacons, and cookies to collect browsing data.
        </Typography>

        <ul style={{ paddingLeft: "20px" }}>
          <li>
            Log files collect IP address, browser type, ISP, and timestamps.
          </li>
          <li>
            Web beacons help track pages viewed and ad engagement.
          </li>
          <li>
            Cookies store browsing activity and deliver relevant ads.
          </li>
        </ul>

        <Typography paragraph>
          Learn more about cookies at{" "}
          <a
            href="https://www.allaboutcookies.org"
            target="_blank"
            rel="noreferrer"
          >
            allaboutcookies.org
          </a>
        </Typography>

        {/* ---------- Section ---------- */}
        <Typography variant="h6" fontWeight={600} mt={4}>
          Personally Identifiable Information
        </Typography>

        <Typography paragraph>
          We do not collect personal data unless you voluntarily submit it via
          forms on this website.
        </Typography>

        {/* ---------- Section ---------- */}
        <Typography variant="h6" fontWeight={600} mt={4}>
          Third Party Data Usage
        </Typography>

        <Typography paragraph>
          We obtain data from third-party companies for analytics, research, and
          marketing purposes.
        </Typography>

        {/* ---------- Section ---------- */}
        <Typography variant="h6" fontWeight={600} mt={4}>
          Sharing Your Information
        </Typography>

        <ol style={{ paddingLeft: "20px" }}>
          <li>To service providers assisting our operations</li>
          <li>To comply with legal requirements</li>
          <li>To enforce our terms of use</li>
          <li>To protect our users and the public</li>
          <li>With marketing partners</li>
          <li>For data validation and analytics</li>
        </ol>

        <Typography paragraph>
          We may share aggregated, non-PII data with advertisers and partners.
        </Typography>

        {/* ---------- More Sections ---------- */}
        <Typography variant="h6" fontWeight={600} mt={4}>
          Corporate Changes
        </Typography>

        <Typography paragraph>
          If businestech.in undergoes acquisition or restructuring, your data
          may be transferred.
        </Typography>

        <Typography variant="h6" fontWeight={600} mt={4}>
          Information Collected by Third Party Sites
        </Typography>

        <Typography paragraph>
          We are not responsible for how third-party websites collect and use
          your data.
        </Typography>

        <Typography variant="h6" fontWeight={600} mt={4}>
          Data Retention
        </Typography>

        <Typography paragraph>
          Cookies used for behavioral advertising expire in one year unless
          deleted earlier.
        </Typography>

        <Typography variant="h6" fontWeight={600} mt={4}>
          Security
        </Typography>

        <Typography paragraph>
          We use standard industry measures to protect your data, but no system
          is 100% secure.
        </Typography>

        <Typography variant="h6" fontWeight={600} mt={4}>
          Changes to This Policy
        </Typography>

        <Typography paragraph>
          We may update this Policy occasionally. You are encouraged to review
          it frequently.
        </Typography>
      </Container>

      {/* ================= Footer ================= */}
      <Box
        sx={{
          background: "#111",
          color: "#fff",
          padding: "30px 0",
          textAlign: "center",
          mt: 5,
        }}
      >
        <Typography>© 2024 AdBliss Digital Media LLP</Typography>
        <Typography>Kudlu Gate, Bangalore, Karnataka, India.</Typography>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
