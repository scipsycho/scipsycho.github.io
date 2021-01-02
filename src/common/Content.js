import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {ContentHeader} from "./ContentHeader";
import {ContentBody} from "./ContentBody";
import {Article} from "./Article";
import {withTheme} from "@material-ui/core";
import {ContentTimeline} from "./ContentTimeline";
import {ContentCard} from "./ContentCard";

export class ContentRaw extends Component {
    render() {
        const contentList = [
            // (<Article
            //     heading={"About me"}
            //     paragraph={"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."}
            //     maxWidth={"40%"}
            // />),(<Article
            //     heading={"About me"}
            //     paragraph={"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."}
            //     maxWidth={"20%"}
            // />),(<Article
            //     heading={"About me"}
            //     paragraph={"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."}
            //     maxWidth={"30%"}
            // />),
            // (<ContentTimeline />),
            (<ContentCard/>)
        ]
        return (
            <Grid
                container
                direction={"column"}
                style={{border: "5px solid green", height: "100%", flexGrow: 1}}
            >
                <ContentHeader
                    image={"../images/sample.png"}
                    heading={"Hello there!"}
                    subHeading={"I am writing this letter to invite you in my birthday party"}
                />
                <ContentBody contentList={contentList}/>
            </Grid>
        )
    }
}

export const Content = withTheme(ContentRaw);