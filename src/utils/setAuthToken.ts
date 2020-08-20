import Axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    // Apply to every request
    Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    // Delete auth header
    delete Axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
