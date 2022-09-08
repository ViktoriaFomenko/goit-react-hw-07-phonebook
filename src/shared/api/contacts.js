import axios from 'axios';

const instance = axios.create({
  BASE_URL: 'https://6319f7e96b4c78d91b492107.mockapi.io/API/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};
