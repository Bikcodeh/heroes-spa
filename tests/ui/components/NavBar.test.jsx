import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Navbar } from "../../../src/ui/components/NavBar";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { AppRouter } from "../../../src/router/AppRouter";

const mockUseLocation = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseLocation,
}));

describe("Tests for <NavBar />", () => {
  beforeEach(() => jest.clearAllMocks());
  test("should display the name of the user logged in", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "123",
        name: "Bikcode",
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Bikcode")).toBeTruthy();
  });

  test("should call logout and navigate when onclick", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "123",
        name: "Bikcode",
      },
      logout: jest.fn(),
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const buttonLogout = screen.getByTestId("button-logout");
    expect(screen.getByText("Bikcode")).toBeTruthy();
    fireEvent.click(buttonLogout);
    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockUseLocation).toHaveBeenCalledWith("/login", { replace: true });
  });
});
