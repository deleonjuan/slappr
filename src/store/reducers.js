import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './slices/auth';
import {persistReducer} from 'redux-persist';

export const appReducer = combineReducers({
  authReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  whitelist: ['auth'],
  storage: AsyncStorage,
};

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const reducers = persistReducer(persistConfig, rootReducer);
export default reducers;
