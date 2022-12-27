import Header from "./SidebarHeader/SidebarHeader";
import SidebarNav from "./SidebarNav/SidebarNav";
import FolderHeader from "./FolderHeader/FolderHeader";
import MultiSelectTreeView from "./SidebarFolder/MultiSelectTreeView";
const Sidebar = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <SidebarNav />
      <FolderHeader />
      <MultiSelectTreeView />
    </div>
  );
};

export default Sidebar;
