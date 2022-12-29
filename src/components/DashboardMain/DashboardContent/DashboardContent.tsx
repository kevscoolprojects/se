import React, { useState } from "react";
import "./DasboardContent.css";
import DasboardCard from "./DashboardCard";

const DasboardContent = () => {
  return (
    <div className="dashboard">
      <div className="row">
        <div>
          <DasboardCard />
        </div>
        <div>
          <DasboardCard />
        </div>
      </div>
    </div>
  );
};

export default DasboardContent;
