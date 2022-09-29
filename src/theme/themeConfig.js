import { createTheme } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

export const snackBarPlacement = { horizontal: "center", vertical: "top" };

export const projectName = "Event Creation";
export const DrawerWidth = 240;

const primaryColor = "#2f4983";
const secondaryColor = blueGrey["700"];
const tableHeadColor = "#e1f5fe";

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "white",
          backgroundColor: `${primaryColor} !important`,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: tableHeadColor,
        },
      },
    },
  },
});
