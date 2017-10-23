var React = require('react');

require('./Contact.css');

var Contact = React.createClass({

    getInitialState: function() {
        return {
            isOpened: false
        };
    },

    handleClick: function() {
        this.setState({
            isOpened: !this.state.isOpened
        });
    },

    render: function() {
        var visibilityClass = (this.state.isOpened) ? '' : 'hidden';

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
});

module.exports = Contact;