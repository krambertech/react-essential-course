var React = require('react');
var Article = require('./Article.jsx');

require('./ArticlesList.css');

var ArticlesList = React.createClass({
    render: function() {
        return (
            <div className="articles__list">
                {
                    this.props.items.map(function(item) {
                        return (
                            <Article
                                key={item.id}
                                title={item.title}
                                description={item.description}
                            />
                        );
                    })
                }
            </div>
        );
    }
});

module.exports = ArticlesList;