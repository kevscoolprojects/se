import React from "react";
import { render, screen } from "@testing-library/react";
import DashboardCard from "./DashboardCard";

test("renders Bottling", () => {
  render(
    <DashboardCard
      item={{
        AssetId: "02",
        AssetType: "Software Subsystem",
        AssetName: "Sterlization Module",
        IPAddress: null,
        Relationships: [{}],
      }}
    />,
  );
  const linkElement = screen.getByText(/Bottling/i);
  expect(linkElement).toBeInTheDocument();
});

test("displays a info image", () => {
  render(
    <DashboardCard
      item={{
        AssetId: "02",
        AssetType: "Software Subsystem",
        AssetName: "Sterlization Module",
        IPAddress: null,
        Relationships: [{}],
      }}
    />,
  );
  const displayedImage = document.querySelector("img") as HTMLImageElement;
  expect(displayedImage.src).toContain("information_circle");
});
