import { takeEvery, call, put } from "redux-saga/effects";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { getCourseModuleSuccessAction, startLoadingModule, stopLoadingModule, getModulesSuccess, getModulesFailed } from "./actions";
import {actions} from '../CourseOverview';
import { getModuleData, getModulesService } from "./services";
// import { CourseFetchType } from "./types";
import * as TYPES from "./actionTypes";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* getModule(courseId, moduleId) {
  try {
    yield put(showLoading());
    yield put(startLoadingModule());
    const res = yield call(getModuleData, courseId, moduleId);
    console.log(res, "here")
    if (res.status === 'success') {
      yield put(getCourseModuleSuccessAction(res.data));
    }
    // yield put(actions.courseViewdSuccessAction(moduleId));
  } catch (err) {
    console.log(err);
  } finally {
    yield put(hideLoading());
    yield put(stopLoadingModule());
  }
}

function* getModules(courseId) {
  yield put(startLoadingModule());
  yield put(showLoading());
  try {
    console.log(courseId)
    const res = yield call(getModulesService, courseId);
    if(res.status === "success") {
      console.log(courseId)
      console.log(res.data)
      yield put(getModulesSuccess(res.data))
      yield put(stopLoadingModule());
      yield put(hideLoading());
    }

  } catch(err) {
    console.log(err)
    yield put(getModulesFailed())
    yield put(stopLoadingModule());
      yield put(hideLoading());
  }
}



function* getModuleWatcher(data) {
    const { courseId, moduleId } = data;
    yield call(getModule, courseId, moduleId);
}

function* getModulesWatcher(data) {
  const { id } = data;
    yield call(getModules, id);
}

export default function* actionWatcher() {
  yield takeEvery(TYPES.GET_COURSE_MODULE, getModuleWatcher);
  yield takeEvery(TYPES.GET_MODULES, getModulesWatcher)
}
