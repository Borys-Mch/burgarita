import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    headSec: {
      fontFamily: "Montserrat",
      fontSize: "40px",
      "@media (min-width:900px)": {
        fontSize: "50px",
      },
      "@media (min-width:1200px)": {
        fontSize: "85px",
      },
      fontWeight: 700,
      color: "white",
    },
    descrSec: {
      fontFamily: "Montserrat",
      fontSize: "20px",
      "@media (min-width:1200px)": {
        fontSize: "28px",
      },
      fontWeight: 600,
      color: "white",
    },
  },
});
