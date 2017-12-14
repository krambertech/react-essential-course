import React from 'react';

import './NoteSearch.less';

class NoteSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search">
                <input
                    className="search__field"
                    type="text"
                    placeholder="Поиск по заметкам"
                    onChange={this.props.onSearch}
                    value={this.props.value}
                />
            </div>
        );
    }
}

export default NoteSearch;