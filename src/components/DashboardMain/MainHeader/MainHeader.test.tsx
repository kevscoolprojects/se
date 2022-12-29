import React from "react";
import { render, screen } from "@testing-library/react";
import MainHeader from "./MainHeader";

describe("Sidebar nav setting icon", () => {
  it("displays a setting image", () => {
    render(<MainHeader />);
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("action_settings2");
  });
});

describe("Button1Test", () => {
  it("should render a button with the name of Full View", () => {
    render(<MainHeader />);
    const fullViewBtn = screen.getByRole("button", { name: /Full View/i });
    let style = window.getComputedStyle(fullViewBtn);
    expect(style.color).toBe("black");
  });
});
describe("Button2Test", () => {
  it("should render a button with the name of logical", () => {
    render(<MainHeader />);
    const logicalBtn = screen.getByRole("button", { name: /Logical/i });
    let style = window.getComputedStyle(logicalBtn);
    expect(style.color).toBe("black");
  });
});

describe("Button3Test", () => {
  it("should render a button with the name of Topology", () => {
    render(<MainHeader />);
    const topologyBtn = screen.getByRole("button", { name: /Topology/i });
    let style = window.getComputedStyle(topologyBtn);
    expect(style.color).toBe("black");
  });
});

describe("Button4Test", () => {
  it("should render a button with the name of Applications", () => {
    render(<MainHeader />);
    const applicationBtn = screen.getByRole("button", {
      name: /Applications/i,
    });
    let style = window.getComputedStyle(applicationBtn);
    expect(style.color).toBe("black");
  });
});
