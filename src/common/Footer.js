import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const iconStyle = {border: "1px solid black", height: "100%", padding: "0 0 0 0", minHeight: 0};
export class Footer extends Component {
    render() {
        return (

            <Grid
                container
                style={{border: "1px solid red", width: "100%", height: "30px"}}
            >
                <AppBar position="relative" color={"secondary"} style={{width: "100%", height: "100%"}}>
                    <Grid
                        container
                        direction={"row"}
                        justify={"space-between"}
                        // alignItems={"space-around"}
                        wrap={"nowrap"}
                        style={{border: "1px solid orange", height: "100%"}}
                    >
                        <Grid
                            item
                            direction={"row"}
                            xs={"auto"}
                            sm={"auto"}
                            md={"auto"}
                            lg={"auto"}
                            xl={"auto"}
                            style={{border: "1px solid brown"}}
                        >
                            copyright @2018
                        </Grid>
                        <Grid
                            item
                            direction={"row"}
                            xs={"auto"}
                            sm={"auto"}
                            md={"auto"}
                            lg={"auto"}
                            xl={"auto"}
                            style={{border: "1px solid magenta", maxWidth: "80%", height: "100%"}}
                        >
                            <Tabs
                                variant={"standard"}
                                indicatorColor={"primary"}
                                textColor={"primary"}
                                id={"testing-123"}
                                style={{border: "1px solid black", height: "100%", maxHeight: "100%", minHeight: 0, padding: "0 0 0 0"}}
                            >
                                <Tab icon={<GitHubIcon fontSize={"small"}/>}
                                     style={iconStyle}
                                     wrapped/>
                                <Tab icon={<LinkedInIcon fontSize={"small"}/>}
                                     wrapped
                                     style={iconStyle}
                                />
                                <Tab icon={<EmailIcon fontSize={"small"}/>}
                                     wrapped
                                     style={iconStyle}
                                />
                                <Tab icon={<TwitterIcon fontSize={"small"}/>}
                                     wrapped
                                     style={iconStyle}
                                />
                            </Tabs>
                        </Grid>
                    </Grid>
                </AppBar>
            </Grid>
        );
    }
}