import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import Controllers from "./controllers"

class Navbar extends React.Component {
    render(){
        return(
            <Router>
                <nav>
                <ul class="nav justify-content-end nav-pills">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                </nav>

                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/About_Page">About</Link>
                    </li>
                    <li>
                    <Link to="/Resume_Page">Resume</Link>
                    </li>
                    <li>
                    <Link to="/Home_Page">Home</Link>
                    </li>
                    <li>
                    <Link to="/Projects_Page">Projects</Link>
                    </li>
                </ul>

                <Controllers />
            </Router>
        )
    }
}

export default Navbar;