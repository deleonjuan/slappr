import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  lastStatus: {
    message: null,
    mood: null
  }
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
  name: 'status',
  initialState,
  reducers,
});

export const statusActions = {
  ...slice.actions
};

export default slice.reducer;
