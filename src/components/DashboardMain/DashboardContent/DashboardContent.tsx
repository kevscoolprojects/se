import React, { useState } from "react";
import DasboardCard from "./DashboardCard/DashboardCard";
import { styled } from "@mui/system";

const Dashboard = styled("div")({
  width: "100%",
  height: "80vh",
  padding: "30px 0",
});

const Row = styled("div")({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
});

const DasboardContent = () => {
  return (
    <Dashboard>
      <Row>
        <div>
          <DasboardCard />
        </div>
        <div>
          <DasboardCard />
        </div>
      </Row>
    </Dashboard>
  );
};

export default DasboardContent;
