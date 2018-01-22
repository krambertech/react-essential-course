import React from 'react';

import './Article.less';

class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="article">
                <h4 className="article__title">{this.props.title}</h4>
                <p className="article__description">{this.props.description}</p>
            </div>
        );
    }
}

export default Article;