import React from "react";
import FolderHeader from "./components/Sidebar/FolderHeader/FolderHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DashboardMain from "./components/DashboardMain/DashboardMain";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3} sx={{ height: "100vh" }}>
            <Item>
              {" "}
              <Sidebar />
            </Item>
          </Grid>
          <Grid item xs={9}>
            <Item>
              <DashboardMain />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
