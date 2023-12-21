import { User } from './../../interfaces/index';

export interface LoginAction {
    type: '[Auth] Login';
    payload: User | null;
}

export interface LogoutAction {
    type: '[Auth] Logout';
}

export type AuthAction = LoginAction | LogoutAction

