import Axios from 'axios';
import { COURSE_URL } from './constants';

import response from '../../data/allCourses';

const headers = () => ({
    authorization: `Bearer ${localStorage.getItem('jwtToken')}`
  });

export const getModuleData = async (courseId: number, moduleId: number) => {
  // console.log(courseId, typeof moduleId)
  try {
    const response = await Axios({
      method: 'get',
      url: `${COURSE_URL}/${courseId}/module/${moduleId}`,
      headers: headers()
    })
    return response.data
  } catch (err) {
    console.log("service", err);
    throw new Error(err);
  }
    // const data = response.data.filter(el => el.id === courseId);
    // if(data.length === 0) return undefined;
    // const module = data[0].courseModules.filter(el => el.id === moduleId);
    // return module[0];
}


export const getModulesService = async (courseId) => {
    try {
        const response = await Axios({
          method: 'get',
          url: `${COURSE_URL}/${courseId}/module`,
          headers: headers()
        })
        return response.data;
      } catch (err) {
        console.log("service", err);
        throw new Error(err);
      }
}