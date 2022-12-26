
import Header from './SidebarHeader/SidebarHeader'
import SidebarNav from './SidebarNav/SidebarNav';
import FolderHeader from './FolderHeader/FolderHeader';
import MultiSelectTreeView from './SidebarFolder/MultiSelectTreeView';
const Sidebar = () => {
    return <>
       <Header />
			<SidebarNav />
			<FolderHeader />
			<MultiSelectTreeView />
    </>
}

export default Sidebar; 