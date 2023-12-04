import {PayloadAction, createSlice, current} from '@reduxjs/toolkit';
import {Redux} from '../types';
import {CommentForumState, CommentForumType} from '../types/comment.forum.type';
import {PayloadHttpListCommentData} from '../types/comment.chapter.type';

const initialState: CommentForumState = {};

const reducer = createSlice({
  name: Redux.commentChapter,
  initialState: initialState,
  reducers: {
    postCommentForum: (state: CommentForumState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    posCommentForumSucces: (
      state: CommentForumState,
      action: PayloadAction<CommentForumType>,
    ) => {
      return {
        ...state,
        listComment: {
          canNext: state.listComment?.canNext,
          currentPage: state.listComment?.currentPage,
          data: [action.payload, ...(state.listComment?.data || [])],
        },
      };
    },

    postRepCommentForum: (state: CommentForumState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    postRepCommentForumSucces: (
      state: CommentForumState,
      action: PayloadAction<CommentForumType>,
    ) => {
      const uuid = action.payload.parents_comment_uuid;
      if (state.listComment && state.listComment.data) {
        const updatedListComment = {
          ...state.listComment,
          data: state.listComment.data.map(comment => {
            if (comment.uuid === uuid) {
              // Tìm thấy comment cần cập nhật
              const updatedRepCount = comment.re_comment_count + 1;

              return {
                ...comment,
                re_comment_count: updatedRepCount,
              };
            }
            return comment;
          }),
        };

        return {
          ...state,
          listRepComment: {
            canNext: state.listRepComment?.canNext,
            currentPage: state.listRepComment?.currentPage,
            totalData: (state.listRepComment?.totalData || 0) + 1,
            data: [action.payload, ...(state.listRepComment?.data || [])],
          },
        };
      }
    },

    postLikeCommentForum: (state: CommentForumState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    postUnlikeCommentForum: (
      state: CommentForumState,
      _: PayloadAction<any>,
    ) => {
      return {
        ...state,
      };
    },

    getCommentForum: (state: CommentForumState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    setCommentForum: (
      state: CommentForumState,
      action: PayloadAction<PayloadHttpListCommentData<CommentForumType>>,
    ) => {
      const currentData: CommentForumType[] = state.listComment?.data || [];
      const newData = action.payload.data || [];
      const uniqueNewData = newData.filter(
        newItem => !currentData.some(oldItem => oldItem.uuid === newItem.uuid),
      );
      const updatedData = [...currentData, ...uniqueNewData];
      return {
        ...state,
        listComment: {
          data: updatedData,
          canNext: action.payload.canNext,
          currentDataSize: action.payload.currentDataSize,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
          totalData: action.payload.totalData,
        },
      };
    },

    clearCommentForum: (state: CommentForumState) => {
      return {
        ...state,
        listComment: {},
      };
    },

    getRepCommentForum: (state: CommentForumState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    setRepCommentForum: (
      state: CommentForumState,
      action: PayloadAction<PayloadHttpListCommentData<CommentForumType>>,
    ) => {
      const currentData: CommentForumType[] = state.listRepComment?.data || [];
      const newData = action.payload.data || [];
      const uniqueNewData = newData.filter(
        newItem => !currentData.some(oldItem => oldItem.uuid === newItem.uuid),
      );
      const updatedData = [...currentData, ...uniqueNewData];
      return {
        ...state,
        listRepComment: {
          data: updatedData,
          canNext: action.payload.canNext,
          currentDataSize: action.payload.currentDataSize,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
          totalData: action.payload.totalData,
        },
      };
    },
    clearRepCommentForum: (state: CommentForumState) => {
      return {
        ...state,
        listRepComment: {
          data: [],
        },
      };
    },

    handleLikeAndUnlikeSuccess: (
      state: CommentForumState,
      action: PayloadAction<string>, // UUID của comment
    ) => {
      const commentUUID = action.payload;

      // Kiểm tra listComment có tồn tại và không rỗng
      if (state.listComment && state.listComment.data) {
        const updatedListComment = {
          ...state.listComment,
          data: state.listComment.data.map(comment => {
            if (comment.uuid === commentUUID) {
              // Tìm thấy comment cần cập nhật
              const updatedIsLike = !comment.is_like;
              const updatedLikeCount = updatedIsLike
                ? comment.like_count + 1
                : comment.like_count - 1;

              return {
                ...comment,
                is_like: updatedIsLike,
                like_count: updatedLikeCount,
              };
            }
            return comment;
          }),
        };

        return {
          ...state,
          listComment: updatedListComment,
        };
      }

      return state; // Trả về state không thay đổi nếu không có listComment hoặc listComment.data
    },

    handleLikeAndUnlikeRepSuccess: (
      state: CommentForumState,
      action: PayloadAction<string>, // UUID của comment
    ) => {
      const commentUUID = action.payload;

      // Kiểm tra listComment có tồn tại và không rỗng
      if (state.listRepComment && state.listRepComment.data) {
        const updatedlistRepComment = {
          ...state.listRepComment,
          data: state.listRepComment.data.map(comment => {
            if (comment.uuid === commentUUID) {
              // Tìm thấy comment cần cập nhật
              const updatedIsLike = !comment.is_like;
              const updatedLikeCount = updatedIsLike
                ? comment.like_count + 1
                : comment.like_count - 1;

              return {
                ...comment,
                is_like: updatedIsLike,
                like_count: updatedLikeCount,
              };
            }
            return comment;
          }),
        };

        return {
          ...state,
          listRepComment: updatedlistRepComment,
        };
      }

      return state; // Trả về state không thay đổi nếu không có listComment hoặc listComment.data
    },
  },
});

export const CommentForumReducer = reducer.reducer;
export const CommentForumAction = reducer.actions;