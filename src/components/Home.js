import React from 'react';
import homeStyle from '../styles/home.css';

export default () =>
    <div id="home" style={homeStyle}>
        <h1>Welcome, visitor!</h1>
        <h4 className="text-justify text-center">
            This is my personal page! Here you will find all the projects I'm making or collaborating.
        </h4>
        <p className="text-justify text-center">
            The website is currently under construction.
        </p>
    </div>