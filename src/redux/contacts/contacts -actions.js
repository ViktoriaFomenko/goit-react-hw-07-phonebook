import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const fetchContactsLoading = createAction('FETCH/CONTACTS/LOADING');
export const fetchContactsSuccess = createAction('FETCH/CONTACTS/SUCCESS');
export const fetchContactsError = createAction('FETCH/CONTACTS/ERROR');

export const add_contact = createAction('ADD_CONTACT', data => {
  return {
    payload: {
      ...data,
      id: nanoid(),
    },
  };
});
export const remove_contact = createAction('REMOVE_CONTACT');
