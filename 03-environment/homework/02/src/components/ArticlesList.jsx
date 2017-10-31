import React from 'react';
import Article from './Article.jsx';

import './ArticlesList.less';

class ArticlesList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="articles__list">
                {
                    this.props.items.map((item) => {
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
}

export default ArticlesList;