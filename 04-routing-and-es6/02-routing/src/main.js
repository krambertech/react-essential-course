import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import App from './App.jsx';
import AboutPage from './components/AboutPage.jsx';
import InboxPage from './components/InboxPage.jsx';
import Message from './components/Message.jsx';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <Route path='/about' component={AboutPage} />
            <Route path='/inbox' component={InboxPage}>
                <Route path='/inbox/messages/:messageId' component={Message} />
            </Route>
        </Route>
    </Router>,
    document.getElementById('mount-point')
);