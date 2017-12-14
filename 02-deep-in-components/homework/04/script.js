var TodoFilter = React.createClass({
    render: function() {
        return (
            <div className="todo-filter">
                <div className={`todo-filter__item ${(this.props.status == 'all') ? 'active' : ''}`}
                     onClick={this.props.onFilter.bind(null, 'all')}
                >All</div>
                <div className={`todo-filter__item ${(this.props.status == 'new') ? 'active' : ''}`}
                     onClick={this.props.onFilter.bind(null, 'new')}
                >New</div>
                <div className={`todo-filter__item ${(this.props.status == 'completed') ? 'active' : ''}`}
                     onClick={this.props.onFilter.bind(null, 'completed')}
                >Completed</div>
            </div>
        );
    }
});

var TodoTask = React.createClass({
    render: function() {
        return (
            <div className="todo-task">
                <label className="todo-task__label">
                    <input
                        type="checkbox"
                        className="todo-task__checkbox"
                        checked={(this.props.completed)?(true):(false)}
                        onChange={this.props.onChange}
                    />
                    <span className="todo-task__text">
                        {this.props.text}
                    </span>
                </label>
                <button
                    className="todo-task__button"
                    onClick={this.props.onDelete}
                >-</button>
            </div>
        );
    }
});

var TodoList = React.createClass({
    render: function() {
        var onDelete = this.props.onTaskDelete;
        var onChange = this.props.onTaskChange;

        return (
            <div className="todo-list">
                {
                    this.props.tasks.map(function(task) {
                        return (
                            <TodoTask
                                key={task.id}
                                text={task.text}
                                completed={task.completed}
                                onDelete={onDelete.bind(null, task)}
                                onChange={onChange.bind(null, task)}
                            />
                        );
                    })
                }
            </div>
        );
    }
});

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            tasks: [],
            status: 'all'
        };
    },

    componentDidMount: function() {
        var localTasks = JSON.parse(localStorage.getItem('tasks'));
        if(localTasks) {
            this.setState({
                tasks: localTasks
            });
        }
    },

    componentDidUpdate: function() {
        this._updateLocalStorage();
    },

    handleTaskAdd: function(task) {
        var newTasks = this.state.tasks.slice();

        newTasks.unshift(task);

        this.setState({
            tasks: newTasks
        });
    },

    handleTaskDelete: function(task) {
        var taskId = task.id;
        var newTasks = this.state.tasks.filter(function(task) {
            return task.id !== taskId;
        });

        this.setState({
            tasks: newTasks
        });
    },

    handleTaskChange: function(task) {
        var taskId = task.id;
        var newTasks = this.state.tasks;

        for(var i = 0; i < newTasks.length; i++) {
            if(newTasks[i].id === taskId) {
                newTasks[i].completed = !newTasks[i].completed;
            }
        }

        this.setState({
            tasks: newTasks
        });
    },

    handleFilter: function(status) {
        if(status !== this.state.status) {
            this.setState({
                status: status
            });
        }
    },

    _updateLocalStorage: function() {
        var tasks = JSON.stringify(this.state.tasks);
        localStorage.setItem('tasks', tasks);
    },

    _getVisibleTasks: function(tasks, status) {
        if(status === 'new') {
            return tasks.filter(function(task) {
                return (task.completed === false);
            });
        } else if(status === 'completed') {
            return tasks.filter(function(task) {
                return (task.completed === true);
            });
        } else {
            return tasks;
        }
    },

    render: function() {
        return (
            <div className="todo-app">
                <h2 className="todo-app__header">TodoApp</h2>
                <TodoEditor onTaskAdd={this.handleTaskAdd} />
                <TodoList
                    tasks={this._getVisibleTasks(this.state.tasks, this.state.status)}
                    onTaskDelete={this.handleTaskDelete}
                    onTaskChange={this.handleTaskChange}
                />
                <TodoFilter
                    status={this.state.status}
                    onFilter={this.handleFilter}
                />
            </div>
        );
    }
});

var TodoEditor = React.createClass({
    getInitialState: function() {
        return {
            text: ''
        };
    },

    handleTextChange: function(event) {
        this.setState({
            text: event.target.value
        });
    },

    handleKeyPress: function(event) {
        if(event.key === 'Enter' && this.state.text.length) {
            var task = {
                text: this.state.text,
                completed: false,
                id: Date.now()
            };

            this.props.onTaskAdd(task);

            this.setState({
                text: ''
            });
        }
    },

    render: function() {
        return (
            <div className="todo-editor">
                <input
                    type="text"
                    className="todo-editor__input"
                    placeholder="What do you need to do?"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    onKeyPress={this.handleKeyPress}
                />
            </div>
        );
    }
});

ReactDOM.render(
    <TodoApp />,
    document.getElementById('content')
);