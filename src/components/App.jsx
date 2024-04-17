import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { setFilter } from '../redux/filterSlice';
import { addContact, deleteContact } from '../redux/operations';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from '../redux/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  console.log('contacts', contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    // Placeholder for future Redux action
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    // Placeholder for future Redux action
    dispatch(deleteContact(id));
  };

  const handleSetFilter = newFilter => {
    // Placeholder for future Redux dispatch to update filter
    dispatch(setFilter(newFilter));
  };

  // Calculate filtered contacts directly within the App component
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={handleSetFilter} />
      {isLoading && (
        <b style={{ display: 'block', padding: '0 0 20px 10px' }}>Loading...</b>
      )}
      {error && <b>Error: {error}</b>}
      {contacts && (
        <ContactList
          contacts={filteredContacts}
          deleteContact={handleDeleteContact}
        />
      )}
    </div>
  );
};
