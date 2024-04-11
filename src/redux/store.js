// store.js
// import { createStore, combineReducers } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReducer } from '../redux/reducers';
import { filterReducer } from '../redux/reducers';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  // The devTools enhancer are automatically included by default, so you don't need to specify them.
});
