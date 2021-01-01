import './App.css';
import {RootComponent} from "./common/RootComponent";
import React from "react";
import {createMuiTheme} from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import pink from "@material-ui/core/colors/pink";
import {ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
       palette: {
           primary: {
               main: yellow[500]
           },
           secondary: {
               main: pink[500]
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
