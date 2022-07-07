import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  status: {
    danger: "#e52e3e",
  },
  palette: {
    primary: {
      main: "#0081ef",
      dark: "#2e33eb",
      light: "#2d69eb",
    },
    therd: {
      main: "#fff",
      dark: "#fbfbfb",
      // light: "#2d69eb",
    },
    secondary: {
      main: "#111111",
      light: "#666666",
      dark: "#383838",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
