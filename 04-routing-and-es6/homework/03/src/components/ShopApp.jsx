import React from 'react';
import PropTypes from 'prop-types';
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
            cart: []
        };

        this.handleCartItemAdd = this.handleCartItemAdd.bind(this);
        this.handleCartItemReduce = this.handleCartItemReduce.bind(this);
        this.handleCartItemRemove = this.handleCartItemRemove.bind(this);
    }

    getChildContext() {
        return {
            onCartItemAdd: this.handleCartItemAdd,
            onCartItemReduce: this.handleCartItemReduce,
            onCartItemRemove: this.handleCartItemRemove
        };
    }

    componentDidMount() {
        const items = Object.keys(goods).map((key) => goods[key]);
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let state = {};

        if (items.length) {
            state.items = items;
        }

        if (cart.length) {
            state.cart = cart;
        }

        if(items.length || cart.length) {
            this.setState(state);
        }
    }

    componentDidUpdate() {
        this._updateLocalStorage();
    }

    handleCartItemAdd(id) {
        let newCart = this._getClonedCart(this.state.cart);

        if (newCart.length) {
            let cartItem = newCart.find((item) => item.id === id);
            if (cartItem) {
                cartItem.count++;
            } else {
                newCart.push({id: id, count: 1});
            }
        } else {
            newCart.push({id: id, count: 1});
        }

        this.setState({
            cart: newCart
        });
    }

    handleCartItemReduce(id) {
        let newCart = this._getClonedCart(this.state.cart);

        if (newCart.length) {
            for (let i = 0, len = newCart.length; i < len; i++) {
                let item = newCart[i];
                if (item.id === id) {
                    if (item.count === 1) {
                        newCart.splice(i, 1);
                    } else {
                        item.count--;
                    }
                    break;
                }
            }

            this.setState({
                cart: newCart
            });
        }
    }

    handleCartItemRemove(id) {
        let newCart = this._getClonedCart(this.state.cart);

        if (newCart.length) {
            for (let i = 0, len = newCart.length; i < len; i++) {
                let item = newCart[i];
                if (item.id === id) {
                    newCart.splice(i, 1);
                    break;
                }
            }

            this.setState({
                cart: newCart
            });
        }
    }

    _updateLocalStorage() {
        const cart = JSON.stringify(this.state.cart);
        localStorage.setItem('cart', cart);
    }

    _getClonedCart(cart) {
        return cart.map((item) => {
            const { id, count } = item;
            return {
                id,
                count
            };
        });
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
                            />
                       )}
                />
            </Segment>
        );
    }
}

ShopApp.childContextTypes = {
    onCartItemAdd: PropTypes.func,
    onCartItemReduce: PropTypes.func,
    onCartItemRemove: PropTypes.func
};

export default ShopApp;