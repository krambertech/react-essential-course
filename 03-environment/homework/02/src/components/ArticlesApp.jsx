import React from 'react';
import ArticlesList from './ArticlesList.jsx';
import ArticlesSearch from './ArticlesSearch.jsx';
import ARTICLES from './articles.json';

import './ArticlesApp.less';

class ArticlesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            searchQuery: ''
        };

        this.handleItemSearch = this.handleItemSearch.bind(this);
    }

    componentDidMount() {
        let articlesArr = Object.keys(ARTICLES).map((key) => ARTICLES[key]);

        if(articlesArr) {
            this.setState({
                articles: articlesArr
            });
        }
    }

    handleItemSearch(event) {
        this.setState({
            searchQuery: event.target.value
        });
    }

    _getVisibleItems(items, query) {
        if(query.length) {
            query = query.toLowerCase();
            return items.filter((item) => {
                let searchValue = item.title.toLowerCase();
                return searchValue.indexOf(query) !== -1;
            });
        }
        return items;
    }

    render() {
        return (
            <div className="articles">
                <h2 className="articles__header">ArticlesApp</h2>
                <ArticlesSearch value={this.state.searchQuery} onSearch={this.handleItemSearch} />
                <ArticlesList
                    items={this._getVisibleItems(this.state.articles, this.state.searchQuery)}
                />
            </div>
        );
    }
}

export default ArticlesApp;