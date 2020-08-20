import {
  START_LOADING_COURSE,
  STOP_LOADING_COURSE,
  GET_COURSE,
  GET_COURSE_SUCCESS,
  COURSE_VIEWED,
  COURSE_VIEWED_SUCCESS,
  VIEWED_COURSES,
  VIEWED_COURSES_SUCCESS,
} from "./actionTypes";
import * as TYPES from "./types";

export const startLoadingCourse = (): TYPES.ITypes => ({
  type: START_LOADING_COURSE,
});
export const stopLoadingCourse = (): TYPES.ITypes => ({
  type: STOP_LOADING_COURSE,
});
export const getCourseAction = (id: number): TYPES.CourseFetchType => ({
  type: GET_COURSE,
  id,
});
export const getCourseSuccessAction = (data: object): TYPES.CoursesSuccess => ({
  type: GET_COURSE_SUCCESS,
  payload: data,
});

export const courseViewedAction = (id: number): TYPES.CourseFetchType => ({
  type: COURSE_VIEWED,
  id,
});
export const courseViewdSuccessAction = (id: number): TYPES.ITypes => ({
  type: COURSE_VIEWED_SUCCESS,
  payload: id,
});

export const data = { a: "s" };

export const getViewedCourses = () => ({ type: VIEWED_COURSES });
export const getViewedCoursesSuccess = (data) => ({
  type: VIEWED_COURSES_SUCCESS,
  payload: data,
});
