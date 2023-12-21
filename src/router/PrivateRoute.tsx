import { useContext, useEffect, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../auth/context/AuthContext";

interface Props {
  children: ReactNode
}

export const PrivateRoute = ({ children }: Props) => {
  const {pathname, search} = useLocation();
  const lastPath = pathname + search;
  useEffect(() => {
    localStorage.setItem('lastPath', lastPath);
  }, [pathname])
  const { logged } = useContext(AuthContext);
  return logged ? children : <Navigate to="/login" />;
};
