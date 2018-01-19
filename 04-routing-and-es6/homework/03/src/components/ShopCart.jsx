import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Grid, Item, Button, Icon, Label } from 'semantic-ui-react';

class ShopCart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const onItemIncrease = this.props.onItemIncrease;
        const onItemReduce = this.props.onItemReduce;
        const onItemRemove = this.props.onItemRemove;
        const items = this.props.items.map((item) => {
            return (
                 <Item key={item.id}>
                     <Item.Image size='tiny' src={item.image} />
                     <Item.Content verticalAlign='middle'>
                         <Item.Header as={Link} to={'/good/' + item.id}>{item.title}</Item.Header>
                         <Item.Meta>
                             <span className='price'>{item.price + ' руб.'}</span>,
                         </Item.Meta>
                         <Item.Extra>
                             <Label>{item.count} шт.</Label>
                             <Button.Group basic size="mini">
                                 <Button icon="plus" onClick={() => onItemIncrease(item.id)}/>
                                 <Button icon="minus" onClick={() => onItemReduce(item.id)}/>
                             </Button.Group>
                             <Button basic size="mini" onClick={() => onItemRemove(item.id)}>Удалить</Button>
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