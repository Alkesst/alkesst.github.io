import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './App.css';
import Routes from "./Routes";


class App extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    render() {
        const { location } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Alkesst's Page</h1>
                </header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>
                                <Link className="nav-link" to="/about">Who am I?</Link>
                            </li>
                            <li className={`nav-item ${location.pathname === "/projects" ? "active" : ""}`}>
                                <Link className="nav-link" to="/projects">Projects</Link>
                            </li>
                            <li className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className={`nav-item ${location.pathname === "/SpecialThanks" ? "active" : ""}`}>
                                <Link className="nav-link" to="/SpecialThanks">Hall of fame</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="App-intro container">
                    <Routes/>
                </div>
            </div>
        );
    }
}

export default withRouter(App);
/*<p className="App-intro">
          The page is currently under construction. The page will be available in a future.
        </p>
        <p className="App-intro">
            You can visit my <a href="http://www.github.com/alkesst">GitHub</a>,
            my <a href="http://www.twitter.com/alkesstt">Twitter</a> or
            my <a href="http://last.fm/user/a13k5g">Last.fm</a>
        </p>
        <p>For any suggestion, you can mail me or tweet me. I'll try to answer as soon as I can.</p>
        <footer>Thanks for visiting :)</footer>*/