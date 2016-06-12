import React from 'react';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';

const TaskListCreateModal = React.createClass({
    getInitialState() {
        return {
            name : ''
        };
    },

    handleClose() {
        const { onClose } = this.props;

        this.setState({ name: '' });

        if (onClose) {
            onClose();
        }
    },

    handleSubmit() {
        const { onSubmit } = this.props;

        if (onSubmit) {
            onSubmit({
                name: this.state.name
            });
        }

        this.setState({ name: '' });
    },

    handleTextChange(e) {
        this.setState({
            name: e.target.value
        });
    },

    render() {
        const { name } = this.state;
        const { isOpen } = this.props;

        return (
            <Dialog
                className='TaskListCreateModal'
                contentStyle={{ maxWidth: 400 }}
                actions={[
                    <FlatButton
                        label='Cancel'
                        onTouchTap={this.handleClose}
                    />,
                    <FlatButton
                        primary
                        label='Submit'
                        disabled={!name}
                        onTouchTap={this.handleSubmit}
                    />
                ]}
                open={isOpen}
                onRequestClose={this.handleClose}
            >
                <h3 className='TaskListCreateModal__modal-title'>Add task list</h3>
                <TextField
                    fullWidth
                    ref={c => this.taskInput = c}
                    value={name}
                    onChange={this.handleTextChange}
                    hintText='e.g. movies to watch'
                    floatingLabelText='Enter task list name'
                />
            </Dialog>
        );
    }
});

export default TaskListCreateModal;
