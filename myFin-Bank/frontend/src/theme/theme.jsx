import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1565C0",
    },
    secondary: {
      main: "#00ACC1",
    },
    success: {
      main: "#2E7D32",
    },
    background: {
      default: "#F4F7FC",
    },
  },

  typography: {
    fontFamily: "Poppins, sans-serif",
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;