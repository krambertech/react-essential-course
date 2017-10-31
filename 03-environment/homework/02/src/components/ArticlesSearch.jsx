import React from 'react';

import './ArticlesSearch.less';

class ArticlesSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search">
                <input
                    className="search__field"
                    type="text"
                    placeholder="Search by article's title"
                    onChange={this.props.onSearch}
                    value={this.props.value}
                />
            </div>
        );
    }
}

export default ArticlesSearch;