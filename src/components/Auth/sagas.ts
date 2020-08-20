import { takeEvery, call, put } from "redux-saga/effects";

import { authLoading, authSuccess, authFail } from "./actions";
import { signupService, signinService } from "./services";
// import { CourseFetchType } from "./types";
import * as TYPES from "./actionTypes";
import setAuthData from "../../utils/setAuthData";

function* signupUser(data) {
  try {
    yield put(authLoading());
    const { token } = yield call(signupService, data);
    const decoded = setAuthData(token);
    yield put(authSuccess(decoded));
    window.location.href = '/';
  } catch (err) {
    console.log(err);
    yield put(authFail(err));
  }
}

function* signinUser(data) {
  try {
    yield put(authLoading());
    console.log(data)
    const { token } = yield call(signinService, data);
    const decoded = setAuthData(token);
    yield put(authSuccess(decoded));
    if (decoded.role === "admin") {
      window.location.href = '/admin/dashboard';
    } else {
      window.location.href = '/';
    }
  } catch (err) {
    console.log(err);
    yield put(authFail(err));
  }
}

function* signupWatcher(payload) {
  const { data } = payload;
  yield call(signupUser, data);
}

function* signinWatcher(payload) {
  const { data } = payload;
  yield call(signinUser, data);
}

export default function* actionWatcher() {
  yield takeEvery(TYPES.SIGNUP_USER, signupWatcher);
  yield takeEvery(TYPES.SIGNIN_USER, signinWatcher);
}
