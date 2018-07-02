import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from "react-router-dom";

window.$ = require('jquery');
window.Popper = require('popper.js');
require('bootstrap');

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();
