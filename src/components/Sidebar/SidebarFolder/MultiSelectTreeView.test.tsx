import React from "react";
import { render, screen } from "@testing-library/react";
import MultiSelectTreeView from "./MultiSelectTreeView";
import jsonData from "./TreeData.json";

test("renders Tree View", () => {
  render(<MultiSelectTreeView />);
  const linkElement = screen.getByText(jsonData[0].AssetName);
  expect(linkElement).toBeInTheDocument();
});
