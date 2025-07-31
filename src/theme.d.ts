// src/theme/mui-augment.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  // 1) Extiende los color tokens habituales
  interface PaletteColor {
    darker?: string;
    lighter?: string;
    alt?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
    lighter?: string;
    alt?: string;
  }

  // 2) Conserva tu sidebar
  interface Palette {
    sidebar: {
      backgroundColor: string;
      color: string;
    };
  }
  interface PaletteOptions {
    sidebar?: {
      backgroundColor?: string;
      color?: string;
    };
  }

  // 3) Extiende únicamente TypeText para añadir `alt`
  interface TypeText {
    /** color de texto alternativo */
    alt?: string;
  }
}
