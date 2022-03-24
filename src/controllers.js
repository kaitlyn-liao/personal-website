import React from "react";
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";

import About from "./templates/about"
import Resume from "./templates/resume"
import Home from "./templates/home"
import Projects from "./templates/projects"

function Controllers() {
    return(
        <div>
            <Switch>
                <Route path="/About">
                    <About />
                </Route>
                <Route path="/Resume">
                    <Resume />
                </Route>
                <Route path="/Home">
                    <Home />
                </Route>
                <Route path="/Projects">
                    <Projects />
                </Route>
            </Switch>
        </div>
    );
}

export default Controllers;