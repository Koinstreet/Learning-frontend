import { GET_ALL_COURSES_SUCCESS } from "./actionTypes";
import { actionTypes as adminTypes } from "../Admin";
import * as types from "./types";
import { IAction } from "../../redux/types";

// const { DELETE_COURSE_SUCCESS } = adminTypes;

const INITIAL_STATE = {
  courses: [],
};

interface CourseType {
  id: number;
}

export default (state = INITIAL_STATE, { type, payload }: IAction): object => {
  switch (type) {
    case GET_ALL_COURSES_SUCCESS:
      return {
        ...state,
        courses: payload,
      };
    case "CREATE_COURSE_FINISHED": {
      if (payload.err) return state;
      const newCourse = [{...payload.data}, ...state.courses];
      return { ...state, courses: newCourse };
    }
    case "DELETE_COURSE_SUCCESS": {
      const newCourse = state.courses.filter((el: CourseType) => el.id !== payload.id)
      return { ...state, courses: newCourse };
    }
    default:
      return state;
  }
};
