import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import ContactListItem from '../ContactListItem';
import phonebookActions from '../../redux/phonebook.js/phonebookActions';

const ContactList = ({ contacts, onDeleteItem }) => {
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  })).isRequired,
  onDeleteItem: PropTypes.func.isRequired
};

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