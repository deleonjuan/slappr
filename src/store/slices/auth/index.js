import {createSlice} from '@reduxjs/toolkit';

export const AUTH_REDUCER = 'authReducer';

const initialState = {
  isLoading: false,
  token: null,
  userInfo: {
    photo: null,
    username: null,
  },
};

const reducers = {
  setIsLoading: (state, {payload}) => {
    state.isLoading = payload;
  },
  setUserInfo: (state, {payload}) => {
    state.userInfo = payload;
  },
  updateUserInfo: (state, {payload}) => {
    state.userInfo = {...state.userInfo, ...payload};
  },
  setToken: (state, {payload}) => {
    state.token = payload;
  },
};

const slice = createSlice({
  name: AUTH_REDUCER,
  initialState,
  reducers,
});

// -----------------------------------
// Actions
// -----------------------------------

const onLogin = data => dispatch => {
  dispatch(slice.actions.setUserInfo(data));
  dispatch(slice.actions.setToken(data.token));
};

const onLogout = data => dispatch => {
  dispatch(slice.actions.setUserInfo({}));
  dispatch(slice.actions.setToken(null));
};

export const authActions = {
  onLogin,
  onLogout,
  ...slice.actions,
};

export default slice.reducer;
