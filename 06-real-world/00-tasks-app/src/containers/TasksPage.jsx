import React from 'react';

import TasksActions from '../actions/TasksActions';
import TaskListsActions from '../actions/TaskListsActions';
import TasksStore from '../stores/TasksStore';
import TaskListsStore from '../stores/TaskListsStore';

import TasksPage from '../components/TasksPage.jsx';
import TaskCreateModal from '../components/TaskCreateModal.jsx';

function getStateFromFlux() {
    return {
        tasks: TasksStore.getTasks(),
        error: TasksStore.getError(),
        isLoadingTasks: TasksStore.isLoadingTasks(),
        taskList: TaskListsStore.getCurrentTaskList() || {}
    };
}

const TasksPageContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            ...getStateFromFlux(),
            isCreatingTask: false
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

    handleTaskStatusChange(taskId, { isCompleted }) {
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

    handleTaskCreateModalClose() {
        this.setState({ isCreatingTask : false });
    },

    handleTaskSubmit(task) {
        const taskListId = this.props.params.id;

        TasksActions.createTask({ taskListId, ...task });

        this.setState({ isCreatingTask : false });
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

    handleUpdateTaskList({ name }) {
        TaskListsActions.updateTaskList({
            taskListId: this.props.params.id,
            name
        });
    },

    render() {
        return (
            <div>
                <TasksPage
                    taskList={this.state.taskList}
                    tasks={this.state.tasks}
                    error={this.state.error}
                    isLoadingTasks={this.state.isLoadingTasks}
                    onUpdateTaskList={this.handleUpdateTaskList}
                    onAddTask={this.handleAddTask}
                    onDeleteTaskList={this.handleDeleteTaskList}
                    onTaskDelete={this.handleTaskDelete}
                    onTaskStatusChange={this.handleTaskStatusChange}
                    onTaskUpdate={this.handleTaskUpdate}
                />
                <TaskCreateModal
                    isOpen={this.state.isCreatingTask}
                    onSubmit={this.handleTaskSubmit}
                    onClose={this.handleTaskCreateModalClose}
                />
            </div>
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default TasksPageContainer;
