import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {withTheme} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

class ContentHeaderRaw extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {image, heading, subHeading} = this.props;
        return (
            <Grid
                container
                style={{
                    border: "3px solid blue",
                    backgroundColor: this.props.theme.palette.secondary.main,
                    width: "100%"
                }}
                alignItems={"center"}
                justify={"center"}
                direction={"column"}
            >
                {image &&
                <Grid
                    item
                    style={{border: "3px solid yellow"}}
                >
                    <Avatar
                        src={image}
                        style={{height: "120px", width: "120px"}}
                    />
                </Grid>}
                {heading &&
                <Grid item
                      style={{border: "3px solid yellow"}}
                >
                    <Typography variant={"h1"}>
                        {heading}
                    </Typography>
                </Grid>}
                {subHeading &&
                <Grid item
                      style={{border: "3px solid yellow"}}
                >
                    <Typography variant={"h3"}>
                        {subHeading}
                    </Typography>
                </Grid>}
            </Grid>
        );
    }
}

export const ContentHeader = withTheme(ContentHeaderRaw);