import React, {Component} from "react";
import {withTheme} from "@material-ui/core";

class ContentCardRaw extends Component {
    render() {
        return (
            <h1>Hello</h1>
        )
    }
}

export const ContentCard = withTheme(ContentCardRaw);