import Axios from "axios";
import { COURSE_URL } from "./constants";

const headers = () => ({
  authorization: `Bearer ${localStorage.getItem('jwtToken')}`
})

export const createCourseService = async (data) => {
  try {
    const response = await Axios({
      method: 'post',
      url: COURSE_URL,
      headers: headers(),
      data
    })
    return response;
  } catch (err) {
    console.log("service", err);
    throw new Error(err);
  }
};

export const deleteCourseService = async (id) => {
  try {
    const response = await Axios({
      method: 'delete',
      url: `${COURSE_URL}/${id}`,
      headers: headers(),
    })
    return response;
  } catch (err) {
    console.log("service", err);
    throw new Error(err);
  }
}

export const editCourseService = async (id, data) => {
  try {
    const response = await Axios({
      method: 'put',
      url: `${COURSE_URL}/${id}`,
      headers: headers(),
      data
    });
    return response;
  } catch (err) {
    console.log("service", err);
    throw new Error(err);
  }
}

export const createModuleService = async (id, data) => {
  try {
    const response = await Axios({
      method: 'post',
      url: `${COURSE_URL}/${id}/module`,
      headers: headers(),
      data
    });
    return response;
  } catch (err) {
    console.log("service", err);
    throw new Error(err);
  }
}

export const deleteModuleService = async (moduleId, courseId) => {
  try {
    const response = await Axios({
      method: 'delete',
      url: `${COURSE_URL}/${courseId}/module/${moduleId}`,
      headers: headers(),
    })
    return response;
  } catch (err) {
    console.log("service", err);
    throw new Error(err);
  }
}

export const editModuleService = async (moduleId, courseId, data) => {
  try {
    const response = await Axios({
      method: 'put',
      url: `${COURSE_URL}/${courseId}/module/${moduleId}`,
      headers: headers(),
      data
    })
    return response;
  } catch (err) {
    console.log("service", err);
    throw new Error(err);
  }
}