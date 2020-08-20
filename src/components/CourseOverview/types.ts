export interface ITypes {
  type: string;
  [propName: string]: any;
}

export interface CoursesSuccess extends ITypes {
  payload: object;
}

export interface CourseFetchType extends ITypes {
  id: number;
}

export interface ReducerInterface {
  course: object | null;
  loading: boolean;
  viewed: Array<number>;
  viewedCourse: Array<object> | null;
}

export interface ITopSection {
  courseName: string;
  authorName: string;
  students: number;
  id: number;
  videoLink: string;
  authorImg: string;
  courseIntroId: number;
}

export interface IDescription {
  courseOverview: string;
  courseAudience: string;
  perequisites: string;
  learningList: Array<string>;
}
