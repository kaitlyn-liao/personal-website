import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import Controllers from "./controllers"

class Navbar extends React.Component {
    render() {
        return (
            <Router>
                <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
                <nav class="uk-navbar uk-margin uk-navbar-container" style={{ backgroundColor: "#DBD9D1" }} uk-navbar>
                    <div class="uk-navbar-left">
                        <ul class="uk-navbar-nav">
                            <li>&nbsp;</li>
                            <li class="uk-active"><a href="/home" uk-icon="icon: home; ratio: 1.5"></a></li>
                        </ul>
                    </div>

                    <div class="uk-navbar-right">
                        <ul class="uk-navbar-nav">
                            <li class=""><Link to="/about">About</Link></li>
                            <li class=""><Link to="/projects">Projects</Link></li>
                            <li class="">
                                <Link to="/resume">
                                    <button class="uk-button uk-button-secondary">Resume</button>
                                </Link>
                            </li>
                            <li>&nbsp;</li>
                        </ul>
                    </div>
                </nav>
                </div>

                <Controllers />
            </Router>
        )
    }
}

export default Navbar;