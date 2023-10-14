import { contactsReducer } from './contactsSlice';
import filterSlice from './filterSlice';

export const reducer = {
  contacts: contactsReducer,
  filter: filterSlice,
};
