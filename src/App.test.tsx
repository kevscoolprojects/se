import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders App component", () => {
  render(<App />);
  const linkElement = screen.getByText(/Nestle Production Line/i);  // caps for Title
  expect(linkElement).toBeInTheDocument();
});

test("renders System explorer component in App", () => {
  render(<App />);
  const linkElement = screen.getByText(/System Explorer/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders Nestle Production Line component in App", () => {
  render(<App />);
  const linkElement = screen.getByText(/Nestle production line/i);  // for component
  expect(linkElement).toBeInTheDocument();
});
