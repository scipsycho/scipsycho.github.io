import React, {Component} from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import {withTheme} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class ContentTimelineRaw extends Component {
    render() {
        return (
            <Grid
                container
                justify={"left"}
                style={{border: "3px solid yellow"}}
            >
                <Timeline align={"left"}>
                    <TimelineItem
                        // style={{maxWidth: "50%"}}
                    >
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                       <TimelineContent>
                           <Paper
                               elevation={3}
                           >
                               <Typography variant="h6" component="h1">
                                   Eat
                               </Typography>
                               <Typography>Because you need strength</Typography>
                           </Paper>
                       </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper
                                elevation={3}
                            >
                                <Typography variant="h6" component="h1">
                                    Eat
                                </Typography>
                                <Typography>Because you needBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strength strength</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper
                                elevation={3}
                            >
                                <Typography variant="h6" component="h1">
                                    Eat
                                </Typography>
                                <Typography>Because you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strengthBecause you need strength</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Grid>
        );
    }
}

export const ContentTimeline = withTheme(ContentTimelineRaw);