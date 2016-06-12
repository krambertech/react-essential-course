import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

import api from '../api';

const TasksActions = {
    loadTasks(taskListId) {
        api.listTasks(taskListId)
        .then(data => {
            console.log(data);
            AppDispatcher.dispatch({
                type  : AppConstants.TASKS_LOAD_SUCCESS,
                items : data.items || []
            });
        })
        .catch(err => {
            AppDispatcher.dispatch({
                type  : AppConstants.TASKS_LOAD_FAIL,
                error : err
            });
        });
    },

    updateTaskStatus(params) {
        api.updateTask({
            taskListId: params.taskListId,
            taskId: params.taskId,
            status: params.isCompleted ? 'completed' : 'needsAction'
        })
        .then(data => {
            AppDispatcher.dispatch({
                type   : AppConstants.TASK_UPDATE_SUCCESS,
                task   : data,
                taskId : params.taskId
            });
        })
        .catch(err => {
            AppDispatcher.dispatch({
                type  : AppConstants.TASK_UPDATE_FAIL,
                error : err
            });
        });
    },

    updateTask(params) {
        api.updateTask({
            taskListId: params.taskListId,
            taskId: params.taskId,
            title: params.text,
            notes: params.note
        })
        .then(data => {
            AppDispatcher.dispatch({
                type   : AppConstants.TASK_UPDATE_SUCCESS,
                task   : data,
                taskId : params.taskId
            });
        })
        .catch(err => {
            AppDispatcher.dispatch({
                type  : AppConstants.TASK_UPDATE_FAIL,
                error : err
            });
        });
    },

    createTask(params) {
        const newTask = {
            taskListId: params.taskListId,
            title: params.text,
            notes: params.note
        };

        if (params.due) {
            newTask.due = (new Date(params.due)).toISOString();
        }

        api.insertTask(newTask)
        .then(data => {
            AppDispatcher.dispatch({
                type : AppConstants.TASK_CREATE_SUCCESS,
                task : data
            });
        })
        .catch(err => {
            AppDispatcher.dispatch({
                type  : AppConstants.TASK_CREATE_FAIL,
                error : err
            });
        });
    },

    deleteTask(params) {
        api.deleteTask({
            taskListId: params.taskListId,
            taskId: params.taskId
        })
        .then(data => {
            AppDispatcher.dispatch({
                type   : AppConstants.TASK_DELETE_SUCCESS,
                taskId : params.taskId,
                task   : data
            });
        })
        .catch(err => {
            AppDispatcher.dispatch({
                type  : AppConstants.TASK_DELETE_FAIL,
                error : err
            });
        });
    },
};

export default TasksActions;
