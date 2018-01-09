import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Grid, Card } from 'semantic-ui-react';

class ShopGoods extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        const items = this.props.items.map((item) => {
            return (
                <Grid.Column computer={4} mobile={16} tablet={8} key={item.id} style={{ paddingBottom: '20px' }}>
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
            <Grid container>
                <Grid.Row>
                    {items}
                </Grid.Row>
            </Grid>
        );
    }
}

export default ShopGoods;