import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _tasks = [];
let _isLoading = true;
let _error = null;

function formatTask(data) {
    return {
        id          : data.id,
        text        : data.title,
        note        : data.notes,
        due         : data.due ? new Date(data.due) : '',
        isCompleted : data.status === 'completed',
        position    : data.position
    };
}

function getErrorMessageByCode(code) {
    const errorMessages = {
        400: 'Cannot load task list'
    };

    return errorMessages[code] || 'Something bad happened';
}

const TasksStore = Object.assign({}, EventEmitter.prototype, {
    getTasks() {
        return _tasks;
    },

    getError() {
        return _error;
    },

    isLoadingTasks() {
        return _isLoading;
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.TASKS_LOAD_REQUEST: {
            _tasks = [];
            _error = null;
            _isLoading = true;

            TasksStore.emitChange();
            break;
        }

        case AppConstants.TASKS_LOAD_SUCCESS: {
            _tasks = action.items.map(formatTask);
            _error = null;
            _isLoading = false;

            TasksStore.emitChange();
            break;
        }

        case AppConstants.TASKS_LOAD_FAIL: {
            _tasks = [];
            _error = getErrorMessageByCode(action.error.code);
            _isLoading = false;

            TasksStore.emitChange();
            break;
        }

        case AppConstants.TASK_UPDATE_REQUEST: {
            const updatedTaskIndex = _tasks.findIndex(task => task.id === action.taskId);

            _tasks[updatedTaskIndex].isCompleted = action.isCompleted !== undefined ? action.isCompleted : _tasks[updatedTaskIndex].isCompleted;
            _tasks[updatedTaskIndex].text = action.text || _tasks[updatedTaskIndex].text;

            TasksStore.emitChange();
            break;
        }

        case AppConstants.TASK_UPDATE_SUCCESS: {
            const updatedTaskIndex = _tasks.findIndex(task => task.id === action.taskId);
            _tasks[updatedTaskIndex] = formatTask(action.task);

            TasksStore.emitChange();
            break;
        }

        case AppConstants.TASK_DELETE_SUCCESS: {
            const deletedTaskIndex = _tasks.findIndex(task => task.id === action.taskId);
            _tasks.splice(deletedTaskIndex, 1);

            TasksStore.emitChange();
            break;
        }

        case AppConstants.TASK_CREATE_SUCCESS: {
            const newTask = formatTask(action.task);
            _tasks.unshift(newTask);

            TasksStore.emitChange();
            break;
        }

        default: {
        }
    }
});

export default TasksStore;
