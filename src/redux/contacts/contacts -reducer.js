import { createReducer } from '@reduxjs/toolkit';
import {
  add_contact,
  remove_contact,
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts -actions';

const initialStore = {
  items: [],
  loadind: false,
  error: null,
};

const contactsReducer = createReducer(initialStore, {
  [add_contact]: (store, { payload }) => [...store, payload],
  [remove_contact]: (store, { payload }) =>
    store.filter(({ id }) => id !== payload),
});

export default contactsReducer;
