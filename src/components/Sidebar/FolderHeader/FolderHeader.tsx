import "./FolderHeader.css";
import hide_list_parameters from "@se/icons/svg/hide_list_parameters.svg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const FolderHeader = () => {
  return (
    <div className="folderHeader">
      <span>Nestle production line</span>
      <MoreHorizIcon />
    </div>
  );
};

export default FolderHeader;
