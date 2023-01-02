import React from "react";
import { render, screen } from "@testing-library/react";
import DashboardCard from "./DashboardCard";

test("renders Bottling", () => {
  render(<DashboardCard />);
  const linkElement = screen.getByText(/Bottling/i);
  expect(linkElement).toBeInTheDocument();
});

test("displays a info image", () => {
  render(<DashboardCard />);
  const displayedImage = document.querySelector("img") as HTMLImageElement;
  expect(displayedImage.src).toContain("information_circle");
});
