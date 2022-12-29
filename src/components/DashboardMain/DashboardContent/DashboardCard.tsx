import React, { useState } from "react";
import "./DasboardCard.css";
import information_circle from "@se/icons/svg/information_circle.svg";
import user_add from "@se/icons/svg/user_add.svg";
import user_standard from "@se/icons/svg/user_standard.svg";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { styled } from "@mui/material/styles";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import jsonData from "../../Sidebar/SidebarFolder/TreeData.json";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
type Props = {};
const DasboardCard = () => {
  const CustomTreeItem = styled(TreeItem)({
    WebkitTapHighlightColor: "blue",
    "&:hover, &.Mui-disabled, &.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused, &.Mui-selected:hover":
      {
        backgroundColor: "green",
        position: "relative",
      },
    "&.Mui-expanded": {
      background: "purple !important",
    },
    // ' &.Mui-focused > &:before, &.Mui-selected > &:before, &.Mui-selected.Mui-focused > &:before, ': {
    //     content: '""', width: '3px', height: '40px',background:'black'
    // }
  });

  const isParent = () => {
    const treeData: any = jsonData;
    for (let i = 0; i < treeData.length; i++) {
      for (let j = 0; j < treeData[i].Relationships.length; j++) {
        if (
          treeData[i].AssetId === treeData[i].Relationships[j].TargetAssetId
        ) {
          return false;
        }
      }
    }
    return true;
  };

  const isChild = (asset: any) => {
    const treeData: any = jsonData;
    for (let i = 0; i < treeData.length; i++) {
      for (let j = 0; j < treeData[i].Relationships.length; j++) {
        if (asset.AssetId === treeData[i].Relationships[j].TargetAssetId) {
          return false;
        }
      }
    }
    return true;
  };

  const ModifiedTreeItem = (item: any) => {
    if (item.Relationships[0].Relation === "contains") {
      const foundItem: any = jsonData.find(
        (s) => s.AssetId === item.Relationships[0].TargetAssetId
      );

      return (
        <TreeItem label={item.AssetName} nodeId={item.AssetId}>
          {foundItem?.Relationships[0].Relation === "contains" ? (
            ModifiedTreeItem(foundItem)
          ) : (
            <TreeItem nodeId={foundItem.AssetId} label={foundItem.AssetName} />
          )}
        </TreeItem>
      );
    }
  };
  return (
    <div className="dashboardCard">
      <div className="cardHeader">
        <h3>Bottling</h3>
        <div className="headerIcons">
          <img src={information_circle} width="26px" height="26px" />
          <MoreHorizIcon />
        </div>
      </div>
      <div className="cardSubHeader">
        <div className="subHeaderUSer">
          <img src={user_standard} width="26px" height="26px" />
        </div>
        <img src={user_add} width="26px" height="26px" />
      </div>
      <div className="cardContent">
        <TreeView
          aria-label="multi-select"
          defaultCollapseIcon={<ArrowDropDownIcon />}
          defaultExpandIcon={<ArrowRightIcon />}
          multiSelect
          sx={{ height: 216, flexGrow: 1, width: "99%" }}
        >
          {jsonData.map((item: any) => {
            const relations: any[] = item.Relationships;
            const relationData: any[] = [];

            for (let i = 0; i < relations.length; i++) {
              if (relations[i].Relation === "contains") {
                const found = jsonData.find(
                  (s) => s.AssetId === relations[i].TargetAssetId
                );
                if (found) {
                  relationData.push(found);
                }
              }
            }
            // console.log('item main: ', item)
            return isChild(item) ? (
              <TreeItem
                label={item.AssetName}
                nodeId={item.AssetId}
                style={{
                  padding: "15px 5px",
                  //   background: "#eeeeee",
                  marginBottom: "2px",
                }}
              >
                {relationData.map((assetItem) =>
                  assetItem.Relationships[0].Relation === "contains" ? (
                    ModifiedTreeItem(assetItem)
                  ) : (
                    <TreeItem
                      label={assetItem.AssetName}
                      nodeId={assetItem.AssetId}
                    />
                  )
                )}
              </TreeItem>
            ) : null;
          })}
        </TreeView>
      </div>
    </div>
  );
};

export default DasboardCard;
