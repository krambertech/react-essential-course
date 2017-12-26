import ReactDOM from 'react-dom';
import React from 'react';
//import { Router, Route, hashHistory } from 'react-router';
import { HashRouter, Route, Link } from 'react-router-dom';

import App from './components/App.jsx';
import AboutPage from './components/AboutPage.jsx';
import InboxPage from './components/InboxPage.jsx';

ReactDOM.render(
    <HashRouter>
        <App>
            <Route path="/about" component={AboutPage} />
            <Route path="/inbox" component={InboxPage} />
        </App>
    </HashRouter>,
    document.getElementById('mount-point')
);