import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders App component", () => {
  render(<App />);
  const linkElement = screen.getByText(/System Explorer/i);
  expect(linkElement).toBeInTheDocument();
});
