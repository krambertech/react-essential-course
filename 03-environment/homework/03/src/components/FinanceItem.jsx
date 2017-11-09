import React from 'react';
import { Table } from 'semantic-ui-react';

class FinanceItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table.Row>
                <Table.Cell>{this.props.type}</Table.Cell>
                <Table.Cell>{this.props.title}</Table.Cell>
                <Table.Cell>{this.props.sum}</Table.Cell>
            </Table.Row>
        );
    }
}

export default FinanceItem;