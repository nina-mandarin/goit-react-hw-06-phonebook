import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import phonebookActions from '../../redux/phonebook.js/phonebookActions';

const Filter = ({ contacts, value, onChange }) => {
  if (contacts.length > 1 || value) {
    return (
      <Label>
        <LabelText>Find contacts by name</LabelText>
        <input type="text" name="filter" value={value} onChange={e => onChange(e.target.value)} />
      </Label>
    )
  }

  return null;

}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

Filter.defaultProps = {
  filter: ''
}

const Label = styled.label`
  display: block;
  margin-bottom: 16px;
`;

const LabelText = styled.span`
  display: block;
  margin-bottom: 8px;
`;

const mapStateToProps = state => {
  return {
    contacts: state.phonebook.contacts,
    value: state.phonebook.filter,
  };
};

const mapDispatchToprops = {
  onChange: phonebookActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToprops)(Filter);