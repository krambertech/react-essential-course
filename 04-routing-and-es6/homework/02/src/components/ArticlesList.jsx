import React from 'react';
import ArticlePreview from './ArticlePreview.jsx';
import ARTICLES from '../articles.json';
import './ArticlesList.less';

class ArticlesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        };
    }

    componentDidMount() {
        let articlesArr = Object.keys(ARTICLES).map((key) => ARTICLES[key]);

        if(articlesArr) {
            this.setState({
                articles: articlesArr
            });
        }
    }

    render() {
        const articles = this.state.articles.map((item) => {
            return (
                <ArticlePreview
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    id={item.id}
                />
            );
        });

        return (
            <div className="articles__list">
                {articles}
            </div>
        );
    }
}

export default ArticlesList;