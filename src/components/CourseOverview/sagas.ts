import { takeEvery, call, put } from "redux-saga/effects";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import {
  getCourseSuccessAction,
  startLoadingCourse,
  stopLoadingCourse,
  getViewedCoursesSuccess
} from "./actions";
import { getCourseData, getViewedCourses } from "./services";
import { CourseFetchType } from "./types";
import * as TYPES from "./actionTypes";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* getCourse(id) {
  try {
    yield put(showLoading());
    yield put(startLoadingCourse());
    const res = yield call(getCourseData, id);
    console.log(res)
    if(res.status === "success") {
      yield put(getCourseSuccessAction(res.data));
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(stopLoadingCourse());
    yield put(hideLoading());
  }
}

function* getViewedCourse() {
  try {
    yield put(showLoading());
    yield put(startLoadingCourse());
    const res = yield call(getViewedCourses);
    console.log(res)
    if(res.status === 200) {
      yield put(getViewedCoursesSuccess(res.data.data));
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(stopLoadingCourse());
    yield put(hideLoading());
  }
}

function* getCourseWatcher(data: CourseFetchType) {
  const { id } = data;
  yield call(getCourse, id);
}

function* getViewedCourseWatcher() {
  yield call(getViewedCourse)
}

export default function* actionWatcher() {
  yield takeEvery(TYPES.GET_COURSE, getCourseWatcher);
  yield takeEvery(TYPES.VIEWED_COURSES, getViewedCourseWatcher);
}
