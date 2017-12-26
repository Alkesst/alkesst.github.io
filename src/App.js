import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my personal page.</h1>
        </header>
        <p className="App-intro">
          The page is currently under construction. The page will be available in a future.
        </p>
        <p className="App-intro">
            You can visit my <a href="http://www.github.com/alkesst">GitHub</a>,
            my <a href="http://www.twitter.com/alkesstt">Twitter</a> or
            my <a href="http://last.fm/user/a13k5g">Last.fm</a>
        </p>
        <p>For any suggestion, you can mail me or tweet me. I'll try to answer as soon as I can.</p>
        <footer>Thanks for visiting :)</footer>
      </div>
    );
  }
}

export default App;
