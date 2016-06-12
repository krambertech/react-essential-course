import React from 'react';

import TasksActions from '../actions/TasksActions';
import TaskListsActions from '../actions/TaskListsActions';
import TasksStore from '../stores/TasksStore';
import TaskListsStore from '../stores/TaskListsStore';

import IconButton from 'material-ui/lib/icon-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import ImageEdit from 'material-ui/lib/svg-icons/image/edit';
import ActionDelete from 'material-ui/lib/svg-icons/action/delete';

import Task from './Task.jsx';
import TaskCreateModal from './TaskCreateModal.jsx';

import './TasksPage.less';

const ENTER_KEY = 13;
const ESC_KEY = 27;

function getStateFromFlux() {
    return {
        tasks: TasksStore.getTasks(),
        taskList: TaskListsStore.getCurrentTaskList() || {}
    };
}

const TasksPage = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    
    getInitialState() {
        return {
            ...getStateFromFlux(),
            isCreatingTask: false,
            isEditingTaskList: false
        };
    },

    componentWillMount() {
        TasksActions.loadTasks(this.props.params.id);
        TaskListsActions.loadTaskList(this.props.params.id);
    },

    componentDidMount() {
        TasksStore.addChangeListener(this._onChange);
        TaskListsStore.addChangeListener(this._onChange);
    },

    componentWillReceiveProps(nextProps) {
        if (this.props.params.id !== nextProps.params.id) {
            TasksActions.loadTasks(nextProps.params.id);
            TaskListsActions.loadTaskList(nextProps.params.id);
        }
    },

    componentWillUnmount() {
        TasksStore.removeChangeListener(this._onChange);
        TaskListsStore.removeChangeListener(this._onChange);
    },

    handleStatusChange(taskId, { isCompleted }) {
        TasksActions.updateTaskStatus({
            taskListId: this.props.params.id,
            taskId: taskId,
            isCompleted: isCompleted
        });
    },

    handleTaskUpdate(taskId, task) {
        TasksActions.updateTask({
            taskListId: this.props.params.id,
            taskId: taskId,
            ...task
        });
    },

    handleTaskDelete(taskId) {
        TasksActions.deleteTask({
            taskListId: this.props.params.id,
            taskId: taskId
        });
    },

    handleAddTask() {
        this.setState({ isCreatingTask : true });
    },

    handleClose() {
        this.setState({ isCreatingTask : false });
    },

    handleTaskSubmit(task) {
        const taskListId = this.props.params.id;

        TasksActions.createTask({ taskListId, ...task });

        this.setState({ isCreatingTask : false });
    },

    handleEditTaskList() {
        this.setState({
            isEditingTaskList: true
        }, () => this.taskList.focus() );
    },

    handleDeleteTaskList() {
        const isConfirmed = confirm(
            'Are you sure you want delete this task list? All tasks in it will be deleted too'
        );

        if (isConfirmed) {
            TaskListsActions.deleteTaskList({
                taskListId: this.props.params.id
            });
        }

        this.context.router.push('/lists');
    },

    handleSubmitTaskList() {
        this.saveTaskList();
    },

    handleTaskListEditKeyDown(e) {
        if (e.keyCode === ENTER_KEY) {
            this.saveTaskList();
        }

        if (e.keyCode === ESC_KEY) {
            this.cancelTaskList();
        }
    },

    saveTaskList() {
        TaskListsActions.updateTaskList({
            taskListId: this.props.params.id,
            name: this.taskList.value
        });

        this.cancelTaskList();
    },

    cancelTaskList() {
        this.setState({ isEditingTaskList: false });
    },

    render() {
        return (
            <div className='TasksPage'>
                <div className='TasksPage__header'>
                    {
                        this.state.isEditingTaskList
                        ?
                            <input
                                ref={c => this.taskList = c}
                                className='TasksPage__title-input'
                                defaultValue={this.state.taskList.name}
                                onKeyDown={this.handleTaskListEditKeyDown}
                                onBlur={this.cancelTaskList}
                            />
                        :
                            <h2
                                className='TasksPage__title'
                                onClick={this.handleEditTaskList}
                            >
                                {this.state.taskList.name}
                            </h2>
                    }

                    <div className='TasksPage__tools'>
                        <IconButton onClick={this.handleAddTask}>
                            <ContentAdd />
                        </IconButton>
                        <IconButton onClick={this.handleDeleteTaskList}>
                            <ActionDelete />
                        </IconButton>
                    </div>
                </div>

                <div className='TasksPage__tasks'>
                    {
                        this.state.tasks.map(task =>
                            <Task
                                key={task.id}
                                text={task.text}
                                note={task.note}
                                due={task.due}
                                isCompleted={task.isCompleted}
                                onDelete={this.handleTaskDelete.bind(null, task.id)}
                                onStatusChange={this.handleStatusChange.bind(null, task.id)}
                                onUpdate={this.handleTaskUpdate.bind(null, task.id)}
                            />
                        )
                    }
                </div>
                <TaskCreateModal
                    isOpen={this.state.isCreatingTask}
                    onSubmit={this.handleTaskSubmit}
                    onClose={this.handleClose}
                />
            </div>
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default TasksPage;
