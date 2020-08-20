import { GET_COURSE_MODULE_SUCCESS, START_LOADNG_MODULE, STOP_LOADING_MODULE, GET_MODULES, GET_MODULES_SUCCESS, GET_MODULES_FAILED } from "./actionTypes";
import {actionTypes} from '../Admin'
import * as types from "./types";
import { IAction } from "../../redux/types";
// const { DELETE_COURSE_MODULE_SUCCESS , CREATE_COURSE_MODULE_SUCCESS, EDIT_COURSE_MODULE_SUCCESS} = actionTypes;


const INITIAL_STATE: types.ReducerInterface = {
  modules: [],
  viewed: [],
  module: null,
  loading: false
};

export default (state = INITIAL_STATE, { type, payload }: IAction): object => {
  switch (type) {
    case START_LOADNG_MODULE:
        return { ...state, loading: true}
    case STOP_LOADING_MODULE:
        return { ...state, loading: false}
    case GET_COURSE_MODULE_SUCCESS:
        return { ...state, module: payload.module, viewed: payload.viewed, loading: false}
    case GET_MODULES:
        return { ...state, loading: true}
    case GET_MODULES_SUCCESS:
        return { ...state, loading: false, modules: payload.data }
    case GET_MODULES_FAILED:
        return { ...state, loading: false}
    case "DELETE_COURSE_MODULE_SUCCESS":
      const newModule = state.modules.filter(el => el.id !== payload.id);
      return { ...state, modules: newModule}
    case "CREATE_COURSE_MODULE_SUCCESS":
      const savedModule = [{...payload.data}, ...state.modules];
      return { ...state, modules: savedModule}
    case "EDIT_COURSE_MODULE_SUCCESS":
      const editedModule = [...state.modules];
      const index = editedModule.findIndex(el => el.id === payload.data.id)
      editedModule[index] = payload.data;
      return { ...state, modules: editedModule}
    default:
      return state;
  }
};
