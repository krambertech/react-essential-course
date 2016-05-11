import React from 'react';
import { Link } from 'react-router';

import Paper from 'material-ui/lib/paper';

import './AboutPage.less';

const AboutPage = React.createClass({
    render() {
        return (
            <div className='AboutPage'>
                <Paper
                    zDepth={1}
                    className='AboutPage__content'
                >
                    <h2> Almost Google Tasks </h2>
                    <p>This application is written based on <a href='https://developers.google.com/google-apps/tasks/'>
                    Google Tasks API</a> using Material Design concepts.</p>
                    <p>It is a final result of ReactJS Essential Course.</p>
                </Paper>
            </div>
        );
    }
});

export default AboutPage;
