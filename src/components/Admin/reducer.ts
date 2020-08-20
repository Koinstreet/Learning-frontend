import { CREATE_COURSE, CREATE_COURSE_FINISHED } from "./actionTypes";
// import * as types from "./types";
// import { IAction } from "../../redux/types";

const INITIAL_STATE = {
  loading: false,
  error: null
};

export default (state = INITIAL_STATE, { type, payload }): object => {
  switch (type) {
    case CREATE_COURSE:
      return { ...state, loading: true };
    case CREATE_COURSE_FINISHED:
      return { ...state, loading: false, error: payload.err };
    default:
      return state;
  }
};
