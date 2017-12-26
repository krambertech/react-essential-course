import React from 'react';
import ArticlesList from './ArticlesList.jsx';
import { Link } from 'react-router-dom';
import './ArticlesApp.less';

class ArticlesApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="articles">
                <h2 className="articles__header">ArticlesApp</h2>
                <div className="articles__links">
                    <Link className='articles__link' to="/articles">Articles list</Link>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default ArticlesApp;