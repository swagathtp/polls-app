import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Pie from "./Pie";
import "./Table.css";
import { Box, Typography } from "@mui/material";

function Maincomp2({ Polls }) {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  let total_vote = Polls.OptionVote;
  // console.log(total_vote)
  let option = Object.keys(total_vote);
  let vote = Object.values(total_vote);
  // console.log(option)
  // console.log(vote)

  const row = option.map((options, index) => ({
    id: index + 1,
    options: option[index],
    votes: vote[index],
  }));
  const columns = [
    { field: "id", headerName: "Number", flex: 1, maxWidth: 100 },
    {
      field: "options",
      headerName: "Options",
      maxWidth: 250,
      wminWidth: 300,
      flex: 2,
      renderCell: (params) => (
        
          <Box
            sx={{
              display: "flex",
            alignItems: "center",
            justifyContent: "left",
            height: "100%",
            }}
          >
        
          <Typography variant="body2">
            {capitalizeFirstLetter(params.value)}
          </Typography></Box>
      ),
    },
    { field: "votes", headerName: "Votes", maxWidth: 200 },
  ];
  const piedata = [
    ["option", "votes"],
    ...option.map((option, index) => [option, vote[index]]),
  ];
  return (
    <div>
      <div className="table">
        <DataGrid rows={row} columns={columns} />
      </div>
      <Pie data={piedata} />
    </div>
  );
}

export default Maincomp2;
