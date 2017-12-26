import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import ShopMenu from './ShopMenu.jsx';
import ShopHome from './ShopHome.jsx';
import ShopGoods from './ShopGoods.jsx';
import ShopCart from './ShopCart.jsx';

class ShopApp extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Segment 
                inverted
                textAlign='center'
                style={{ minHeight: 700, padding: '1em 0em' }}
                vertical
            >
                <ShopMenu />
                <Route path="/home" component={ShopHome} />
                <Route path="/goods" component={ShopGoods} />
                <Route path="/cart" component={ShopCart} />
            </Segment>
        );
    }
}

export default ShopApp;