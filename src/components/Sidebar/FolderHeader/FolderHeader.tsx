import './FolderHeader.css';
import hide_list_parameters from '@se/icons/svg/hide_list_parameters.svg'

const FolderHeader = () => {
    return <div className="folderHeader">
        <span>
            Nestle production line
        </span>
        <img src={hide_list_parameters} width='26px' height='26px' />

        
    </div>
}

export default FolderHeader; 