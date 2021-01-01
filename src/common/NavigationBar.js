import React, {Component} from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const minWidthOfTab = "100px";
export class NavigationBar extends Component {
    render() {
        return (
            <AppBar position="relative" color={"primary"} style={{width:"100%"}}>
                <Grid
                    container
                    direction={"row"}
                    justify={"space-between"}
                    // alignItems={"space-around"}
                    wrap={"nowrap"}
                    style={{border: "5px solid orange"}}
                >
                    <Grid
                        item
                        direction={"row"}
                        xs={"auto"}
                        sm={"auto"}
                        md={"auto"}
                        lg={"auto"}
                        xl={"auto"}
                        style={{border: "5px solid brown"}}
                    >
                        <Tabs>
                            <Tab label="Home"/>
                        </Tabs>
                    </Grid>
                    <Grid
                        item
                        direction={"row"}
                        xs={"auto"}
                        sm={"auto"}
                        md={"auto"}
                        lg={"auto"}
                        xl={"auto"}
                        style={{border: "5px solid pink", maxWidth: "70%"}}
                    >
                        <Tabs
                            variant={"scrollable"}
                            scrollButtons={"auto"}
                            indicatorColor={"primary"}
                            textColor={"primary"}
                        >
                            <Tab label="Item One" wrapped/>
                            <Tab label="Item Two" wrapped/>
                            <Tab label="Item Three" wrapped/>
                            <Tab label="Item Three" wrapped/>
                            <Tab label="Item Three" wrapped/>
                            <Tab label="Item Three" wrapped/>
                            <Tab label="Item Three" wrapped/>
                            <Tab label="Item Three" wrapped/>
                            <Tab label="Item Three" wrapped/>
                            <Tab label="Item Three" wrapped/>
                            <Tab label="Item Three" wrapped/>
                            <Tab label="Item Three" wrapped/>
                            <Tab label="Item Three" wrapped/>
                        </Tabs>
                    </Grid>
                </Grid>
            </AppBar>
        );
    }
}