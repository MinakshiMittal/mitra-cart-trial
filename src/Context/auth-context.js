import { createContext, useContext, useEffect, useState } from "react";
import { fakeAuthApi } from "../fakeAuthApi";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setLogin] = useState(false);

  useEffect(() => {
    const loginStatus = JSON.parse(localStorage?.getItem("login"));
    loginStatus?.isUserLoggedIn && setLogin(true);
    // console.log({ isUserLoggedIn });
  }, []);

  const { state } = useLocation();
  const navigate = useNavigate();

  const loginUserWithCredentials = async (username, password) => {
    try {
      const response = await fakeAuthApi(username, password);
      if (response.success) {
        setLogin(true);
        localStorage.setItem("login", JSON.stringify({ isUserLoggedIn: true }));
        navigate(state.from);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        loginUserWithCredentials,
        setLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
