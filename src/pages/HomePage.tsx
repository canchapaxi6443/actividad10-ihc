import React from "react";
import { Box, Typography } from "@mui/material";

const HomePage: React.FC = () => (
  <Box
    sx={{
      backgroundColor: "lavender",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Typography variant="h4" gutterBottom>
      Inicio
    </Typography>
    <Typography>Esta es la pantalla de inicio.</Typography>
  </Box>
);

export default HomePage;
