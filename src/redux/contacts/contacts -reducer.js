import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts -actions';

const initialStore = {
  items: [],
  loading: false,
  error: null,
};

const contactsReducer = createReducer(initialStore, {
  [actions.fetchContactsLoading]: store => {
    store.loading = true;
    store.error = null;
  },
  [actions.fetchContactsSuccess]: (store, { payload }) => {
    store.items = payload;
    store.loading = false;
  },
  [actions.fetchContactsError]: (store, { payload }) => {
    store.loading = false;
    store.error = payload;
  },

  [actions.addContactLoading]: store => {
    store.loading = true;
    store.error = null;
  },
  [actions.addContactSuccess]: (store, { payload }) => {
    store.items.push(payload);
    store.loading = false;
  },
  [actions.addContactError]: (store, { payload }) => {
    store.loading = false;
    store.error = payload;
  },
  [actions.removeContactLoading]: store => {
    store.loading = true;
    store.error = null;
  },
  [actions.removeContactSuccess]: (store, { payload }) => {
    store.items = store.items.filter(({ id }) => id !== payload);
    store.loading = false;
  },
  [actions.removeContactError]: (store, { payload }) => {
    store.loading = false;
    store.error = payload;
  },
});

export default contactsReducer;
