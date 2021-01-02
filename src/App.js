import './App.css';
import {RootComponent} from "./common/RootComponent";
import React from "react";
import {createMuiTheme} from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import grey from "@material-ui/core/colors/grey";
import {ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
       palette: {
           primary: {
               main: yellow[500]
           },
           secondary: {
               main: grey[500]
           }
       }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <RootComponent />
        </ThemeProvider>
    )
}

export default App;
