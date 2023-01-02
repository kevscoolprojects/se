import React, { useState } from "react";
import action_settings2 from "@se/icons/svg/action_settings2.svg";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styled } from "@mui/system";

const Header = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "1px solid black",
  backgroundColor: "rgb(250, 248, 248)",
  padding: "5px 0px",
});

const HeaderLeft = styled("div")({
  backgroundColor: "white",
  marginLeft: "15px",
  padding: "10px 15px",
  borderRadius: "20px",
  "-webkit-box-shadow": "0 0 10px #ccc",
  boxShadow: "0 0 10px #ccc",
});

const HeaderRight = styled("div")({
  display: "flex",
  alignItems: "center",
  marginRight: "15px",
});

const Toggle = styled("div")({
  display: "flex",
  alignItems: "center",
  margin: "0 10px",
});

const CombinedStyledBox = styled("div")({
  margin: "0 10px",
});

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
    <Header>
      <HeaderLeft>
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
      </HeaderLeft>
      <HeaderRight>
        <Toggle>
          {!toggle ? (
            <ToggleOffIcon
              fontSize="large"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <ToggleOnIcon fontSize="large" onClick={() => setToggle(!toggle)} />
          )}
          <span>Plant View</span>
        </Toggle>
        <CombinedStyledBox>
          <ArrowDropDownIcon fontSize="large" />
        </CombinedStyledBox>
        <CombinedStyledBox>
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
        </CombinedStyledBox>
        <CombinedStyledBox>
          <img src={action_settings2} width="26px" height="26px" />
          <MoreHorizIcon />
        </CombinedStyledBox>
      </HeaderRight>
    </Header>
  );
};

export default MainHeader;
