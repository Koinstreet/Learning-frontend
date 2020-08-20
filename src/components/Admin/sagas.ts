import { takeEvery, call, put } from "redux-saga/effects";
import { message } from "antd";

import { createCourseFinishedAction, deleteCourseSuccess, deleteModuleSuccess, createModuleSuccess, editModuleSuccess } from "./actions";
import { createCourseService, deleteCourseService, editCourseService, createModuleService, deleteModuleService, editModuleService } from "./services";
import { actions } from '../CourseOverview';
import * as TYPES from "./actionTypes";

const { getCourseSuccessAction } = actions;


function* createCourse(data, success) {
  try {
    const formData = new FormData();
    Object.keys(data).map(el => {
      formData.append(el, data[el])
    })
    const res = yield call(createCourseService, formData)
    if(res.status === 201) {
      yield put(createCourseFinishedAction(res.data.course, null));
      success(res.data.course.id);
    }
  } catch (err) {
    yield put(createCourseFinishedAction(null, err));
    console.log(err.data);
  }
}

function* deleteCourse(id, resolve, reject) {
  try {
    // return setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
    const res = yield call(deleteCourseService, id);
    if(res.status === 200) {
      yield put(deleteCourseSuccess(id));
      message.success("Course deleted succesfully");
      return resolve();
    }

  } catch(err) {
    console.log(err)
    return reject();
  }
}

function* editCourse(id, data, success, error) {
  try {
    const formData = new FormData();
    Object.keys(data).map(el => {
      formData.append(el, data[el])
    })
    const res = yield call(editCourseService, id, formData);
    if(res.status === 200) {
      yield put(getCourseSuccessAction(res.data.course[1][0]));
      success();
    }
  } catch(err) {
    console.log(err);
    error();
    // return reject();
  }
}

function* createModule(id, data, success, error) {
  try {
    console.log("suss")
    const res = yield call(createModuleService, id, data);
    console.log(res)
    if(res.status === "success") {
      console.log("res")
      yield put(createModuleSuccess(res.data.module))
      success();
    }

  } catch(err) {
    console.log(err)
    error();
  }
}

function* deleteModule(moduleId, courseId, resolve, reject) {
  console.log(moduleId, courseId)
  try {
    const res = yield call(deleteModuleService, moduleId, courseId);
    console.log(res)
    if(res.status === 200) {
      yield put(deleteModuleSuccess(moduleId))
      message.success("Module deleted succesfully");
      return resolve();
    }

  } catch(err) {
    console.log(err)
    message.success("Something went wrong");
    return reject();
  }
}

function* editModule(moduleId, courseId, data, success, error) {
  console.log(moduleId, courseId, data)
  try {
    const res = yield call(editModuleService, moduleId, courseId, data);
    if(res.status === "success") {
      console.log(res.data.module[1][0])
      yield put(editModuleSuccess(res.data.module[1][0]))
      success();
    }

  } catch(err) {
    console.log(err)
    error();
  }
}

function* createCourseWatcher(payload) {
  const { data, success } = payload;
  yield call(createCourse, data, success);
}

function* deleteCourseWatcher(payload) {
  const { id, resolve, reject } = payload;
  yield call(deleteCourse, id, resolve, reject);
}

function* editCourseWatcher(payload) {
  const { id, data, success, error } = payload;
  yield call(editCourse, id, data, success, error);
}

function* createModuleWatcher(payload) {
  const { id, data, success, error } = payload;
  yield call(createModule, id, data, success, error);
}

function* deleteModuleWatcher(payload) {
  const { moduleId, courseId, resolve, reject } = payload;
  yield call(deleteModule, moduleId, courseId, resolve, reject);
}

function* editModuleWatcher(payload) {
  const { moduleId, courseId, data, success, error } = payload;
  yield call(editModule, moduleId, courseId, data, success, error);
}

export default function* actionWatcher() {
  yield takeEvery(TYPES.CREATE_COURSE, createCourseWatcher);
  yield takeEvery(TYPES.DELETE_COURSE, deleteCourseWatcher);
  yield takeEvery(TYPES.EDIT_COURSE, editCourseWatcher);
  yield takeEvery(TYPES.CREATE_COURSE_MODULE, createModuleWatcher);
  yield takeEvery(TYPES.DELETE_COURSE_MODULE, deleteModuleWatcher);
  yield takeEvery(TYPES.EDIT_COURSE_MODULE, editModuleWatcher)
}
