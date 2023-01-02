import React, { useState, useEffect } from "react";
import information_circle from "@se/icons/svg/information_circle.svg";
import user_add from "@se/icons/svg/user_add.svg";
import user_standard from "@se/icons/svg/user_standard.svg";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import jsonData from "../../../Sidebar/SidebarFolder/TreeData.json";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styled } from "@mui/system";

const Card = styled("div")({
  border: "1px solid #ccc",
  borderRadius: "3px",
  height: "70vh",
  margin: "20px",
  minWidth: "300px",
});

const Headers = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #ccc",
  padding: "0 10px",
});

const SubHeaderUser = styled("div")({
  border: "1px solid #ccc",
  padding: "2px 4px",
  borderRadius: "50px",
});

const CardContent = styled("div")({
  padding: "0 10px",
});

interface Object {
  AssetId: string;
  AssetType: string;
  AssetName: string;
  IPAddress?: string | null | any;
  Relationships: Array<object>;
}
interface Props {
  item: Object;
}

const DasboardCard = ({ item }: Props) => {
  const [itemRelationData, setItemRelationData] = useState<Array<any>>([]);

  useEffect(() => {
    const relations: any[] = item.Relationships;
    const relationData: any[] = [];

    for (let i = 0; i < relations.length; i++) {
      if (relations[i].Relation === "contains") {
        const found = jsonData.find(
          (s) => s.AssetId === relations[i].TargetAssetId,
        );
        if (found) {
          relationData.push(found);
        }
      }
    }

    setItemRelationData(relationData);
  }, []);

  const ModifiedTreeItem = (item: any) => {
    if (item.Relationships[0].Relation === "contains") {
      const foundItem: any = jsonData.find(
        (s) => s.AssetId === item.Relationships[0].TargetAssetId,
      );

      return (
        <TreeItem
          label={item.AssetName}
          nodeId={item.AssetId}
          key={item.AssetId}
        >
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
    <Card>
      <Headers>
        <h3>{item.AssetName.split(" ")[0]}</h3>
        <div className="headerIcons">
          <img src={information_circle} width="26px" height="26px" />
          <MoreHorizIcon />
        </div>
      </Headers>
      <Headers style={{ padding: "5px 10px" }}>
        <SubHeaderUser>
          <img src={user_standard} width="26px" height="26px" />
        </SubHeaderUser>
        <img src={user_add} width="26px" height="26px" />
      </Headers>
      <CardContent>
        <TreeView
          aria-label="multi-select"
          defaultCollapseIcon={<ArrowDropDownIcon />}
          defaultExpandIcon={<ArrowRightIcon />}
          multiSelect
          sx={{ height: 216, flexGrow: 1, width: "99%" }}
        >
          <TreeItem
            label={item.AssetName}
            nodeId={item.AssetId}
            style={{
              padding: "5px",
              marginBottom: "2px",
            }}
          >
            {itemRelationData.map((assetItem) =>
              assetItem.Relationships[0].Relation === "contains" ? (
                ModifiedTreeItem(assetItem)
              ) : (
                <TreeItem
                  label={assetItem.AssetName}
                  nodeId={assetItem.AssetId}
                  key={assetItem.AssetId}
                />
              ),
            )}
          </TreeItem>
        </TreeView>
      </CardContent>
    </Card>
  );
};

export default DasboardCard;
