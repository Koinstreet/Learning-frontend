import { all } from "redux-saga/effects";

import { sagas as actionWatcherAllCourses } from "../components/Home";
import { sagas as actionWatcherCourses } from "../components/CourseOverview";
import { sagas as actionWatcherModules } from "../components/CourseView";
import { sagas as actionWatcherAuth } from "../components/Auth";
import { sagas as actionWatcherAdmin } from "../components/Admin";

export default function* rootSaga() {
  yield all([
    actionWatcherAllCourses(),
    actionWatcherCourses(),
    actionWatcherModules(),
    actionWatcherAuth(),
    actionWatcherAdmin()
  ]);
}
