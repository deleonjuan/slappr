import {createSlice} from '@reduxjs/toolkit';

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
    state.loader = payload;
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
  name: 'auth',
  initialState,
  reducers,
});

export const {setIsLoading, setUserInfo, updateUserInfo, setToken, cleanData} = slice.actions;
// -----------------------------------
// Actions
// -----------------------------------

const onLogin = data => dispatch => {
  dispatch(setUserInfo(data));
  dispatch(setToken(data.token));
};

const onLogout = data => dispatch => {
  dispatch(setUserInfo({}));
  dispatch(setToken(null));
}

export const actions = {
  onLogin,
  onLogout
};

export default slice.reducer;
