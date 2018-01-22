var React = require('react');
var NoteColor = require('./NoteColor.jsx');

require('./NoteEditor.css');

var NoteEditor = React.createClass({
    getInitialState: function() {
        return {
            text: '',
            color: '#FFEB3B'
        };
    },

    handleTextChange: function(event) {
        this.setState({
            text: event.target.value
        });
    },

    handleNoteAdd: function() {
        var newNote = {
            text: this.state.text,
            color: this.state.color,
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);

        this.setState({
            text: '',
            color: '#FFEB3B'
        });
    },

    handleColor: function(color) {
        this.setState({
            color: color
        })
    },

    render: function() {
        return (
            <div className="note-editor">
                <textarea
                    placeholder="Enter your note here..."
                    rows="5"
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <div className="note-editor__buttons">
                    <NoteColor onChangeColor={this.handleColor} defaultColor={this.state.color}/>
                    <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
                </div>
            </div>
        );
    }
});

module.exports = NoteEditor;