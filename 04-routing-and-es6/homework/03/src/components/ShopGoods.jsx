import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Grid, Card } from 'semantic-ui-react';
import goods from '../goods.json';


class ShopGoods extends React.Component {
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
                <Grid.Column computer={4} mobile={16} tablet={8} key={item.id}>
                    <Card
                        fluid
                        header={item.title}
                        meta={item.price + ' руб.'}
                        image={item.image}
                        as={Link}
                        to={'/good/' + item.id}
                    />
                </Grid.Column>
            );
        });

        return (
            <Segment vertical>
                <Grid container>
                    {items}
                </Grid>
            </Segment>
        );
    }
}

export default ShopGoods;