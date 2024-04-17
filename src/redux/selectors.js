// src/redux/selectors.js

// Selector for retrieving contacts from the state
export const getContacts = state => state.contacts.contacts;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
// Selector for retrieving the current filter value
export const getFilter = state => state.filter;
