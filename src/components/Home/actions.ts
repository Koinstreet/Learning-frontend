import { GET_ALL_COURSES, GET_ADMIN_COURSES, GET_ALL_COURSES_SUCCESS } from "./actionTypes";
import * as types from "./types";

export const getAllCoursesAction = (): types.getAllCoursesActionType => ({
  type: GET_ALL_COURSES,
});

export const getAdminCoursesAction = () => ({
  type: GET_ADMIN_COURSES,
});

export const getAllCoursesSuccessAction = (data): types.getAllCoursesSuccessActionType => ({
  type: GET_ALL_COURSES_SUCCESS,
  payload: data
})