import {createSlice} from '@reduxjs/toolkit';

export const STATUS_REDUCER = 'statusReducer';

const initialState = {
  isLoading: false,
  lastStatus: {
    message: null,
    mood: null,
    emoji: null,
  },
};

const reducers = {
  setIsLoading: (state, {payload}) => {
    state.isLoading = payload;
  },
  setLastStatus: (state, {payload}) => {
    state.lastStatus = payload;
  },
};

const slice = createSlice({
  name: STATUS_REDUCER,
  initialState,
  reducers,
});

export const statusActions = {
  ...slice.actions,
};

export default slice.reducer;
