import Axios from "axios";

import response from "../../data/allCourses";
import { COURSE_URL } from "./constants";

const headers = () => ({
  authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
});

export const getCoursesService = async () => {
  try {
    const data = await Axios.get(COURSE_URL);
    console.log(data)
    return data;
  } catch (err) {
    console.log(err);
  }
};


export const getAdminCourseService = async () => {
  try {
    const data = await Axios({
      method: "get",
      url: `${COURSE_URL}/admin/courses`,
      headers: headers(),
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
