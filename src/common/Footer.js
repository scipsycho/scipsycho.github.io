import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";

export class Footer extends Component {
    render() {
        return (
            <Grid
                container
                style={{border: "5px solid red"}}
            >
               <h1>Footer is this</h1>
            </Grid>
        );
    }
}