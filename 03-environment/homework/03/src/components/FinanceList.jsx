import React from 'react';
import FinanceItem from './FinanceItem.jsx';
import { Table } from 'semantic-ui-react';

class FinanceList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width={4}>Type</Table.HeaderCell>
                        <Table.HeaderCell width={9}>Title</Table.HeaderCell>
                        <Table.HeaderCell width={3}>Sum</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        this.props.items.map((item) => {
                            return (
                                <FinanceItem
                                    key={item.id}
                                    type={item.type}
                                    title={item.title}
                                    sum={item.sum}
                                />
                            );
                        })
                    }
                </Table.Body>
            </Table>
        );
    }
}

export default FinanceList;