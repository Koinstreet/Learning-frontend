import {
  CREATE_COURSE,
  CREATE_COURSE_FINISHED,
  DELETE_COURSE,
  DELETE_COURSE_SUCCESS,
  DELETE_COURSE_FAILED,
  EDIT_COURSE,
  EDIT_COURSE_SUCCESS,
  EDIT_COURSE_FAILED,
  CREATE_COURSE_MODULE,
  CREATE_COURSE_MODULE_SUCCESS,
  CREATE_COURSE_MODULE_FAILED,
  DELETE_COURSE_MODULE,
  DELETE_COURSE_MODULE_SUCCESS,
  DELETE_COURSE_MODULE_FAILED,
  EDIT_COURSE_MODULE,
  EDIT_COURSE_MODULE_SUCCESS,
  EDIT_COURSE_MODULE_FAILED,
} from "./actionTypes";

export const createCourseAction = (data, success) => ({
  type: CREATE_COURSE,
  data,
  success,
});

export const createCourseFinishedAction = (data, err) => ({
  type: CREATE_COURSE_FINISHED,
  payload: {
    data,
    err,
  },
});

export const deleteCourseAction = (id, resolve, reject) => ({
  type: DELETE_COURSE,
  id,
  resolve,
  reject,
});

export const deleteCourseSuccess = (id) => ({
  type: DELETE_COURSE_SUCCESS,
  payload: { id },
});

export const deleteCourseFail = () => ({
  type: DELETE_COURSE_FAILED,
});

export const editCourseAction = (id, data, success, error) => ({
  type: EDIT_COURSE,
  id,
  data,
  success,
  error,
});

export const editCourseSuccess = (id) => ({
  type: EDIT_COURSE_SUCCESS,
  payload: { id },
});

export const editCourseFailed = () => ({ type: EDIT_COURSE_FAILED });

export const createModuleAction = (id, data, success, error) => ({
  type: CREATE_COURSE_MODULE,
  id,
  data,
  success,
  error,
});

export const createModuleSuccess = (data) => ({
  type: CREATE_COURSE_MODULE_SUCCESS,
  payload: { data },
});

export const createModuleFailed = () => ({
  type: CREATE_COURSE_MODULE_FAILED,
});

export const deleteModuleAction = (moduleId, courseId, resolve, reject) => ({
  type: DELETE_COURSE_MODULE,
  moduleId,
  courseId,
  resolve,
  reject,
});

export const deleteModuleSuccess = (id) => ({
  type: DELETE_COURSE_MODULE_SUCCESS,
  payload: { id },
});

export const deleteModuleFailed = () => ({
  type: DELETE_COURSE_MODULE_FAILED,
});

export const editModuleAction = (moduleId, courseId, data, success, error) => ({
  type: EDIT_COURSE_MODULE,
  moduleId,
  courseId,
  data,
  success,
  error,
});

export const editModuleSuccess = (data) => ({
  type: EDIT_COURSE_MODULE_SUCCESS,
  payload: { data },
});

export const editModuleFailed = () => ({
  type: EDIT_COURSE_MODULE_FAILED,
});
