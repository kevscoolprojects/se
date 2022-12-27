import React, { useState } from "react";
import "./MainHeader.css";
import new_folder from "@se/icons/svg/new_folder.svg";
import action_download_stroke from "@se/icons/svg/action_download_stroke.svg";
import action_settings2 from "@se/icons/svg/action_settings2.svg";
import action_filter from "@se/icons/svg/action_filter.svg";
import more from "@se/icons/svg/more.svg";
import Button from "@mui/material/Button";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function valuetext(value: number) {
  return `${value}°C`;
}

const MainHeader = () => {
  const [activeView, setActiveView] = useState(false);
  const [activeLogical, setActiveLogical] = useState(false);
  const [activeTopology, setActiveTopology] = useState(false);
  const [activeApplications, setActiveApplications] = useState(false);
  const [toggle, setToggle] = useState(false);

  const styleHandler = (active: any) => {
    return {
      borderRadius: "20px",
      background: active ? "black" : "white",
      color: active ? "white" : "black",
      border: "none",
      padding: "5px 10px",
      margin: "0 3px",
      cursor: "pointer",
    };
  };

  return (
    <div className="mainHeader">
      <div className="header-left">
        <button
          style={styleHandler(activeView)}
          onClick={() => {
            setActiveView(true);
            setActiveLogical(false);
            setActiveTopology(false);
            setActiveApplications(false);
          }}
        >
          Full View
        </button>
        <button
          style={styleHandler(activeLogical)}
          onClick={() => {
            setActiveView(false);
            setActiveLogical(true);
            setActiveTopology(false);
            setActiveApplications(false);
          }}
        >
          Logical
        </button>
        <button
          style={styleHandler(activeTopology)}
          onClick={() => {
            setActiveView(false);
            setActiveLogical(false);
            setActiveTopology(true);
            setActiveApplications(false);
          }}
        >
          Topology
        </button>
        <button
          style={styleHandler(activeApplications)}
          onClick={() => {
            setActiveView(false);
            setActiveLogical(false);
            setActiveTopology(false);
            setActiveApplications(true);
          }}
        >
          Applications
        </button>
      </div>
      <div className="header-right">
        <div className="toggle">
          {!toggle ? (
            <ToggleOffIcon
              fontSize="large"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <ToggleOnIcon fontSize="large" onClick={() => setToggle(!toggle)} />
          )}
          <span>Plant View</span>
        </div>
        <div className="dropdown">
          <ArrowDropDownIcon fontSize="large" />
        </div>
        <div className="slider">
          <Box sx={{ width: 100 }}>
            <Slider
              aria-label="Small steps"
              defaultValue={0.00000005}
              getAriaValueText={valuetext}
              step={0.00000001}
              marks
              min={-0.00000005}
              max={0.0000001}
            />
          </Box>
        </div>
        <div className="setting">
          <img src={action_settings2} width="26px" height="26px" />
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
