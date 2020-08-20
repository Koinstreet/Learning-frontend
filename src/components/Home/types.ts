import { GET_ALL_COURSES, GET_ALL_COURSES_SUCCESS } from "./actionTypes";
import { types as CourseCardTypes } from "../CourseCard";

export interface CourseSectionProps {
  title: string;
  courses: Array<CourseCardTypes.CourseCardProps>;
}

export interface ReducerInterface {
  courses: Array<string>;
}

export interface getAllCoursesActionType {
  type: typeof GET_ALL_COURSES
}

export interface getAllCoursesSuccessActionType {
  type: typeof GET_ALL_COURSES_SUCCESS,
  payload: object
}