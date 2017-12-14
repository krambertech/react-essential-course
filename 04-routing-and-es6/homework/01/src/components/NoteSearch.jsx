import React from 'react';
import PropTypes from 'prop-types';
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

NoteSearch.propTypes = {
    value: PropTypes.string,
    onSearch: PropTypes.func.isRequired
};

export default NoteSearch;