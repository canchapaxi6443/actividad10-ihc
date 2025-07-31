import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Link,
} from "react-router";
import { Button, Box } from "@mui/material";
import DashboardLayout from "./layout/DashboardLayout";
import TabDashboardLayout from "./layout/TabDashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";

const AppContent: React.FC = () => {
  const location = useLocation();
  const isA = location.pathname.startsWith("/a");
  const isB = location.pathname.startsWith("/b");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "relative",
      }}
    >
      {/* Contenido principal */}
      <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
        <Routes>
          <Route
            path="/a/*"
            element={
              <DashboardLayout>
                <Routes>
                  <Route path="dashboard" element={<DashboardPage />} />
                  <Route path="home" element={<HomePage />} />
                  <Route path="settings" element={<SettingsPage />} />
                  <Route
                    path="*"
                    element={<Navigate to="dashboard" replace />}
                  />
                </Routes>
              </DashboardLayout>
            }
          />
          <Route
            path="/b/*"
            element={
              <TabDashboardLayout>
                <Routes>
                  <Route path="dashboard" element={<DashboardPage />} />
                  <Route path="home" element={<HomePage />} />
                  <Route path="settings" element={<SettingsPage />} />
                  <Route
                    path="*"
                    element={<Navigate to="dashboard" replace />}
                  />
                </Routes>
              </TabDashboardLayout>
            }
          />
          <Route path="*" element={<Navigate to="/a/dashboard" replace />} />
        </Routes>
      </Box>

      {/* Botones de prototipo sobrepuestos */}
      <Box
        component="footer"
        sx={(theme) => ({
          position: "absolute",
          bottom: theme.spacing(2),
          left: "50%",
          transform: "translateX(-50%)",
          bgcolor: theme.palette.background.paper,
          p: 1,
          borderRadius: 1,
          boxShadow: theme.shadows[4],
          display: "flex",
          zIndex: theme.zIndex.tooltip,
        })}
      >
        <Button
          component={Link}
          to="/a/dashboard"
          variant={isA ? "contained" : "text"}
          color="primary"
          sx={{ mr: 1 }}
        >
          Prototipo A
        </Button>
        <Button
          component={Link}
          to="/b/dashboard"
          variant={isB ? "contained" : "text"}
          color="primary"
        >
          Prototipo B
        </Button>
      </Box>
    </Box>
  );
};

const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
