import axios from "axios";

const login = (mobile_nummber) => {
  return axios
    .get(`Login/LoginByPhone?phoneNo=${mobile_nummber}`)
    .then((response) => {
      console.log(response.data);
      return response;
    });
};

export default {
  //register,
  login,
  // logout,
};
