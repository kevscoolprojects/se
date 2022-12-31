import new_folder from "@se/icons/svg/new_folder.svg";
import action_download_stroke from "@se/icons/svg/action_download_stroke.svg";
import electricity_polarity_positive_plus from "@se/icons/svg/electricity_polarity_positive_plus.svg";
import action_filter from "@se/icons/svg/action_filter.svg";
import more from "@se/icons/svg/more.svg";
import SearchModal from "./SearchModel";

import { styled } from "@mui/system";

const Navbar = styled("div")({
  width: "100%",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: " 1px solid #ccc",
});

const NavLeft = styled("div")({
  marginLeft: "15px",
});

const NavRight = styled("div")({
  display: "flex",
  marginRight: "15px",
});

const Image = styled("img")({
  margin: "0 3px",
});

const SidebarNav = () => {
  return (
    <Navbar>
      <NavLeft>
        <Image src={new_folder} width="26px" height="26px" />
        <Image src={action_download_stroke} width="26px" height="26px" />
        <Image src={more} width="26px" height="26px" />
        <Image
          src={electricity_polarity_positive_plus}
          width="26px"
          height="26px"
        />
      </NavLeft>
      <NavRight>
        <Image src={action_filter} width="26px" height="26px" />
        <SearchModal />
      </NavRight>
    </Navbar>
  );
};

export default SidebarNav;
