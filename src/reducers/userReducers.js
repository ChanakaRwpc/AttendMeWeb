import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_MESSAGE,
  OTP_SUCCESS,
  OTP_FAIL,
} from "../constants/userConstants";

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
  otpcode: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        otpcode: action.payload.otp,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case OTP_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case OTP_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
