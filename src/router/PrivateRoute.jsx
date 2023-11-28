import { useContext, useMemo, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const {pathname, search} = useLocation();
  const lastPath = pathname + search;
  useEffect(() => {
    localStorage.setItem('lastPath', lastPath);
  }, [pathname])
  console.log('render')
  const { logged } = useContext(AuthContext);
  return logged ? children : <Navigate to="/login" />;
};
