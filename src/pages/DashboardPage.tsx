import React from "react";
import { Box, Typography } from "@mui/material";

const DashboardPage: React.FC = () => (
  <Box
    sx={{
      backgroundColor: "skyblue",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Typography variant="h4" gutterBottom>
      Dashboard
    </Typography>
    <Typography>Bienvenido al panel principal.</Typography>
  </Box>
);

export default DashboardPage;
