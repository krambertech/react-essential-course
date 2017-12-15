import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import ArticlesApp from './components/ArticlesApp.jsx';
import ArticlesList from './components/ArticlesList.jsx';
import Article from './components/Article.jsx';

ReactDOM.render(
    <HashRouter>
        <ArticlesApp>
            <Route path="/articles" component={ArticlesList} />
            <Route path="/article/:id" component={Article} />
        </ArticlesApp>
    </HashRouter>,
    document.getElementById('content')
);