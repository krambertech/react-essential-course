import React from 'react';
import { Input } from 'semantic-ui-react'

class ShopSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Input
                fluid
                icon='search'
                placeholder='Search...'
                onChange={this.props.onSearch}
                value={this.props.value}
            />
        );
    }
}

export default ShopSearch;