import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRoute } from "../../src/router/PublicRoute";

describe("Tests <PublicRoute />", () => {

    test("should return children when is not logged in", () => {
        const contextValue = {
            logged: false
          };
        const text = "Public route";
        render(
          <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={["/login"]}>
              <Routes>
                <Route
                  path="login"
                  element={
                    <PublicRoute>
                      <h1>{text}</h1>
                    </PublicRoute>
                  }
                />
                <Route path="marvel" element={<h1>Marvel page</h1>} />
              </Routes>
            </MemoryRouter>
          </AuthContext.Provider>
        );
        expect(screen.getByText(text)).toBeTruthy();
      });
  test("should return marvel page when is properly logged in", () => {
    const contextValue = {
        logged: true,
        user: {
            id: '123',
            name: 'Victor'
        }
      };
    const text = "Public route";
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>{text}</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Marvel page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText('Marvel page')).toBeTruthy();
  });
});
