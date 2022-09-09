import { createAction } from '@reduxjs/toolkit';

const fetchContactsLoading = createAction('CONTACTS/FETCH/LOADING');
const fetchContactsSuccess = createAction('CONTACTS/FETCH/SUCCESS');
const fetchContactsError = createAction('CONTACTS/FETCH/ERROR');

const addContactLoading = createAction('CONTACTS/ADD/LOADING');
const addContactSuccess = createAction('CONTACTS/ADD/SUCCESS');
const addContactError = createAction('CONTACTS/ADD/ERROR');

const removeContactLoading = createAction('CONTACTS/REMOVE/LOADING');
const removeContactSuccess = createAction('CONTACTS/REMOVE/SUCCESS');
const removeContactError = createAction('CONTACTS/REMOVE/ERROR');

const actions = {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  addContactLoading,
  addContactSuccess,
  addContactError,
  removeContactLoading,
  removeContactSuccess,
  removeContactError,
};

export default actions;
