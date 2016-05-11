import React from 'react';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';

const TaskCreateModal = React.createClass({
    getInitialState() {
        return {
            text : ''
        };
    },

    handleClose() {
        const { onClose } = this.props;

        this.setState({ text: '' });

        if (onClose) {
            onClose();
        }
    },

    handleSubmit() {
        const { onSubmit } = this.props;

        if (onSubmit) {
            onSubmit({
                text: this.state.text
            });
        }

        this.setState({ text: '' });
    },

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    },

    render() {
        const { text } = this.state;
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
                    floatingLabelText='Enter task description'
                />
            </Dialog>
        );
    }
});

export default TaskCreateModal;
