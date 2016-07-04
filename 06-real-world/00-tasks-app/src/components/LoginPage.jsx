import React from 'react';

import RaisedButton from 'material-ui/lib/raised-button';

import './LoginPage.less';

const LoginPage = React.createClass({
    render() {
        return (
            <div className='LoginPage'>
                <div className='LoginPage__banner'>
                    <div className='LoginPage__text'>
                        <h1>Almost Google tasks</h1>
                        <p>Organise your life!</p>
                        <RaisedButton
                            className='LoginPage__button'
                            label='Log in with Google'
                            onClick={this.props.onLogIn}
                        />
                    </div>
                    <img
                        src='img/desk.png'
                        className='LoginPage__image'
                    />
                </div>
            </div>
        );
    }
});

export default LoginPage;
