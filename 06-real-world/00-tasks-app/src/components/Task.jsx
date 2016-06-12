import React from 'react';
import moment from 'moment';

import Checkbox from 'material-ui/lib/checkbox';
import ListItem from 'material-ui/lib/lists/list-item';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

import NoteIcon from 'material-ui/lib/svg-icons/communication/message';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

import './Task.less';

const ENTER_KEY = 13;
const ESC_KEY = 27;

const Task = React.createClass({
    getInitialState() {
        return {
            isEditing: false
        };
    },

    handleEdit(e) {
        this.setState({ isEditing: true }, this.focusInput);
    },

    handleCancel() {
        this.cancelTask();
    },

    handleSave() {
        this.saveTask();
    },

    handleCheck() {
        this.props.onStatusChange({
            isCompleted: !this.props.isCompleted
        });
    },

    handleKeyDown(e) {
        if (e.keyCode === ENTER_KEY) {
            this.saveTask();
        }

        if (e.keyCode === ESC_KEY) {
            this.cancelTask();
        }
    },

    focusInput() {
        this.text.focus();
    },

    saveTask() {
        this.props.onUpdate({
            text: this.text.value,
            note: this.note.value
        });

        this.setState({ isEditing: false });
    },

    cancelTask() {
        this.setState({ isEditing: false });
    },

    render() {
        const { text, note, due, isCompleted, onDelete } = this.props;

        return (
            this.state.isEditing
            ?
                <div className='Task editing'>
                    <input
                        className='Task__text-input'
                        type='text'
                        defaultValue={text}
                        onKeyDown={this.handleKeyDown}
                        ref={c => this.text = c}
                    />

                    <textarea
                        className='Task__note-input'
                        type='text'
                        defaultValue={note}
                        onKeyDown={this.handleKeyDown}
                        ref={c => this.note = c}
                    />

                    <div className='Task__toolbar'>
                        <div>
                            <RaisedButton primary onClick={this.handleSave} label='Save' />
                            <FlatButton onClick={this.handleCancel} label='Cancel' />
                        </div>
                    </div>
                </div>
            :
                <div className='Task'>
                    <Checkbox
                        className='Task__checkbox'
                        checked={isCompleted}
                        onCheck={this.handleCheck}
                    />

                    <div className='Task__text' onClick={this.handleEdit}>
                        <div className='Task__title'>
                            {text}
                            {
                                note
                                ?
                                    <span title={note}>
                                        <NoteIcon className='Task__note' />
                                    </span>
                                :
                                    null
                            }
                        </div>
                        {
                            due
                            ?
                                <div className='Task__due'>
                                    {'due ' + moment(due).fromNow()}
                                </div>
                            :
                                null
                        }
                    </div>

                    <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}>
                        <MenuItem onClick={this.handleEdit}>Edit</MenuItem>
                        <MenuItem onClick={onDelete}>Delete</MenuItem>
                    </IconMenu>
                </div>
        );
    }
});

export default Task;
