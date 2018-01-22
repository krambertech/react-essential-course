import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

class ShopMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Menu size='large'>
                    <Menu.Item as={Link} to="/home">Home</Menu.Item>
                    <Menu.Item as={Link} to="/goods">Goods</Menu.Item>
                    <Menu.Item as={Link} to="/cart">Cart</Menu.Item>
                </Menu>
            </Container>
        );
    }
}

export default ShopMenu;