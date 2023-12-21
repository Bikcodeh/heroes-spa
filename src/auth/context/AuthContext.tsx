import { createContext } from "react";
import { User } from "../interfaces";

export interface AuthContextType {
    logged: boolean;
    user: User | null;
    login: (name: string) => void;
    logout: () => void;
  }

export const AuthContext = createContext<AuthContextType | undefined>(undefined);