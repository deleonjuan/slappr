import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer, {AUTH_REDUCER} from './slices/auth';
import statusReducer from './slices/status';
import applicationReducer from './slices/application';
import {persistReducer} from 'redux-persist';
import {beAPi} from './apis/beApi';

export const appReducer = combineReducers({
  authReducer,
  statusReducer,
  applicationReducer,
  [beAPi.reducerPath]: beAPi.reducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: [AUTH_REDUCER],
};

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const reducers = persistReducer(persistConfig, rootReducer);
export default reducers;
