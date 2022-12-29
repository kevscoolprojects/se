import React from "react";
import { render, screen } from "@testing-library/react";
import SidebarNav from "./SidebarNav";

describe("Sidebar nav new folder icon", () => {
  it("displays a new Folder image", () => {
    render(<SidebarNav />);
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("new_folder");
  });
});
