import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
import contactsReducer from './contacts/contacts -reducer';
import filterReducer from './filter/filter -reducer';
// import storage from 'redux-persist/lib/storage';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };
// const persistedContactsReducer = persistReducer(
//   contactsPersistConfig,
//   rootReducer
// );

// export const store = configureStore({
//   reducer: persistedContactsReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistore = persistStore(store);
