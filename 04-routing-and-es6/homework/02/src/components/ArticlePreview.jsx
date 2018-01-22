import React from 'react';
import { Link } from 'react-router-dom';
import './ArticlePreview.less';

class ArticlePreview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link className="article-preview" to={`/article/${this.props.id}`}>
                <h4 className="article-preview__title">{this.props.title}</h4>
                <p className="article-preview__description">{this.props.description}</p>
            </Link>
        );
    }
}

export default ArticlePreview;