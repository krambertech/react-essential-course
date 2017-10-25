var React = require('react');
var FinanceItem = require('./FinanceItem.jsx');

require('./FinanceList.css');

var FinanceList = React.createClass({
    render: function() {
        return (
            <div className="finance__list">
                <table className="transactions" width="100%">
                    <thead className="transactions__thead">
                        <tr className="transactions__tr">
                            <th className="transactions__th">Type</th>
                            <th className="transactions__th">Title</th>
                            <th className="transactions__th">Sum</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.items.map(function(item) {
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
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = FinanceList;