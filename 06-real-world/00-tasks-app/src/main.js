import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import SessionActions from './actions/SessionActions';
import SessionStore from './stores/SessionStore';

import App from './App.jsx';
import LoggedInLayout from './components/LoggedInLayout.jsx';
import AboutPage from './components/AboutPage.jsx';

import TasklistsPage from './containers/TasklistsPage.jsx';
import TasksPage from './containers/TasksPage.jsx';
import LoginPage from './containers/LoginPage.jsx';

window.handleGoogleApiLoaded = () => {
    SessionActions.authorize(true, renderApp);
};

function renderApp() {
    ReactDOM.render(
        <Router history={hashHistory}>
            <Redirect from='/' to='/login' />
            <Route path='/' component={App}>
                <Route path='/login' component={LoginPage} />
                <Route component={LoggedInLayout} onEnter={requireAuth}>
                    <Route path='/about' component={AboutPage} />
                    <Route path='/lists' component={TasklistsPage}>
                        <Route path='/lists/:id' component={TasksPage} />
                    </Route>
                </Route>
            </Route>
        </Router>,
        document.getElementById('mount-point')
    );
}

function requireAuth(nextState, replace) {
    if (!SessionStore.isLoggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}
