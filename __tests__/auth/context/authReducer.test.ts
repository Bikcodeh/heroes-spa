import { LoginAction, LogoutAction } from './../../../src/auth/context/actions/index';
import { authReducer } from '../../../src/auth/context/authReducer';

describe('Auth Reducer Tests', () => { 
    const initialState = {
        logged: false,
        user: null
    }

     test('should return state updated when login type', () => { 
        const action: LoginAction = {
            type: '[Auth] Login',
            payload: {
                id: '123',
                name: 'Victor'
            }
        }
        const state = authReducer(initialState, action);
        expect(state.user).toBe(action.payload);
      });

      test('should return state updated when logout type', () => { 
        const currentState = {
            logged: true,
            user:{
                id: '123',
                name: 'Victor'
            }
        }
        const action: LogoutAction = {
            type: '[Auth] Logout'
        }
        const state = authReducer(currentState, action);
        expect(state.logged).toBeFalsy();
        expect(state.user).toBeNull();
      });
 });