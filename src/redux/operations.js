import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65283a8c931d71583df210de.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (text, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts/', text);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
