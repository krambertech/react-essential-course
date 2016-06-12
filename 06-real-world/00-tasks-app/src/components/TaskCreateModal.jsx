import React from 'react';

import Dialog from 'material-ui/lib/dialog';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';

const TaskCreateModal = React.createClass({
    getInitialState() {
        return {
            text : '',
            note : '',
            due  : null
        };
    },

    handleClose() {
        const { onClose } = this.props;

        this.resetState();

        if (onClose) {
            onClose();
        }
    },

    handleSubmit() {
        const { onSubmit } = this.props;

        if (onSubmit) {
            onSubmit({
                text: this.state.text,
                note: this.state.note,
                due: this.state.due
            });
        }

        this.resetState();
    },

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    },

    handleNoteChange(e) {
        this.setState({
            note: e.target.value
        });
    },

    handleDueChange(e, date) {
        this.setState({
            due: date
        });
    },

    resetState() {
        this.setState({
            text: '',
            note: '',
            due: null
        });
    },

    render() {
        const { text, note, due } = this.state;
        const { isOpen } = this.props;

        return (
            <Dialog
                className='TaskCreateModal'
                contentStyle={{ maxWidth: 400 }}
                actions={[
                    <FlatButton
                        label='Cancel'
                        onTouchTap={this.handleClose}
                    />,
                    <FlatButton
                        primary
                        label='Submit'
                        disabled={!text}
                        onTouchTap={this.handleSubmit}
                    />
                ]}
                open={isOpen}
                onRequestClose={this.handleClose}
            >
                <h3 className='TaskCreateModal__modal-title'>Add task</h3>
                <TextField
                    fullWidth
                    ref={c => this.taskInput = c}
                    value={text}
                    onChange={this.handleTextChange}
                    hintText='e.g. buy a bottle of milk'
                    floatingLabelText='Enter task title'
                />
                <TextField
                    fullWidth
                    value={note}
                    onChange={this.handleNoteChange}
                    hintText='e.g. 2.6% whole milk'
                    floatingLabelText='Enter task note'
                />
                <DatePicker
                    autoOk
                    fullWidth
                    value={due}
                    onChange={this.handleDueChange}
                    floatingLabelText='Enter due time'
                />
            </Dialog>
        );
    }
});

export default TaskCreateModal;
