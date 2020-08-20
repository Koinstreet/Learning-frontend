import _ from 'lodash';
import { AUTH_SUCCESS, AUTH_FAIL, AUTH_LOADING } from "./actionTypes";
// import * as types from "./types";
// import { IAction } from "../../redux/types";

const INITIAL_STATE = {
  isAuthenticated: false,
  error: null,
  loading: false,
  auth: null
};

export default (state = INITIAL_STATE, { type, payload }): object => {
  switch (type) {
    case AUTH_LOADING:
      return { ...state, loading: true };
    case AUTH_SUCCESS:
      console.log("here")
      return { ...state, loading: false, auth: payload.data, isAuthenticated: !_.isEmpty(payload.data) };
    case AUTH_FAIL:
      return { ...state, loading: false, error: payload.err };
    default:
      return state;
  }
};
