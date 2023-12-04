import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {UserService} from '../services';
import {UserAction} from '../reducer/user.reducer';
import {LoadingActions} from '../reducer';

function* postFollowSaga(action: PayloadAction<string>): Generator {
  try {
    console.log('run===========>');
    const {data}: any = yield call(UserService.postFollow, action.payload);
    if (data.code == 200) {
      console.log(data);
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log('hihi');
  } finally {
  }
}

function* getAllUserSaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run===========>');
    const {data}: any = yield call(UserService.getAllUser);
    if (data.code == 200) {
      yield put(UserAction.setListUser(data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* getUserByIdSaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run===========>');
    const {data}: any = yield call(UserService.getUserById, action.payload);
    if (data.code == 200) {
      yield put(UserAction.setUserById(data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* getPostByUserSaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoadingTopic());
  try {
    console.log('run===========>');
    const {data}: any = yield call(
      UserService.getListPostByUser,
      action.payload,
    );
    if (data.code == 200) {
      yield put(UserAction.setListPostByUser(data.data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoadingTopic());
  }
}

export default function* watchUserSaga() {
  yield takeLatest(UserAction.postFollow.type, postFollowSaga);
  yield takeLatest(UserAction.getListUser.type, getAllUserSaga);
  yield takeLatest(UserAction.getUserById.type, getUserByIdSaga);
  yield takeLatest(UserAction.getListPostByUser.type, getPostByUserSaga);
}