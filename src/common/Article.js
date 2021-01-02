import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {withTheme} from "@material-ui/core";

class ArticleRaw extends Component {
    render() {
        const {heading, paragraph, maxWidth} = this.props;
        return (
            <Grid
                container
                direction={"column"}
                justify={"left"}
                style={{border: "5px solid yellow", maxWidth: maxWidth}}
            >
                {heading &&
                <Grid item>
                    <Typography variant={"h4"}>
                        {heading}
                    </Typography>
                </Grid>
                }
                {paragraph &&
                <Grid item>
                    <Typography variant={"body1"}>
                        {paragraph}
                    </Typography>
                </Grid>
                }
            </Grid>
        );
    }
}

export const Article = withTheme(ArticleRaw);