import { call, put, takeEvery } from "redux-saga/effects";
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { getAllCoursesSuccessAction } from "./actions";
import { getCoursesService, getAdminCourseService } from './services';
import * as TYPES from "./actionTypes";

function* getAllCourses() {
  yield put(showLoading())
    try {
      const res = yield call(getCoursesService);
      if(res.status === 200) {
        console.log(res.data.data)
        yield put(getAllCoursesSuccessAction(res.data.data.courses));
      }
    } catch(err) {
      console.log(err)
    } finally {
      yield put(hideLoading());
    }
}

function* getAdminCourses() {
  yield put(showLoading())
    try {
      const res = yield call(getAdminCourseService);
      if(res.status === 200) {
        console.log(res.data.data)
        yield put(getAllCoursesSuccessAction(res.data.data.courses));
      }
    } catch(err) {
      console.log(err)
    } finally {
      yield put(hideLoading());
    }
}

function* getAllCoursesWatcher() {
  yield call(getAllCourses);
}

function* getAdminCoursesWatcher() {
  yield call(getAdminCourses);
}

export default function* actionWatcher() {
  yield takeEvery(TYPES.GET_ALL_COURSES, getAllCoursesWatcher);
  yield takeEvery(TYPES.GET_ADMIN_COURSES, getAdminCoursesWatcher);
}
