import React from "react";
import { render, screen } from "@testing-library/react";
import FolderHeader from "./SidebarHeader";

test("renders System explorer", () => {
  render(<FolderHeader />);
  const linkElement = screen.getByText(/System Explorer/i);
  expect(linkElement).toBeInTheDocument();
});
