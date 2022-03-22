import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Navbar from "./navbar"

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
