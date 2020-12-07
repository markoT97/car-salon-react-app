import React from "react";
import Navigation from "../Navigation";
import Routes from "../../Routes";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffdf80",
      main: "#ffbf00",
      dark: grey[700],
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ffffff",
      main: "#ffdf80",
      dark: grey[500],
      contrastText: grey[600],
    },
    action: {
      selected: "#ffdf80",
    },
    text: {
      primary: grey[600],
    },
    background: {
      default: "#ffffff",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navigation children={<div></div>} />
        <Routes />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
