import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `https://661fbcb516358961cd955014.mockapi.io/api/`;

// Async thunks
export const fetchItems = createAsyncThunk(
  'inventory/fetchItems',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/inventory');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addItem = createAsyncThunk(
  'inventory/addItem',
  async (itemData, thunkAPI) => {
    try {
      const response = await axios.post('/inventory', itemData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteItem = createAsyncThunk(
  'inventory/deleteItem',
  async (itemId, thunkAPI) => {
    try {
      await axios.delete(`/inventory/${itemId}`);
      return itemId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
