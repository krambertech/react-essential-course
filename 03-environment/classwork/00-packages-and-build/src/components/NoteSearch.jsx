var React = require('react');

require('./NoteSearch.css');

var NoteSearch = React.createClass({
    render: function() {
        return (
            <div className="search">
                <input
                    className="search__field"
                    type="text"
                    placeholder="Поиск по заметкам"
                    onChange={this.props.onSearch}
                    value={this.props.value}
                />
            </div>
        );
    }
});

module.exports = NoteSearch;