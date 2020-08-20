import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";

import { reducer as allCoursesReducer } from "../components/Home";
import { reducer as courseReducer } from "../components/CourseOverview";
import { reducer as courseModuleRecucer } from "../components/CourseView";
import { reducer as authReducer } from "../components/Auth";
import { reducer as adminReducer } from "../components/Admin";

export default combineReducers({
  auth: authReducer,
  loadingBar: loadingBarReducer,
  allCourses: allCoursesReducer,
  currentCourse: courseReducer,
  courseModules: courseModuleRecucer,
  adminReducer: adminReducer
});
