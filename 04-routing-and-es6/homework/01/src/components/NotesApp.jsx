import React from 'react';
import NoteSearch from './NoteSearch.jsx';
import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';
import './NotesApp.less';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            searchQuery: ''
        };

        this.handleNoteSearch = this.handleNoteSearch.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleNoteDelete = this.handleNoteDelete.bind(this);
    }

    componentDidMount() {
        const localNotes = JSON.parse(localStorage.getItem('notes'));
        if(localNotes) {
            this.setState({
                notes: localNotes
            });
        }
    }

    componentDidUpdate() {
        this._updateLocalStorage();
    }

    handleNoteAdd(newNote) {
        let newNotes = this.state.notes.slice();

        newNotes.unshift(newNote);

        this.setState({
            notes: newNotes,
            searchQuery: ''
        });
    }

    handleNoteDelete(note) {
        const noteId = note.id;
        const newNotes = this.state.notes.filter((note) => note.id !== noteId);

        this.setState({
            notes: newNotes
        });
    }

    handleNoteSearch(event) {
        this.setState({
            searchQuery: event.target.value
        });
    }

    _updateLocalStorage() {
        const notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }

    _getVisibleNotes(notes, query) {
        if (query.length) {
            query = query.toLowerCase();
            return notes.filter((note) => {
                const searchValue = note.text.toLowerCase();
                return searchValue.indexOf(query) !== -1;
            });
        }
        return notes;
    }

    render() {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <NoteSearch value={this.state.searchQuery} onSearch={this.handleNoteSearch}/>
                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <NotesGrid
                    notes={this._getVisibleNotes(this.state.notes, this.state.searchQuery)}
                    onNoteDelete={this.handleNoteDelete}
                />
            </div>
        );
    }
}

export default NotesApp;