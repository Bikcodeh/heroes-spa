import { useReducer, ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { AuthState, authReducer } from "./authReducer";
import { User } from "../interfaces";


export const initialState: AuthState = {
  logged: false,
  user: null
}

const init = (): AuthState => {
  const userString = localStorage.getItem('user')
  const user: User | null = userString ? JSON.parse(userString) : null;
  return {
    logged: !!user,
    user: user
  }
}

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, init);
  const login = (name = ""): void => {

    const user = {
      id: "123",
      name: name,
    }
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({ type: '[Auth] Login', payload: user});
  };
  const logout = (): void => {
    localStorage.removeItem('user');
    dispatch({ type: '[Auth] Logout' });
  }
  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
