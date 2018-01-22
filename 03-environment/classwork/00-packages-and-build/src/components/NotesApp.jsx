var React = require('react');
var NoteSearch = require('./NoteSearch.jsx');
var NoteEditor = require('./NoteEditor.jsx');
var NotesGrid = require('./NotesGrid.jsx');

require('./NotesApp.css');

var NotesApp = React.createClass({
    getInitialState: function() {
        return {
            notes: [],
            searchQuery: ''
        };
    },

    componentDidMount: function() {
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        if(localNotes) {
            this.setState({
                notes: localNotes
            });
        }
    },

    componentDidUpdate: function() {
        this._updateLocalStorage();
    },

    handleNoteAdd: function(newNote) {
        var newNotes = this.state.notes.slice();

        newNotes.unshift(newNote);

        this.setState({
            notes: newNotes,
            searchQuery: ''
        });
    },

    handleNoteDelete: function(note) {
        var noteId = note.id;
        var newNotes = this.state.notes.filter(function(note) {
            return note.id !== noteId;
        });

        this.setState({
            notes: newNotes
        });
    },

    handleNoteSearch: function(event) {
        this.setState({
            searchQuery: event.target.value
        });
    },

    render: function() {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <NoteSearch value={this.state.searchQuery} onSearch={this.handleNoteSearch} />
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid
                    notes={this._getVisibleNotes(this.state.notes, this.state.searchQuery)}
                    onNoteDelete={this.handleNoteDelete}
                />
            </div>
        );
    },

    _updateLocalStorage: function() {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    },

    _getVisibleNotes: function(notes, query) {
        if(query.length) {
            query = query.toLowerCase();
            return notes.filter(function(note) {
                var searchValue = note.text.toLowerCase();
                return searchValue.indexOf(query) !== -1;
            });
        }
        return notes;
    }
});

module.exports = NotesApp;