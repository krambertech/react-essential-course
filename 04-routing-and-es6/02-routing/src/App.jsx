import React from 'react';
import { Link } from 'react-router';

import './App.less';

const App = React.createClass({
    render() {
        return (
            <div className='App'>
                <div className='menu-bar'>
                    <div className='menu-item'>
                        <Link className='menu-item-link' to='/about'>About</Link>
                    </div>

                    <div className='menu-item'>
                        <Link className='menu-item-link' to='/inbox'>Inbox</Link>
                    </div>
                </div>

                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default App;
