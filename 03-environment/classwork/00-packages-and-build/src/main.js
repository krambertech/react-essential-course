var ReactDOM = require('react-dom');
var React = require('react');
var NotesApp = require('./components/NotesApp.jsx');

ReactDOM.render(
    <NotesApp />,
    document.getElementById('mount-point')
);