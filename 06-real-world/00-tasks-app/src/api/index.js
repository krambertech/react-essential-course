import { clientId } from '../config';

const SCOPES = ['https://www.googleapis.com/auth/tasks', 'https://www.googleapis.com/auth/plus.me'];

export default {
    authorize(params) {
        return new Promise((resolve, reject) => {
            gapi.auth.authorize(
                {
                    'client_id': clientId,
                    'scope': SCOPES,
                    'immediate': params.immediate,
                    'cookie_policy': 'single_host_origin'
                },
                authResult => {
                    if (authResult.error) {
                        return reject(authResult.error);
                    }

                    return gapi.client.load('tasks', 'v1', () => gapi.client.load('plus', 'v1', () => resolve() ) );
                }
            );
        });
    },

    listTaskLists() {
        const request = gapi.client.tasks.tasklists.list();

        return this.makeRequest(request);
    },

    showTaskList(taskListId) {
        const request = gapi.client.tasks.tasklists.get({
            tasklist: taskListId
        });

        return this.makeRequest(request);
    },

    insertTaskList({ title }) {
        const request = gapi.client.tasks.tasklists.insert({
            title: title
        });

        return this.makeRequest(request);
    },

    updateTaskList({ taskListId, title }) {
        const request = gapi.client.tasks.tasklists.update({
            tasklist: taskListId,
            id: taskListId,
            title: title
        });

        return this.makeRequest(request);
    },

    deleteTaskList({ taskListId }) {
        const request = gapi.client.tasks.tasklists.delete({
            tasklist: taskListId
        });

        return this.makeRequest(request);
    },

    listTasks(taskListId) {
        const request = gapi.client.tasks.tasks.list({
            tasklist: taskListId
        });

        return this.makeRequest(request);
    },

    insertTask({ taskListId, ...params }) {
        const request = gapi.client.tasks.tasks.insert({
            tasklist : taskListId,
            ...params
        });

        return this.makeRequest(request);
    },

    updateTask({ taskListId, taskId, ...params }) {
        const request = gapi.client.tasks.tasks.update({
            tasklist : taskListId,
            task     : taskId,
            id       : taskId,
            ...params
        });

        return this.makeRequest(request);
    },

    deleteTask({ taskListId, taskId }) {
        const request = gapi.client.tasks.tasks.delete({
            tasklist : taskListId,
            task     : taskId,
            id       : taskId
        });

        return this.makeRequest(request);
    },

    makeRequest(requestObj) {
        return new Promise((resolve, reject) => {
            requestObj.execute(resp =>
                resp.error
                ? reject(resp.error)
                : resolve(resp.result)
            );
        });
    }
}
