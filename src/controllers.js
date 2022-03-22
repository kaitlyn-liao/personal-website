import React from "react";
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";

import About_Page from "./templates/about"
import Resume_Page from "./templates/resume"
import Home_Page from "./templates/home"
import Projects_Page from "./templates/projects"

function Controllers() {
    return(
        <div>
            <Switch>
                <Route path="/About_Page">
                    <About_Page />
                </Route>
                <Route path="/Resume_Page">
                    <Resume_Page />
                </Route>
                <Route path="/Home_Page">
                    <Home_Page />
                </Route>
                <Route path="/Projects_Page">
                    <Projects_Page />
                </Route>
            </Switch>
        </div>
    );
}

export default Controllers;