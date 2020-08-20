import Axios from "axios";

import { COURSE_URL } from "./constants";

const headers = () => ({
  authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
});

export const getCourseData = async (id: number) => {
  const res = await Axios.get(`${COURSE_URL}/${id}`);
  return res.data;
};

export const getViewedCourses = async () => {
  const res = await Axios({
    method: "get",
    url: `${COURSE_URL}/user/viewed`,
    headers: headers(),
  });
  return res.data;
};
