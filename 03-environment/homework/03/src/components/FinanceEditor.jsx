var React = require('react');

require('./FinanceEditor.css');

var FinanceEditor = React.createClass({
    getInitialState: function() {
        return {
            type: 'costs',
            title: '',
            sum: ''
        };
    },

    handleTypeChange: function(event) {
        this.setState({
           type: event.target.value
        });
    },

    handleTitleChange: function(event) {
        this.setState({
            title: event.target.value
        });
    },

    handleSumChange: function(event) {
        this.setState({
            sum: event.target.value
        });
    },

    handleItemAdd: function() {
        var item = {
            type: this.state.type,
            title: this.state.title,
            sum: this.state.sum,
            id: Date.now()
        };

        this.props.onItemAdd(item);

        this.setState({
            title: '',
            sum: ''
        });
    },

    render: function() {
        return (
            <div className="finance__editor">
                <div className="editor">
                    <select className="editor__select" value={this.state.type} onChange={this.handleTypeChange} >
                        <option value="costs">costs</option>
                        <option value="income">income</option>
                    </select>
                    <input className="editor__field editor__field_title" type="text" placeholder="Title"
                           value={this.state.title}
                           onChange={this.handleTitleChange} />
                    <input className="editor__field editor__field_sum" type="number" placeholder="Sum"
                           value={this.state.sum}
                           onChange={this.handleSumChange} />
                    <button className="editor__button" onClick={this.handleItemAdd} >Add</button>
                </div>
            </div>
        );
    }
});

module.exports = FinanceEditor;