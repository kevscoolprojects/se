import React from "react";
import { render, screen } from "@testing-library/react";
import FolderHeader from "./FolderHeader";

test("renders Nestle Production Line", () => {
  render(<FolderHeader />);
  const linkElement = screen.getByText(/Nestle production line/i);
  expect(linkElement).toBeInTheDocument();
});
