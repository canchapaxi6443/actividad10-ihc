import React from "react";
import { Box, Typography } from "@mui/material";

const SettingsPage: React.FC = () => (
  <Box
    sx={{
      backgroundColor: "lightgreen",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Typography variant="h4" gutterBottom>
      Ajustes
    </Typography>
    <Typography>Configura aquí tus preferencias.</Typography>
  </Box>
);

export default SettingsPage;
