import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";

export class Content extends Component {
    render() {
        return (
            <Grid
                container
                style={{border: "5px solid green", height: "100%"}}
            >
                <h1>Hello</h1>
            </Grid>
        )
    }
}