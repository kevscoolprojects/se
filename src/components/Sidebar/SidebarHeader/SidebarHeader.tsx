import { styled } from "@mui/system";

const Header = styled("div")({
  width: "100%",
  height: "50px",
  backgroundColor: "rgb(229, 229, 229)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const Span = styled("span")({
  fontSize: "19px",
  marginLeft: "20px",
});

const Typography = styled("p")({
  fontSize: "25px",
  marginRight: "20px",
});

const SidebarHeader = () => {
  return (
    <Header>
      <Span>System Explorer</Span>
      <Typography>K</Typography>
    </Header>
  );
};

export default SidebarHeader;
