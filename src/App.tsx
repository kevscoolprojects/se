import React from 'react';
import FolderHeader from './components/Sidebar/FolderHeader/FolderHeader';
import Sidebar from './components/Sidebar/Sidebar';
import MultiSelectTreeView from './components/Sidebar/SidebarFolder/MultiSelectTreeView';
import SidebarFolder from './components/Sidebar/SidebarFolder/SidebarFolder';
import Header from './components/Sidebar/SidebarHeader/SidebarHeader';
import SidebarNav from './components/Sidebar/SidebarNav/SidebarNav';

function App() {
	return (
		<>
			{/* All these components will go in soluion explorer component and renamed  where required */}
			<Sidebar/>
		</>
	);
}

export default App;