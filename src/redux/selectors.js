// src/redux/selectors.js

// Selector for retrieving contacts from the state
export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
// Selector for retrieving the current filter value
export const selectFilter = state => state.filter.status;
