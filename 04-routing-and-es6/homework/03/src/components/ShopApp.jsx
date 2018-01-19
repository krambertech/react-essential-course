import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import ShopMenu from './ShopMenu.jsx';
import ShopHome from './ShopHome.jsx';
import ShopPageGoods from './ShopPageGoods.jsx';
import ShopGood from './ShopGood.jsx';
import ShopCart from './ShopCart.jsx';
import goods from '../goods.json';

class ShopApp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            items: [],
            cart: [
                {
                    id: '2',
                    count: 1
                },
                {
                    id: '8',
                    count: 2
                }
            ]
        };
    }

    componentDidMount() {
        let items = Object.keys(goods).map((key) => goods[key]);

        if(items) {
            this.setState({
                items: items
            });
        }
    }

    handleCartItemAdd(id) {
        let newCart = this.state.cart.slice();
        if (newCart.length) {
            let cartItem = newCart.find((item) => item.id === id);
            if (cartItem) {
                cartItem.count++;
            } {
                newCart.push({id: id, count: 1});
            }
        } else {
            newCart = [{id: id, count: 1}];
        }

        // TODO: Дописать добавление в корзину
        console.log("newCart:", newCart);
        console.log("cart:", this.state.cart);

        //this.setState({
        //    cart: newCart
        //});
    }

    handleCartItemReduce(id) {
        this._changeCart(this.state.cart, id, 'reduce');
    }

    handleCartItemRemove(id) {
        this._changeCart(this.state.cart, id, 'remove');
    }

    _getVisibleCartItems(items, cart) {
        let resultItems = [];
        if(cart.length && items.length) {
            resultItems = cart.map((cartItem) => {
                const { id, title, price, image, count = cartItem.count }
                          = items.find((item) => item.id === cartItem.id);
                return {
                    id,
                    title,
                    price,
                    image,
                    count
                };
            });
        }
        return resultItems;
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
                <Route path="/cart"
                       render={() => (
                            <ShopCart
                                items={this._getVisibleCartItems(this.state.items, this.state.cart)}
                                onItemIncrease={this.handleCartItemAdd.bind(this)}
                                onItemReduce={this.handleCartItemReduce.bind(this)}
                                onItemRemove={this.handleCartItemRemove.bind(this)}
                            />
                       )}
                />
            </Segment>
        );
    }
}

export default ShopApp;