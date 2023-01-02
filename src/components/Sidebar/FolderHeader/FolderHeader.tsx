import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styled } from "@mui/system";

const Header = styled("div")({
  width: "96%",
  height: "50px",
  display: "flex",
  alignItems: "center",
  margin: " 0 20px",
});
const Span = styled("span")({
  fontSize: "19px",
  marginRight: "10px",
});

const FolderHeader = () => {
  return (
    <Header>
      <Span>Nestle production line</Span>
      <MoreHorizIcon />
    </Header>
  );
};

export default FolderHeader;
