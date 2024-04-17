import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './contactsSlice';

axios.defaults.baseURL = 'https://661f381416358961cd93cd73.mockapi.io/api';

export const fetchContacts = () => async dispatch => {
  try {
    // Load indicator
    dispatch(fetchingInProgress());
    // HTTP request
    const response = await axios.get('/contacts');
    // Data processing
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Error processing
    dispatch(fetchingError(e.message));
  }
};
