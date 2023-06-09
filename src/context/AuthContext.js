import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, loginNew } from "../action/Login";
import { useDispatch, useSelector } from "react-redux";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    let userProfile = localStorage.getItem("user");
    if (userProfile) {
      return JSON.parse(userProfile);
    }
    return null;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (phoneNumber) => {
    dispatch(loginNew(phoneNumber, navigate));
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
