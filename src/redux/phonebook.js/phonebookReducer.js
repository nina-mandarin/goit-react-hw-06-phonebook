import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import phonebookActions from './phonebookActions';

// functions
const addContact = (state, action) => {
  if (state.find(contact => contact.name === action.payload.contact.name)) {
    alert(`${action.payload.contact.name} is already in contacts`);
    return state
  }

  localStorage.setItem('contacts', JSON.stringify([...state, action.payload.contact]));
  return [...state, action.payload.contact]
}

const deleteContact = (state, action) => {
  const newState = state.filter(({ id }) => id !== action.payload);
  localStorage.setItem('contacts', JSON.stringify(newState));
  return newState;
}

const changeFilter = (state, action) => {
  return action.payload
}

// reducers
const contacts = createReducer([], {
  [phonebookActions.addContact]: addContact,
  [phonebookActions.deleteContact]: deleteContact,
});

const filter = createReducer ('', {
  [phonebookActions.changeFilter]: changeFilter,
});


export default combineReducers({
  contacts,
  filter
});