var React = require('react');

require('./Article.css');

var Article = React.createClass({
    render: function() {
        return (
            <div className="article">
                <h4 className="article__title">{this.props.title}</h4>
                <p className="article__description">{this.props.description}</p>
            </div>
        );
    }
});

module.exports = Article;