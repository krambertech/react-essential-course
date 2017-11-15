import React from 'react';
import classNames from 'classnames';
import './MessagePreview.less';

class MessagePreview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, senderName, selected, onClick } = this.props;

        const classes = classNames("MessagePreview", { selected });

        return (
            <div className={classes} onClick={onClick}>
                <div className="title">{title}</div>
                <div className="from">{`from ${senderName}`}</div>
            </div>
        );
    }
}

export default MessagePreview;