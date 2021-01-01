import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {NavigationBar} from "./NavigationBar";
import {Content} from "./Content";
import {Footer} from "./Footer";
import '../css/root.css';

export class RootComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid
                container
                direction={"column"}
                justify={"space-between"}
                id={"root-container"}
                wrap={"nowrap"}
            >
               <NavigationBar />
               <Content />
               <Footer />
            </Grid>
        );
    }
}