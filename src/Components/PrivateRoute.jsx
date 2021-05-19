import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../Context/auth-context";

export const PrivateRoute = ({ path, ...props }) => {
  const { isUserLoggedIn } = useAuth();
  return isUserLoggedIn ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} to="/login" replace />
  );
};
