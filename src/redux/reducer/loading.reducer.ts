import {createSlice} from '@reduxjs/toolkit';
import {Redux} from '../types/redux.type';
import {LoadingState} from '../types';

const initialState: LoadingState = {
  isLoading: false,
  isLoadingMain: false,
  isLoadingPage: false,
  isLoadingTopic: false,
};

const reducer = createSlice({
  name: Redux.loading,
  initialState,
  reducers: {
    showLoading: (state: LoadingState) => {
      state.isLoading = true;
    },
    hideLoading: (state: LoadingState) => {
      state.isLoading = false;
    },

    showLoadingPage: (state: LoadingState) => {
      state.isLoadingPage = true;
    },
    hideLoadingPage: (state: LoadingState) => {
      state.isLoadingPage = false;
    },
    showLoadingMain: (state: LoadingState) => {
      state.isLoadingMain = true;
    },
    hideLoadingMain: (state: LoadingState) => {
      state.isLoadingMain = false;
    },

    showLoadingTopic: (state: LoadingState) => {
      state.isLoadingTopic = true;
    },
    hideLoadingTopic: (state: LoadingState) => {
      state.isLoadingTopic = false;
    },
  },
});

export const LoadingReducer = reducer.reducer;
export const LoadingActions = reducer.actions;
