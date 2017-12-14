var Note = React.createClass(
    {
        render: function() {
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
    }
);

var NoteEditor = React.createClass({
    getInitialState: function() {
        return {
            text: '',
            color: '#ffff00'
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
            color: '#ffff00'
        });
    },

    handleColor: function(event) {
        this.setState({
            color: event.target.value
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
                    <input className="input-color" type="color" onChange={this.handleColor} value={this.state.color} />
                    <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
                </div>
            </div>
        );
    }
});

var NotesGrid = React.createClass({
    componentDidMount: function() {
        var grid = this.refs.grid;
        this.msnry = new Masonry(
            grid,
            {
                itemSelector: '.note',
                columnWidth: 200,
                gutter: 10
            }
        );
    },

    componentDidUpdate: function(prevProps) {
        if(this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    },

    render: function() {
        var onDelete = this.props.onNoteDelete;
        return (
            <div className="notes-grid" ref="grid">
                {
                    this.props.notes.map(function(note) {
                        return (
                            <Note
                                key={note.id}
                                onDelete={onDelete.bind(null, note)}
                                color={note.color}
                            >
                                {note.text}
                            </Note>
                        );
                    })
                }
            </div>
        );
    }
});

var NotesApp = React.createClass({
    getInitialState: function() {
        return {
            notes: []
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
            notes: newNotes
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

    render: function() {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
            </div>
        );
    },

    _updateLocalStorage: function() {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
});

ReactDOM.render(
    <NotesApp />,
    document.getElementById('content')
);