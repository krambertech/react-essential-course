import React from 'react';
import PropTypes from 'prop-types'
import { Segment, Grid, Image, Header, Button, Icon } from 'semantic-ui-react';
import Parser from 'html-react-parser';
import goods from '../goods.json';


class ShopGood extends React.Component {
    constructor(props) {
        super(props);

        const { id } = this.props.match.params;

        this.state = {
            item: goods.find(item => item.id === id)
        };
    }

    componentWillReceiveProps(nextProps) {
        const { id: prevId } = this.props.match.params;
        const { id: nextId } = nextProps.match.params;

        if (prevId !== nextId) {
            this.setState({
                item: goods.find(item => item.id === nextId)
            });
        }
    }

    render() {
        const { item } = this.state;
        const onItemAdd = this.context.onCartItemAdd;

        return (
            <Segment vertical>
                <Grid container>
                    <Grid.Row>
                        <Grid.Column computer={8} mobile={16}>
                            <Image
                                fluid
                                src={item.image}
                            />
                        </Grid.Column>
                        <Grid.Column computer={8} mobile={16}>
                            <Header as='h1' textAlign="left">{item.title}</Header>
                            <p>
                                <Button 
                                    content={item.price + ' руб.'}
                                    icon='shop' 
                                    labelPosition='right'
                                    onClick={() => onItemAdd(item.id)}
                                />
                            </p>
                            {Parser(item.description)}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

ShopGood.contextTypes = {
    onCartItemAdd: PropTypes.func
};

export default ShopGood;