import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {
  Redux,
  ComicState,
  ComicType,
  PayloadHttpListComics,
  ComicDetailType,
  PayloadHttpListChapter,
  ChapterType,
  DetailChapterType,
} from '../types';
import {PayloadHttpList} from '../../types';

const initialState: ComicState = {};
const reducer = createSlice({
  name: Redux.comic,
  initialState: initialState,
  reducers: {
    //comic
    clearListData: (state: ComicState) => {
      return {
        ...state,
        listData: {
          data: undefined,
        },
      };
    },

    getListData: (state: ComicState, _: PayloadAction<number>) => {
      return {
        ...state,
      };
    },
    setListData: (
      state: ComicState,
      action: PayloadAction<PayloadHttpListComics<ComicType>>,
    ) => {
      return {
        ...state,
        listData: {
          data: action.payload.data,
        },
      };
    },

    //get comic detail
    getDetailComic: (state: ComicState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },
    setDetailComic: (
      state: ComicState,
      action: PayloadAction<PayloadHttpList<ComicDetailType>>,
    ) => {
      return {
        ...state,
        detailData: {
          data: action.payload.data,
        },
      };
    },

    getListByTopic: (state: ComicState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },
    setListByTopic: (
      state: ComicState,
      action: PayloadAction<PayloadHttpList<ComicType>>,
    ) => {
      return {
        ...state,
        listDataByTopic: {
          data: action.payload.data,
        },
      };
    },
    clearListDataByComic: (state: ComicState) => {
      return {
        ...state,
        listDataByTopic: {
          data: [],
        },
      };
    },

    getListChapter: (state: ComicState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },
    setListChapter: (
      state: ComicState,
      action: PayloadAction<PayloadHttpListChapter<ChapterType>>,
    ) => {
      return {
        ...state,
        listChapter: {
          chapter: action.payload.chapter,
        },
      };
    },

    getListChapterDetail: (state: ComicState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },
    setListChapterDetail: (
      state: ComicState,
      action: PayloadAction<PayloadHttpList<DetailChapterType>>,
    ) => {
      return {
        ...state,
        listDetailChapter: {
          data: action.payload.data,
        },
      };
    },
  },
});

export const ComicReducer = reducer.reducer;
export const ComicActions = reducer.actions;
