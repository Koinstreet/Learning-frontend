import {
  GET_COURSE_MODULE,
  GET_COURSE_MODULE_SUCCESS,
  START_LOADNG_MODULE,
  STOP_LOADING_MODULE,
  GET_MODULES,
  GET_MODULES_SUCCESS,
  GET_MODULES_FAILED,
} from "./actionTypes";
import { IAction, IGetModule } from "./types";

export const startLoadingModule = (): IAction => ({
  type: START_LOADNG_MODULE,
});
export const stopLoadingModule = (): IAction => ({ type: STOP_LOADING_MODULE });

export const getCourseModuleAction = (
  courseId: number,
  moduleId: number
): IGetModule => ({
  type: GET_COURSE_MODULE,
  courseId,
  moduleId,
});

export const getCourseModuleSuccessAction = (data: object): IAction => ({
  type: GET_COURSE_MODULE_SUCCESS,
  payload: data,
});

export const getModulesAction = (courseId) => ({
  type: GET_MODULES,
  id: courseId,
});

export const getModulesSuccess = (data) => ({
  type: GET_MODULES_SUCCESS,
  payload: { data },
});

export const getModulesFailed = () => ({
  type: GET_MODULES_FAILED,
});

export const data = {a:"s"}