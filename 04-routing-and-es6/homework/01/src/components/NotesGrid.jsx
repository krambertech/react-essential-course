import React from 'react';
import Note from './Note.jsx';
import PropTypes from 'prop-types';
import './NotesGrid.less';

class NotesGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const grid = this.refs.grid;
        this.msnry = new Masonry(
            grid,
            {
                itemSelector: '.note',
                columnWidth: 200,
                gutter: 10
            }
        );
    }

    componentDidUpdate(prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }

    render() {
        const onDelete = this.props.onNoteDelete;
        return (
            <div className="notes-grid" ref="grid">
                {
                    this.props.notes.map((note) => {
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
}

NotesGrid.propTypes = {
    notes: PropTypes.array,
    onNoteDelete: PropTypes.func.isRequired
};

export default NotesGrid;