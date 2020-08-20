import Axios from "axios";
import { SIGNUP_URL, SIGNIN_URL } from "./constants";

export const signupService = async (data) => {
  try {
    const response = await Axios.post(SIGNUP_URL, data);
    console.log(response)
    return response.data;
  } catch (err) {
    console.log("service", err);
    throw new Error(err);
  }
};

export const signinService = async (data) => {
  try {
    const response = await Axios.post(SIGNIN_URL, data);
    return response.data;
  } catch (err) {
    console.log("service", err);
    throw new Error(err);
  }
};
