import { types } from "../../../src/auth";

describe('Types tests', () => {
    test('should math with the current types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        });
    });
});