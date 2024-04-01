import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import reducers from './reducers';
import {beAPi} from './apis/beApi';

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(beAPi.middleware),
});

export const persistor = persistStore(store);
export default store;
