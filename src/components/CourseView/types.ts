export interface IAction {
  type: string;
  payload?: any;
}

export interface IGetModule {
  type: string;
  courseId: number;
  moduleId: number;
}

interface IModule {
  _id: string
}

export interface ReducerInterface {
  modules: Array<IModule>;
  viewed: Array<String>;
  module: object | null;
  loading: boolean;
}
