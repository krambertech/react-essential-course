var React = require('react');
var ArticlesList = require('./ArticlesList.jsx');
var ARTICLES = require('./articles.json');

require('./ArticlesApp.css');

var ArticlesApp = React.createClass({

    getInitialState: function() {
        return {
            articles: [],
            searchQuery: ''
        };
    },

    componentDidMount: function() {
        var articlesArr = Object.keys(ARTICLES).map(function(key) {
            return ARTICLES[key];
        });

        if(articlesArr) {
            this.setState({
               articles: articlesArr
            });
        }
    },

    _getVisibleItems: function(items, query) {
        if(query.length) {
            query = query.toLowerCase();
            return items.filter(function(item) {
                var searchValue = item.title.toLowerCase();
                return searchValue.indexOf(query) !== -1;
            });
        }
        return items;
    },

    render: function() {
        return (
            <div className="articles">
                <h2 className="articles__header">ArticlesApp</h2>
                <ArticlesList
                    items={this._getVisibleItems(this.state.articles, this.state.searchQuery)}
                />
            </div>
        );
    }
});

module.exports = ArticlesApp;