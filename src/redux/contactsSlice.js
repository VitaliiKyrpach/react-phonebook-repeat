import { createSlice } from '@reduxjs/toolkit';
import { deleteContacts, fetchContacts, addContacts } from './operations';
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(addContacts.pending, handlePending);
    builder.addCase(deleteContacts.pending, handlePending);
    builder.addCase(fetchContacts.rejected, handleRejected);
    builder.addCase(addContacts.rejected, handleRejected);
    builder.addCase(deleteContacts.rejected, handleRejected);
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(addContacts.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.items.push(action.payload);
    });
    builder.addCase(deleteContacts.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
