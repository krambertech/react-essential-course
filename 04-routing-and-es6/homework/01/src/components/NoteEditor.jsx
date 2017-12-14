import React from 'react';
import NoteColor from './NoteColor.jsx';
import PropTypes from 'prop-types';
import './NoteEditor.less';

class NoteEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            color: '#FFEB3B'
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleColor = this.handleColor.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
    }

    handleTextChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    handleNoteAdd() {
        const newNote = {
            text: this.state.text,
            color: this.state.color,
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);

        this.setState({
            text: '',
            color: '#FFEB3B'
        });
    }

    handleColor(color) {
        this.setState({
            color: color
        })
    }

    render() {
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
}

NoteEditor.propTypes = {
    onNoteAdd: PropTypes.func.isRequired
};

export default NoteEditor;