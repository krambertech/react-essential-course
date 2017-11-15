import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import messages from '../messages.json';
import MessagePreview from './MessagePreview.jsx';
import Message from './Message.jsx';
import './InboxPage.less';

class InboxPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            messages,
            selectedMessageId: null
        };
    }

    handlePreviewClick(messageId) {
        this.context.router.history.push(`/inbox/messages/${messageId}`);

        this.setState({
            selectedMessageId: messageId
        });
    }

    render() {
        const { messages, selectedMessageId } = this.state;

        return (
            <div className="InboxPage">
                <div className="messages">
                    {
                        messages.map(message =>
                            <MessagePreview
                                key={message.id}
                                title={message.subject}
                                senderName={message.senderName}
                                selected={message.id === selectedMessageId}
                                onClick={this.handlePreviewClick.bind(this, message.id)}
                            />
                        )
                    }
                </div>
                <div className="message-container">
                    <Route path='/inbox/messages/:messageId' component={Message} />
                </div>
            </div>
        );
    }
}

InboxPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default InboxPage;