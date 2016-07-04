import React from 'react';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import ListIcon from 'material-ui/lib/svg-icons/action/view-list';
import HomeIcon from 'material-ui/lib/svg-icons/action/home';
import ExitIcon from 'material-ui/lib/svg-icons/action/exit-to-app';
import FolderIcon from 'material-ui/lib/svg-icons/file/folder';
import AddIcon from 'material-ui/lib/svg-icons/content/add';
import Colors from 'material-ui/lib/styles/colors';

import './TasklistsPage.less';

const TasklistsPage = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    render() {
        const { router } = this.context;

        return (
            <div className='TasklistsPage'>
                <div className='TasklistsPage__menu'>
                    <List className='TasklistsPage__list'>
                        <h3 className='TasklistsPage__title'>
                            Almost Google Tasks
                        </h3>
                        <Divider />
                        <List className='TasklistsPage__list'>
                            <ListItem
                                leftIcon={<HomeIcon />}
                                primaryText="Home"
                                onClick={router.push.bind(null, `/lists`)}
                            />
                            <ListItem
                                leftIcon={<ListIcon />}
                                primaryText="About"
                                onClick={router.push.bind(null, `/about`)}
                            />
                        </List>
                        <Divider />
                        <List className='TasklistsPage__list' subheader="Task Lists">
                            {
                                this.props.taskLists.map(list =>
                                    <ListItem
                                        key={list.id}
                                        leftIcon={<FolderIcon />}
                                        style={
                                            this.props.selectedListId === list.id
                                            ?
                                                { backgroundColor: 'rgba(0,0,0,0.1)' }
                                            :
                                                null
                                        }
                                        primaryText={list.name}
                                        onClick={router.push.bind(null, `/lists/${list.id}`)}
                                    />
                                )
                            }
                            <ListItem
                                leftIcon={<AddIcon />}
                                primaryText="Create new list"
                                onClick={this.props.onAddTaskList}
                            />
                        </List>
                        <Divider />
                        <List className='TasklistsPage__list'>
                            <ListItem
                                leftIcon={<ExitIcon />}
                                primaryText="Log out"
                                onClick={this.props.onLogOut}
                            />
                        </List>
                    </List>
                </div>
                <div className='TasklistsPage__tasks'>
                    {this.props.page}
                </div>
            </div>
        );
    }
});

export default TasklistsPage;
