import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import jsonData from "./TreeData.json";

type Props = {};

const MultiSelectTreeView = (props: Props) => {
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
        (s) => s.AssetId === item.Relationships[0].TargetAssetId,
      );

      return (
        <TreeItem
          label={item.AssetName}
          nodeId={item.AssetId}
          key={item.AssetId}
          sx={{ padding: "0" }}
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
    <TreeView
      aria-label="multi-select"
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      multiSelect
      sx={{
        height: "100vh",
        width: "99%",
        padding: "0",
        overflow: "hidden",
      }}
    >
      {jsonData.map((item: any) => {
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
        return isChild(item) ? (
          <TreeItem
            label={item.AssetName}
            nodeId={item.AssetId}
            key={item.AssetId}
            style={{
              padding: "5px 0",
              background: "#eeeeee",
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
                  key={assetItem.AssetId}
                />
              ),
            )}
          </TreeItem>
        ) : null;
      })}
    </TreeView>
  );
};

export default MultiSelectTreeView;
