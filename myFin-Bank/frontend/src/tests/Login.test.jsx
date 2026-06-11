import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Login from "../pages/Login";

describe("Login Page", () => {
  it("renders login heading", () => {
    render(<Login />);

    expect(
      screen.getByText("Login")
    ).toBeTruthy();
  });
});