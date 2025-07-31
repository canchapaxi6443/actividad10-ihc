import React from "react";
import {
  CssBaseline,
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router";

interface TabLayoutProps {
  children: React.ReactNode;
}

const routes = ["/b/dashboard", "/b/home", "/b/settings"];
const labels = ["Dashboard", "Inicio", "Ajustes"];

const TabDashboardLayout: React.FC<TabLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const idx = routes.findIndex((r) => location.pathname.startsWith(r));
  const currentTab = idx !== -1 ? idx : 0;

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    navigate(routes[newValue]);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MI LOGO (Tabs)
          </Typography>
          <Tabs
            value={currentTab}
            onChange={handleChange}
            textColor="inherit"
            // indicatorColor="primary"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "white",
              },
            }}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="navegación tabs"
          >
            {labels.map((label) => (
              <Tab key={label} label={label} />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 0 }}>{children}</Box>
    </Box>
  );
};

export default TabDashboardLayout;
