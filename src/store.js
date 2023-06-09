import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import message from "./reducers/message";
import { authReducer } from "./reducers/userReducers";
import { qrScanReducer } from "./reducers/qrReducers";

const reducer = combineReducers({
  message: message,
  auth: authReducer,
  qr: qrScanReducer,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
