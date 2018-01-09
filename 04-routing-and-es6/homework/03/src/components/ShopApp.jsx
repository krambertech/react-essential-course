import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import ShopMenu from './ShopMenu.jsx';
import ShopHome from './ShopHome.jsx';
import ShopPageGoods from './ShopPageGoods.jsx';
import ShopGood from './ShopGood.jsx';
import ShopCart from './ShopCart.jsx';

class ShopApp extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            cart: [
                {
                    id: '2',
                    count: '1'
                },
                {
                    id: '8',
                    count: '2'
                }
            ]
        };
    }

    render() {
        return (
            <Segment
                style={{ minHeight: 700, padding: '1em 0em' }}
                vertical
            >
                <ShopMenu />
                <Route path="/home" component={ShopHome} />
                <Route path="/goods" component={ShopPageGoods} />
                <Route path="/good/:id" component={ShopGood} />
                <Route path="/cart" render={() => ( <ShopCart items={this.state.cart}/> )} />
            </Segment>
        );
    }
}

export default ShopApp;