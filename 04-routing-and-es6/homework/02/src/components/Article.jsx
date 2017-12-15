import React from 'react';
import ARTICLES from '../articles.json';
import './Article.less';

class Article extends React.Component {
    constructor(props) {
        super(props);

        const { id } = this.props.match.params;

        this.state = {
            article: ARTICLES.find(article => article.id === id)
        };
    }

    componentWillReceiveProps(nextProps) {
        const { articleId: prevId } = this.props.match.params;
        const { articleId: nextId } = nextProps.match.params;

        if (prevId !== nextId) {
            this.setState({
                article: ARTICLES.find(article => article.id === nextId)
            });
        }
    }

    render() {
        const { article } = this.state;

        return (
            <div className="article">
                <h4 className="article__title">{article.title}</h4>
                <p className="article__description">{article.text}</p>
            </div>
        );
    }
}

export default Article;