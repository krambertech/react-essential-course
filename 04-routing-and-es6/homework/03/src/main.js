import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import ShopApp from './components/ShopApp.jsx';

ReactDOM.render(
    <HashRouter>
        <ShopApp />
    </HashRouter>,
    document.getElementById('content')
);