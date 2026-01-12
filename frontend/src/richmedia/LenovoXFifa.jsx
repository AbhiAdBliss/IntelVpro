import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

import Lenovoxfifa from "../assets/LonovoXFifa.png";
import LenovoFifaStrip from "../assets/LenovoXFifa-2.png";
import IntelCore from "../assets/LenovoXFifa-3.png";
import IntelVpro from "../assets/LenovoXFifa-4.png";

/* ✅ Smooth Left -> Right Animation (Text) */
const slideFromLeft = keyframes`
  0% { opacity: 0; transform: translate(-60px, -50%); }
  100% { opacity: 1; transform: translate(0px, -50%); }
`;

/* ✅ Smooth Fade Up (Logos) */
const fadeUp = keyframes`
  0% { opacity: 0; transform: translateY(22px); }
  100% { opacity: 1; transform: translateY(0px); }
`;

const LenovoXFifa = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        p: { xs: 1, sm: 2 }, // ✅ responsive padding
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", sm: "90%", md: "80%" }, // ✅ responsive width
          maxWidth: 1300,
          position: "relative",
          borderRadius: { xs: 1, md: 1 },
          overflow: "hidden",
        }}
      >
        {/* MAIN IMAGE */}
        <Box
          component="img"
          src={Lenovoxfifa}
          alt="Social Banner"
          sx={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }}
        />

        {/* TEXT */}
        <Typography
          sx={{
            position: "absolute",
            left: { xs: "5%", md: "6%" },
            top: { xs: "32%", sm: "33%", md: "35%" }, // ✅ responsive top position
            color: "#fff",
            fontWeight: 900,
            fontSize: { xs: "20px", sm: "34px", md: "85px" }, // ✅ responsive font
            lineHeight: { xs: 1.1, md: 1.05 },
            maxWidth: { xs: "85%", sm: "75%", md: "55%" }, // ✅ responsive width
            textShadow: "0px 4px 14px rgba(0,0,0,0.35)",
            opacity: 0,
            transform: "translate(-60px, -50%)",
            animation: `${slideFromLeft} 1.2s ease-out forwards`,
          }}
        >
          Collaboration’s <br />
          gone football.
        </Typography>

        {/* ✅ BOTTOM LEFT: Powered by + Intel Core + Intel vPro */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: "3%", md: "4%" },
            bottom: { xs: "3%", md: "5%" },
            opacity: 0,
            animation: `${fadeUp} 1s ease forwards`,
            animationDelay: "0.5s",
          }}
        >
          {/* Powered by */}
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: "10px", sm: "12px", md: "16px" }, // ✅ responsive text
              fontWeight: 500,
              mb: { xs: 0.6, md: 1 },
              textShadow: "0px 3px 10px rgba(0,0,0,0.35)",
            }}
          >
            Powered by
          </Typography>

          {/* Intel Row */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 1.5, md: 2 }, // ✅ responsive gap
              flexWrap: "wrap", // ✅ prevents overflow on small screens
            }}
          >
            {/* Intel Core */}
            <Box
              component="img"
              src={IntelCore}
              alt="Intel Core Ultra 7"
              sx={{
                width: { xs: "55px", sm: "70px", md: "95px" }, // ✅ responsive image
                height: "auto",
                display: "block",
                borderRadius: 1,
                filter: "drop-shadow(0px 6px 18px rgba(0,0,0,0.35))",
              }}
            />

            {/* ✅ Intel vPro image */}
            <Box
              component="img"
              src={IntelVpro}
              alt="Intel vPro"
              sx={{
                width: { xs: "55px", sm: "70px", md: "80px" }, // ✅ responsive image
                height: "auto",
                display: "block",
                filter: "drop-shadow(0px 6px 18px rgba(0,0,0,0.35))",
              }}
            />
          </Box>
        </Box>

        {/* ✅ BOTTOM RIGHT: Lenovo FIFA Strip */}
        <Box
          component="img"
          src={LenovoFifaStrip}
          alt="Lenovo FIFA Strip"
          sx={{
            position: "absolute",
            right: { xs: "2.5%", md: "4%" },
            bottom: { xs: "3%", md: "5%" },

            width: { xs: "140px", sm: "220px", md: "420px" }, // ✅ responsive width
            height: "auto",
            display: "block",

            opacity: 0,
            animation: `${fadeUp} 1s ease forwards`,
            animationDelay: "0.5s",
            filter: "drop-shadow(0px 6px 18px rgba(0,0,0,0.35))",
          }}
        />
      </Box>
    </Box>
  );
};

export default LenovoXFifa;
