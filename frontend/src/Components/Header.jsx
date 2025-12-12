import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // ✅ added useLocation

const navItems = [
  { label: "Home", path: "/" },
  { label: "Microsites", path: "/microsites" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
];

function ResponsiveHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleGetStart = () => {
    navigate("/register");
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ textAlign: "left" }}>
      <Typography variant="h6" sx={{ my: 2, textAlign: "center" }}>
        LOGO
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{ textAlign: "center" }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  color:
                    location.pathname === item.path ? "#11c2f8ff" : "#0A2540", 
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={handleGetStart} sx={{ textAlign: "center" }}>
            <ListItemText primary="Get Start" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: "linear-gradient(90deg, #0A2540 0%, #00C6FF 100%)",
          color: "#fff",
          boxShadow: "none",
          width: "100%",
          py: 2,
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Toolbar>
          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography
            variant="h4"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            Adbliss<span style={{ color: "#00E0FF" }}>.tech</span>
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "none" },
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
          >
              Adbliss<span style={{ color: "#00E0FF" }}>.tech</span> 
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: location.pathname === item.path ? "#11c2f8ff " : "#fff", 
                  fontSize: "1.1rem",
                  mr: 4,
                  "&:hover": { color: " #5abeddff" }, 
                  cursor: "pointer",
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              disableRipple
              onClick={handleGetStart}
              sx={{
                background: "linear-gradient(90deg, #367bbfff 0%, #4ac0e1ff 100%)",
                color: "#0A2540",
                borderRadius: "25px",
                px: 4,
                py: 1,
                textTransform: "none",
                fontWeight: 600,
                fontSize: "1.2rem",
                "&:hover": {
                  background: "linear-gradient(90deg, #6dc9e3ff 0%, #1f65aaff 100%)",
                  color: "#0A2540",
                },
                cursor: "pointer",
              }}
            >
              Get Start
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Spacer */}
      <Toolbar />

      {/* Drawer for Mobile */}
      <nav>
        <Drawer
          anchor="left"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default ResponsiveHeader;
