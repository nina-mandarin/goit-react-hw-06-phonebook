import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import ContactListItem from '../ContactListItem';
import phonebookActions from '../../redux/phonebook/phonebookActions';

class ContactList extends Component {

  componentDidUpdate(prevProp, prevState) {
    const prevContacts = prevProp.contacts;
    const currentContacts = this.props.contacts;

    if (prevContacts !== currentContacts) {
      localStorage.setItem('contacts', JSON.stringify(currentContacts));
    }
  };

  render() {
    const { contacts, onDeleteItem } = this.props;

    if (contacts.length < 1) {
      return null;
    }

    return (
      <List>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              onDelete={() => onDeleteItem(id)}
            />
          );
        })}
      </List>
    )
  }
}

const List = styled.ul`
  padding: 0 0 0 10px;
  margin: 0;
  list-style-position: inside;
`;

const mapStateToProps = state => {
  const { contacts, filter } = state.phonebook;
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToprops = {
  onDeleteItem: phonebookActions.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToprops)(ContactList);