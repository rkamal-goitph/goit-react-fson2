// src/redux/actions.js
import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// Adds a new contact
export const addContact = createAction(
  'contacts/addContact',
  ({ name, number }) => ({
    payload: {
      id: nanoid(), // Generate a unique ID for each contact
      name,
      number,
    },
  })
);
// Deletes a contact by id
export const deleteContact = createAction('contacts/deleteContact');
// Sets the current filter
export const setFilter = createAction('filter/setFilter');
