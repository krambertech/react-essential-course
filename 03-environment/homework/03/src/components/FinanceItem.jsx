var React = require('react');

var FinanceItem = React.createClass({
    render: function() {
        return (
            <tr className="transactions__tr">
                <td className="transactions__td">{this.props.type}</td>
                <td className="transactions__td">{this.props.title}</td>
                <td className="transactions__td">{this.props.sum}</td>
            </tr>
        );
    }
});

module.exports = FinanceItem;