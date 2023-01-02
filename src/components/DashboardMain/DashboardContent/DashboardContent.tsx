import { styled } from "@mui/system";
import DasboardCard from "./DashboardCard/DashboardCard";
import jsonData from "../../Sidebar/SidebarFolder/TreeData.json";

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
  return (
    <Dashboard>
      <Row>
        {jsonData.map((item) =>
          isChild(item) ? (
            <div key={item.AssetId}>
              <DasboardCard item={item} />
            </div>
          ) : null,
        )}
      </Row>
    </Dashboard>
  );
};

export default DasboardContent;
