import { useEffect, useState } from "react";
import React from "react";
import MainComp from "./MainComp";
import SideBar from "./SideBar";
import { TagsProvider } from "./Context";
import "./Grid.css";
import { Box, LinearProgress, Typography } from "@mui/material";
const Home = () => {
  const [selectedtags, setSelectedtags] = useState([]);
  // console.log(selectedtags)

  return (
    <TagsProvider value={{ selectedtags, setSelectedtags }}>
      <div class="grid-container">
        <div class="item sidebar">
        <SideBar/>
        </div>
        <div class="item tablemain">
        <MainComp />
        </div>
      </div>
    </TagsProvider>
  );
};

export default Home;
