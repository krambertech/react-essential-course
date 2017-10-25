var React = require('react');
var FinanceList = require('./FinanceList.jsx');
var FinanceEditor = require('./FinanceEditor.jsx');

require('./FinanceApp.css');

var FinanceApp = React.createClass({
    getInitialState: function() {
        return {
            items: [],
            type: ''
        };
    },

    componentDidMount: function() {
        var items = JSON.parse(localStorage.getItem('transactions'));
        if(items) {
            this.setState({
                items: items
            });
        }
    },

    componentDidUpdate: function() {
        this._updateLocalStorage();
    },

    handleItemAdd: function(newItem) {
        var items = this.state.items.slice();

        items.unshift(newItem);

        this.setState({
            items: items
        });
    },

    _updateLocalStorage: function() {
        var items = JSON.stringify(this.state.items);
        localStorage.setItem('transactions', items);
    },

    _getVisibleItems: function(items, type) {
        if(type === 'costs') {
            return items.filter(function(item) {
                return (item.type === 'costs');
            });
        } else if(type === 'income') {
            return items.filter(function(item) {
                return (item.type === 'income');
            });
        } else {
            return items;
        }
    },

    render: function() {
        return (
            <div className="finance">
                <h2 className="finance__header">FinanceApp</h2>
                <FinanceEditor onItemAdd={this.handleItemAdd} />
                <FinanceList items={this._getVisibleItems(this.state.items, this.state.type)} />
            </div>
        );
    }
});

module.exports = FinanceApp;