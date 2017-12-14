import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './App.less';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <div className="menu-bar">
                    <div className="menu-item">
                        <Link className='menu-item-link' to="/about">About</Link>
                    </div>
                    <div className="menu-item">
                        <Link className='menu-item-link' to="/inbox">Inbox</Link>
                    </div>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;