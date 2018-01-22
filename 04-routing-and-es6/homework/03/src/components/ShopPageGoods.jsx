import React from 'react';
import { Segment, Grid, Header } from 'semantic-ui-react';
import ShopGoods from './ShopGoods.jsx';
import ShopSearch from './ShopSearch.jsx';
import goods from '../goods.json';

class ShopPageGoods extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            searchQuery: ''
        };

        this.handleItemSearch = this.handleItemSearch.bind(this);
    }

    componentDidMount() {
        let items = Object.keys(goods).map((key) => goods[key]);

        if(items) {
            this.setState({
                items: items
            });
        }
    }

    handleItemSearch(event) {
        this.setState({
            searchQuery: event.target.value
        });
    }

    _getVisibleItems(items, query) {
        if(query.length) {
            query = query.toLowerCase();
            return items.filter((item) => {
                let searchValue = item.title.toLowerCase();
                return searchValue.indexOf(query) !== -1;
            });
        }
        return items;
    }
    
    render() {
        return(
            <Segment vertical>
                <Grid container>
                    <Grid.Row>
                        <Grid.Column mobile={16}>
                            <Header as='h1' textAlign="center">Goods</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column mobile={16}>
                            <ShopSearch value={this.state.searchQuery} onSearch={this.handleItemSearch} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <ShopGoods items={this._getVisibleItems(this.state.items, this.state.searchQuery)} />
            </Segment>
        );
    }
}

export default ShopPageGoods;