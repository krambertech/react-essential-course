var React = require('react');

require('./ArticlesSearch.css');

var ArticlesSearch = React.createClass({
    render: function() {
        return (
            <div className="search">
                <input
                    className="search__field"
                    type="text"
                    placeholder="Search by article's title"
                    onChange={this.props.onSearch}
                    value={this.props.value}
                />
            </div>
        );
    }
});

module.exports = ArticlesSearch;