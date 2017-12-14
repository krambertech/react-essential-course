import React from 'react';

import './Contact.less';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isOpened: !this.state.isOpened
        });
    }

    render() {
        let visibilityClass = (this.state.isOpened) ? '' : 'hidden';

        return (
            <li className="contact" onClick={this.handleClick}>
                <img className="contact-image" src={this.props.image} width="60" height="60" alt={this.props.name} />
                <div className="contact-info">
                    <div className="contact-name">{this.props.name}</div>
                    <div className="contact-number">{this.props.phoneNumber}</div>
                    <div className={`contact-email ${visibilityClass}`}>{this.props.email}</div>
                    <div className={`contact-address ${visibilityClass}`}>{this.props.address}</div>
                </div>
            </li>
        );
    }
}

export default Contact;