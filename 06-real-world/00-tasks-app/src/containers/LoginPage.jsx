import React from 'react';

import SessionStore from '../stores/SessionStore';
import SessionActions from '../actions/SessionActions';

import LoginPage from '../components/LoginPage.jsx';

function getStateFromFlux() {
    return {
        isLoggedIn: SessionStore.isLoggedIn()
    };
}

const LoginPageContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return getStateFromFlux();
    },

    componentDidMount() {
        SessionStore.addChangeListener(this._onChange);

        if (this.state.isLoggedIn) {
            this.redirectLoggedInUser();
        }
    },

    componentWillUpdate(nextProps, nextState) {
        if (nextState.isLoggedIn) {
            this.redirectLoggedInUser();
        }
    },

    componentWillUnmount() {
        SessionStore.removeChangeListener(this._onChange);
    },

    handleLogIn() {
        SessionActions.authorize();
    },

    redirectLoggedInUser() {
        const { location } = this.props

        if (location.state && location.state.nextPathname) {
            this.context.router.replace(location.state.nextPathname);
        } else {
            this.context.router.replace('/lists');
        }
    },

    render() {
        return (
            <LoginPage onLogIn={this.handleLogIn} />
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default LoginPageContainer;
