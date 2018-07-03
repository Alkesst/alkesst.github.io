import { Route } from 'react-router-dom'
import Home from "./components/Home";
import * as React from "react";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import DevChat from "./components/DevChat";
import PySockets from "./components/pySockets";
import MyProjects from "./components/OwnProjects.js";
import CollabProjects from "./components/CollaboratorProjects";
import SpecialThanks from "./components/SpecialThanks";

export default () => (
    <div>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/about" component={About}/>
        <Route path="/DevChat" component={DevChat}/>
        <Route path="/pySockets" component={PySockets}/>
        <Route path="/MyProjects" component={MyProjects}/>
        <Route path="/CollabProjects" component={CollabProjects}/>
        <Route path="/SpecialThanks" component={SpecialThanks}/>
    </div>);