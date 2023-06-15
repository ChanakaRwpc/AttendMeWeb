import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import axios from "axios";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ThemeProvider } from "@material-tailwind/react";
axios.defaults.baseURL = "https://esystems.cdl.lk/backend/BizTrack/";

//  axios.defaults.baseURL = "http://172.30.30.18/api/attendance/";
// axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.post["Access-Control-Allow-Credentials"] = "true";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

serviceWorkerRegistration.register();
