import { getContacts } from 'shared/api/contacts';
import {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts -actions';

export const fetchContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(fetchContactsLoading());
      const data = await getContacts();
      fetchContactsSuccess(data);
    } catch (error) {
      fetchContactsError(error.message);
    }
  };
  return func;
};
