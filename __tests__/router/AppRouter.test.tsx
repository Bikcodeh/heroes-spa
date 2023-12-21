import * as React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter} from "react-router-dom";

import { AuthContext, AuthContextType } from "../../src/auth/context/AuthContext";
import { AppRouter } from "../../src/router/AppRouter";

describe("Tests for <AppRouter />", () => {
  test("should show login if not logged in", () => {
    const contextValue: AuthContextType = {
      logged: false,
      user: null,
      login: jest.fn(),
      logout: jest.fn()
    };
    const text = "Public route";
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getAllByText('Login').length).toBe(2);
  });

  test("should show marvel page if it is logged in", () => {
    const contextValue: AuthContextType = {
      logged: true,
      user: {
        id: '123',
        name: 'Victor'
      },
      login: () => {},
      logout: () => {}
    };
    const text = "Public route";
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText('Marvel Comics')).toBeTruthy();
  });
});
