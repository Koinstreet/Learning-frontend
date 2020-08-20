import { START_LOADING_COURSE, STOP_LOADING_COURSE, GET_COURSE_SUCCESS, COURSE_VIEWED_SUCCESS, VIEWED_COURSES_SUCCESS } from "./actionTypes";
import * as types from "./types";
import { IAction } from "../../redux/types";

const INITIAL_STATE: types.ReducerInterface = {
  course: null,
  loading: false,
  viewed: [],
  viewedCourse: [],
};

export default (state = INITIAL_STATE, { type, payload }: IAction): object => {
  switch (type) {
    case START_LOADING_COURSE:
      return { ...state, loading: true };
    case STOP_LOADING_COURSE:
        return { ...state, loading: false};
    case GET_COURSE_SUCCESS:
        return { ...state, course: payload, loading: false}
    case COURSE_VIEWED_SUCCESS:
        const newViewed = [...state.viewed];
        if(!(newViewed.indexOf(payload) === -1)) return {...state};
        newViewed.push(payload)
        return { ...state, viewed: newViewed, loading: false}
    case "CREATE_COURSE_FINISHED": 
        return { ...state, course: payload.data, loading: false}
    case VIEWED_COURSES_SUCCESS:
      return { ...state, viewedCourse: payload, loading: false}
    default:
      return state;
  }
};
