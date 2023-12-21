import { User } from './../interfaces/index';
import { AuthAction } from "./actions";

export interface AuthState {
    logged: boolean;
    user: User | null;
}

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case '[Auth] Login': return {
            ...state,
            logged: true,
            user: action.payload
        }
        case '[Auth] Logout': return {
            ...state,
            logged: false,
            user: null
        }
        default:
            return state;
    }
}