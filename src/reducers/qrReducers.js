import {
  QR_REQUEST,
  QR_SUCCESS,
  CLEAR_ERRORS,
  QR_FAIL,
  SET_MESSAGE,
} from "../constants/qrConstants";


export const qrScanReducer = (state = { user: {} }, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case QR_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
        };
      case QR_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      default:
        return state;
    }
  };