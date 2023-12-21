import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockUseLocation = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseLocation,
}));

describe("Tests for <SearchPage />", () => {

    beforeEach(() => jest.clearAllMocks());
  test("should display properly with default values", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("should display batman and input with value on queryString", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const input = screen.getByRole("textbox") as HTMLInputElement;
    const img = screen.getByTestId("image-hero") as HTMLImageElement;
    const alertSearch = screen.getByTestId("alert-search");
    expect(input.value).toBe("batman");
    expect(img.src.includes("batman")).toBeTruthy();
    expect(alertSearch.style.display).toEqual("none");
  });

  test("should display alert error when a hero is not found", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=klklk"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const alertSearch = screen.getByTestId("alert-search");
    const alertError = screen.getByTestId("alert-error");
    expect(alertSearch.style.display).toEqual("none");
    expect(alertError.style.display).toEqual("");
  });

  test("should search a hero when input filled and submit form", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const input = screen.getByRole("textbox");
    const form = screen.getByRole('form');
    fireEvent.input(input, { target: { value: "batman" } });
    fireEvent.submit(form)
    expect(mockUseLocation).toHaveBeenCalledWith("?q=batman");
  });
});
