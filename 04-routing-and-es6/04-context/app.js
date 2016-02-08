import React from 'react';
import ReactDOM from 'react-dom';

const Button = React.createClass({
	contextTypes: {
		color: React.PropTypes.string
	},

	render() {
		return (
			<button style={{background: this.context.color}}>
				{this.props.children}
			</button>
		);
	}
});

const Message = React.createClass({
	render() {
		return (
			<div style={{border: '1px solid grey', margin: 10, padding: 10}}>
				<p>{this.props.text}</p>
				<Button>Delete</Button>
			</div>
		);
	}
});

const MessageList = React.createClass({
	render() {
		const children = this.props.messages.map(message =>
			<Message key={message} text={message} />
		);

		return <div>{children}</div>;
	}
});

const App = React.createClass({
    childContextTypes: {
        color: React.PropTypes.string
    },

    getChildContext() {
        return {
            color: 'lightblue'
        };
    },

	render() {
		const messages = [
			'Fusce ac felis sit amet',
			'Vivamus aliquet elit ac nisl',
			'In hac habitasse platea dictumst',
			'Vestibulum ante ipsum primis in',
            'Sed cursus turpis vitae tortor',
            'Aenean commodo ligula eget dolor'
		];

		return <MessageList messages={messages} />;
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('mount-point')
);
