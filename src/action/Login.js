import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_MESSAGE,
  OTP_SUCCESS,
  OTP_FAIL,
} from "../constants/userConstants";

import AuthService from "../service/AuthService";
import { toast } from "react-toastify";

export const loginNew = (mobile_number, navigate) => (dispatch) => {
  setTimeout(() => {
    return AuthService.login(mobile_number).then(
      (data) => {
        if (data.data.statusCode == "200") {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { otp: data.data.OTP, user: data.data.serviceNo },
          });
          // localStorage.setItem("user", JSON.stringify(data.data.OTP));
          navigate(`/verification`);
        } else {
          dispatch({
            type: LOGIN_FAIL,
            payload: {},
          });
          toast.error("Not Registed User!");
        }
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: LOGIN_FAIL,
          payload: { error: message },
        });
        return Promise.reject();
      }
    );
  }, 1000);
};

export const checkVerification = (isDone, user, navigate) => (dispatch) => {
  setTimeout(() => {
    if (isDone) {
      dispatch({
        type: OTP_SUCCESS,
        payload: { user: user },
      });
      localStorage.setItem("user", JSON.stringify(user));
      navigate(`/`);
    } else {
      dispatch({
        type: OTP_FAIL,
        payload: { error: "Invalid OTP Code." },
      });
      toast.error("Invalid OTP Code.");
    }
    return Promise.resolve();
  }, 1000);
};
