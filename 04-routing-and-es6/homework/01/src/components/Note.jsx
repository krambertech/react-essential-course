import React from 'react';
import PropTypes from 'prop-types';
import './Note.less';

class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const noteStyle = {
            backgroundColor: this.props.color
        };

        return (
            <div className="note" style={noteStyle}>
                {this.props.children}
                <span className="delete-note" onClick={this.props.onDelete}> x </span>
            </div>
        );
    }
}

Note.propTypes = {
    color: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Note;