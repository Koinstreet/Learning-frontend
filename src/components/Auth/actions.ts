import {
  SIGNUP_USER,
  SIGNIN_USER,
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAIL,
} from "./actionTypes";

export const signupAction = (data) => ({
  type: SIGNUP_USER,
  data,
});

export const signinAction = (data) => ({
  type: SIGNIN_USER,
  data,
});

export const authLoading = () => ({
  type: AUTH_LOADING,
});

export const authSuccess = (data) => ({
  type: AUTH_SUCCESS,
  payload: {
    data,
  },
});

export const authFail = (err) => ({
  type: AUTH_FAIL,
  payload: {
    err,
  },
});
