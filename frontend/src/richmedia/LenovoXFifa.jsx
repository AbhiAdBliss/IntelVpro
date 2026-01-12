import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import socialImg from "../assets/collaboration-social.jpg";
import logoLockup from "../assets/lenovoxfifa.png";

/* ✅ Professional Animations */
const fadeSlideUp = keyframes`
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const fadeSlideRight = keyframes`
  0% { opacity: 0; transform: translateX(-40px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const fadeSlideLeft = keyframes`
  0% { opacity: 0; transform: translateX(40px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const zoomIn = keyframes`
  0% { transform: scale(1.07); }
  100% { transform: scale(1); }
`;

const floatSoft = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const scaleHover = {
  transition: "transform 0.4s ease",
  "&:hover": {
    transform: "scale(1.03)",
  },
};

const LenovoXFifa = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f4f2f2 0%, #ffffff 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1300,
          background: "#fff",
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
          animation: `${fadeSlideUp} 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) forwards`,
        }}
      >
        {/* ✅ SOCIAL IMAGE with cinematic zoom */}
        <Box
          sx={{
            display: "block",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={socialImg}
            alt="Collaboration’s gone football"
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: { md: 520 },
              objectFit: "contain",
              backgroundColor: "#ffffff",
              display: "block",
              animation: `${zoomIn} 1.2s ease-out forwards`, // ✅ zoom in
              transition: "transform 0.6s ease",
              "&:hover": {
                transform: "scale(1.02)", // ✅ hover zoom
              },
            }}
          />

          {/* ✅ subtle gradient overlay for premium look */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.08) 100%)",
              pointerEvents: "none",
            }}
          />
        </Box>

        {/* CONTENT SECTION */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
            gap: 4,
            p: { xs: 3, md: 5 },
          }}
        >
          {/* ✅ TEXT with stagger animation */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                mb: 2,
                letterSpacing: "-0.5px",
                animation: `${fadeSlideRight} 0.9s ease forwards`,
              }}
            >
              Collaboration’s Gone Football
            </Typography>

            <Typography
              sx={{
                fontSize: 16,
                lineHeight: 1.7,
                mb: 2,
                opacity: 0,
                animation: `${fadeSlideUp} 0.9s ease forwards`,
                animationDelay: "0.2s",
              }}
            >
              Lenovo brings the spirit of football into the workplace — enabling
              teams to collaborate seamlessly, just like the beautiful game.
            </Typography>

            <Typography
              sx={{
                fontSize: 16,
                lineHeight: 1.7,
                opacity: 0,
                animation: `${fadeSlideUp} 0.9s ease forwards`,
                animationDelay: "0.35s",
              }}
            >
              Powered by AI-driven Digital Workplace Solutions, Lenovo ensures
              uninterrupted collaboration and performance as the Official
              Technology Partner of FIFA.
            </Typography>
          </Box>

          {/* ✅ LOGO LOCKUP with float animation */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "inline-block",
                ...scaleHover,
                opacity: 0,
                animation: `${fadeSlideLeft} 0.9s ease forwards`,
                animationDelay: "0.25s",
              }}
            >
              <Box
                component="img"
                src={logoLockup}
                alt="Lenovo FIFA Logo Lockup"
                sx={{
                  width: "100%",
                  maxWidth: 260,
                  animation: `${floatSoft} 3.5s ease-in-out infinite`, // ✅ floating
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LenovoXFifa;
