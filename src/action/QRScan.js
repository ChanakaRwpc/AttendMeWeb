import QRService from "../service/QRService";

export const qrScan = (ewoNo) => async (dispatch) => {
    return AuthService.login(ewoNo).then(
      (data) => {
        dispatch({
          type: QR_SUCCESS,
          payload: { user: data },
        });
        console.log("action qr Scan");
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
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };