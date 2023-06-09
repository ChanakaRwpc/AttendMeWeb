import axios from "axios";

const qrscan = (ewoNo) => {
    return axios
      .get(`EWODetails/GetEWODetails?EWONo=${ewoNo}`)
      .then((response) => {
        return response;
      });
  };
  
  export default {
     qrscan,
  };
  