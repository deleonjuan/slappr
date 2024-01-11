import {createSlice} from '@reduxjs/toolkit';

export const APPLICATION_REDUCER = 'applicationReducer';

const initialState = {
  isLoading: false,
  screenIndex: 0,
};

const reducers = {
  setIsLoading: (state, {payload}) => {
    state.isLoading = payload;
  },
  setScreenIndex: (state, {payload}) => {
    state.screenIndex = payload;
  },
};

const slice = createSlice({
  name: APPLICATION_REDUCER,
  initialState,
  reducers,
});

export const applicationActions = {
  ...slice.actions,
};

export default slice.reducer;
