import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';

describe('Auth Reducer Tests', () => { 
    const initialState = {
        logged: false,
        user: null
    }
    test('should return default state when type not match', () => { 
        const action = {
            type: 'unknown',
            payload: 'test'
        }
        const state = authReducer(initialState, action);
        expect(state).toBe(initialState);
     });

     test('should return state updated when login type', () => { 
        const action = {
            type: types.login,
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
        const action = {
            type: types.logout,
            payload: null
        }
        const state = authReducer(currentState, action);
        expect(state.logged).toBeFalsy();
        expect(state.user).toBeNull();
      });
 });