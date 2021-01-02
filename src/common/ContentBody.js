import React, {Component} from "react";
import withTheme from "@material-ui/core/styles/withTheme";
import Grid from "@material-ui/core/Grid";

class ContentBodyRaw extends Component {
    render() {
        const {contentList} = this.props;
        let children = [];
        contentList.forEach(
            content => {
                children.push(
                    <Grid
                        container
                        xs={"auto"}
                        sm={"auto"}
                        md={"auto"}
                        lg={"auto"}
                        xl={"auto"}
                        style={{border: "5px solid green", width: "auto"}}
                        zeroMinWidth={true}
                    >
                        {content}
                    </Grid>
                );
            }
        )
        return (
            <Grid
                container
                style={{border: "5px solid red", width: "100%"}}
                direction={"row"}
                wrap={"wrap"}
                justify={"center"}
            >
                {contentList}
            </Grid>
        );
    }
}

export const ContentBody = withTheme(ContentBodyRaw);