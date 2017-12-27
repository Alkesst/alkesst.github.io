import React from 'react';
import homeStyle from '../styles/home.css';

export default () =>
    <div id="home" style={homeStyle}>
        <h1>Welcome, visitor!</h1>
        <p className="text-justify">
            This is my personal page, it is made with React, Redux and Bootstrap.
            You can see <a href="https://github.com/Alkesst/alkesst.github.io" target="_blank" rel="noreferrer noopener">
                the code
            </a> in my github page.
            Currently the page is under construction. Anyway, you can also contact with me in the contact tab. Enjoy!
        </p>
    </div>