import jwtDecode from "jwt-decode";
import setAuthToken from "./setAuthToken";

const setAuthData = (data) => {
  localStorage.setItem("jwtToken", data);
  setAuthToken(data);
  const decoded = jwtDecode(data);
  return decoded;
};

export default setAuthData;
