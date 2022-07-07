import { ThemeOptions } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
  interface Palette {
    therd?: PaletteColor;
  }
  interface PaletteOptions {
    therd?: PaletteColorOptions;
  }
}
