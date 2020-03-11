import { uuid } from 'uuidv4';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/add', (name, number) => {
  return {
    type: 'phonebook/add',
    payload: {
      contact: {
        id: uuid(),
        name,
        number
      }
    }
  }
});

const deleteContact = createAction('phonebook/delete');

const changeFilter = createAction('phonebook/filter');


export default {
  addContact,
  deleteContact,
  changeFilter
};