import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './slices/auth';
import statusReducer from './slices/status';
import applicationReducer, {APPLICATION_REDUCER} from './slices/application';
import {persistReducer} from 'redux-persist';

export const appReducer = combineReducers({
  authReducer,
  statusReducer,
  applicationReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blackList: [APPLICATION_REDUCER],
};

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const reducers = persistReducer(persistConfig, rootReducer);
export default reducers;
