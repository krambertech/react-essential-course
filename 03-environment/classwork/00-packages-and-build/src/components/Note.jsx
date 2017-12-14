var React = require('react');

require('./Note.css');

var Note = React.createClass({
    render: function () {
        var noteStyle = {
            backgroundColor: this.props.color
        };

        return (
            <div className="note" style={noteStyle}>
                {this.props.children}
                <span className="delete-note" onClick={this.props.onDelete}> x </span>
            </div>
        );
    }
});

module.exports = Note;