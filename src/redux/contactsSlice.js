import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const initialContactsState = {
  contacts: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions
export const contactsReducer = contactsSlice.reducer;
