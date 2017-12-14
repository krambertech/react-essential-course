import React from 'react';
import Contact from './Contact.jsx';
import CONTACTS from './CONTACTS.js';

import './ContactsList.less';

class ContactsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedContacts: CONTACTS
        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event) {
        let searchQuery = event.target.value.toLowerCase();
        let currentDisplayedContacts = CONTACTS.filter((el) => {
            let searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedContacts: currentDisplayedContacts
        });
    }

    render() {
        return (
            <div className="contacts">
                <input type="text" className="search-field" onChange={this.handleSearch} />
                <ul className="contacts-list">
                    {
                        this.state.displayedContacts.map((el) => {
                            return <Contact
                                key={el.id}
                                name={el.name}
                                phoneNumber={el.phoneNumber}
                                image={el.image}
                                email={el.email}
                                address={el.address}
                            />;
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ContactsList;