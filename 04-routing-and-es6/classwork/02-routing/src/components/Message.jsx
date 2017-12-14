import React from 'react';
import messages from '../messages.json';
import './Message.less';

class Message extends React.Component {
    constructor(props) {
        super(props);

        const { messageId } = this.props.match.params;

        this.state = {
            message: messages.find(message => message.id === messageId)
        }
    }

    componentWillReceiveProps(nextProps) {
        const { messageId: prevId } = this.props.match.params;
        const { messageId: nextId } = nextProps.match.params;

        if (prevId !== nextId) {
            this.setState({
               message: messages.find(message => message.id === nextId)
            });
        }
    }

    render() {
        const { message } = this.state;

        return (
            <div className="Message">
                <p>From: {message.senderName} ({message.senderEmail})</p>
                <p>To: you</p>
                <p>Subject: {message.subject}</p>
                <hr/>
                <p>{message.body}</p>
            </div>
        );
    }
}

export default Message;