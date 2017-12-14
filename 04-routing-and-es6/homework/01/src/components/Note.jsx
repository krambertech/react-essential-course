import React from 'react';

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

export default Note;