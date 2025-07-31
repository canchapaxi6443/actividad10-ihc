import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Box,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const drawerWidth = 240;

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const location = useLocation();

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Mi Dashboard
        </Typography>
      </Toolbar>
      <List>
        <ListItemButton
          component={Link}
          to="/a/dashboard"
          selected={location.pathname === "/a/dashboard"}
        >
          <ListItemIcon>
            <DashboardIcon
              color={
                location.pathname === "/a/dashboard" ? "primary" : "inherit"
              }
            />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/a/home"
          selected={location.pathname === "/a/home"}
        >
          <ListItemIcon>
            <HomeIcon
              color={location.pathname === "/a/home" ? "primary" : "inherit"}
            />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/a/settings"
          selected={location.pathname === "/a/settings"}
        >
          <ListItemIcon>
            <SettingsIcon
              color={
                location.pathname === "/a/settings" ? "primary" : "inherit"
              }
            />
          </ListItemIcon>
          <ListItemText primary="Ajustes" />
        </ListItemButton>
      </List>
    </div>
  );
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            MI LOGO
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Toolbar />
        <Box sx={{ flexGrow: 1, overflow: "auto" }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
