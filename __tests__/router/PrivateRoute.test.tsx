import * as React from "react";
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { AuthContext, AuthContextType } from '../../src/auth/context/AuthContext';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe("Tests for <PrivateRoute />", () => {
  test("should show children when user it is logged in", () => {
    const text = 'Marvel Page'
    Storage.prototype.setItem = jest.fn();
    const contextValue: AuthContextType = {
      logged: true,
      user: {
        id: "abc",
        name: "Victor"
      },
      login: () => {},
      logout: () => {}
    };
    render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={["/marvel"]}>
            <Routes>
              <Route
                path="marvel"
                element={
                  <PrivateRoute>
                    <h1>{text}</h1>
                  </PrivateRoute>
                }
              />
              <Route path="login" element={<h1>Marvel page</h1>} />
            </Routes>
          </MemoryRouter>
        </AuthContext.Provider>
      );
      expect(screen.getByText(text)).toBeTruthy();
      expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
  });

  test("should show login when user it is not logged in", () => {
    const text = 'Private route'
    Storage.prototype.setItem = jest.fn();
    const contextValue: AuthContextType = {
      logged: false,
      user: null,
      login: () => {},
      logout: () => {}
    };
    render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={["/marvel"]}>
            <Routes>
              <Route
                path="marvel"
                element={
                  <PrivateRoute>
                    <h1>{text}</h1>
                  </PrivateRoute>
                }
              />
              <Route path="login" element={<h1>Login page</h1>} />
            </Routes>
          </MemoryRouter>
        </AuthContext.Provider>
      );
      expect(screen.getByText('Login page')).toBeTruthy();
      expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
  });
});
