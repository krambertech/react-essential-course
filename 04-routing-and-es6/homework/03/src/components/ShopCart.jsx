import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Grid, Item, Button, Icon, Label } from 'semantic-ui-react';
import goods from '../goods.json';

class ShopCart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
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
    
    render() {

        const items = this.state.items.map((item) => {
            return (
                <Item key={item.id}>
                    <Item.Image size='tiny' src={item.image} />
                    <Item.Content verticalAlign='middle'>
                        <Item.Header as={Link} to={'/good/' + item.id}>{item.title}</Item.Header>
                        <Item.Meta>
                            <span className='price'>{item.price + ' руб.'}</span>,
                        </Item.Meta>
                        <Item.Extra>
                            <Label>1 шт.</Label>
                            <Button.Group basic size="mini">
                                <Button icon="plus"/>
                                <Button icon="minus" />
                            </Button.Group>
                            <Button basic size="mini" icon="remove" />
                        </Item.Extra>
                    </Item.Content>
                </Item>
            );
        });

        return (
            <Segment vertical>
                <Grid container>
                    <Grid.Row>
                        <Grid.Column mobile={16}>
                            <Header as='h1' textAlign="center">Cart</Header>
                            <Item.Group>
                                {items}
                            </Item.Group>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

export default ShopCart;