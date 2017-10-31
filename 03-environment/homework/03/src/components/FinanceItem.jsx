import React from 'react';

class FinanceItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr className="transactions__tr">
                <td className="transactions__td">{this.props.type}</td>
                <td className="transactions__td">{this.props.title}</td>
                <td className="transactions__td">{this.props.sum}</td>
            </tr>
        );
    }
}

export default FinanceItem;