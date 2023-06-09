import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
// import { AuthProvider } from "./layouts/authentication/authProvider/AuthProvider";
import Signin from "./layouts/authentication/sign-in";
import Verification from "./layouts/authentication/verification";
import Home from "./layouts/other/Home";
// import Home from "./layouts/other/HomeCustom";
import Dashboard from "./layouts/other/Dashboard";
import ProtectedRoute from "./route/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <AuthContextProvider>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<Home />} path="/" exact />
          <Route element={<Home />} path="/home" />
        </Route>
        <Route element={<Signin />} path="/" />
        <Route element={<Signin />} path="/login" />
        <Route element={<Signin />} path="/*" />
        <Route element={<Verification />} path="/Verification" />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
