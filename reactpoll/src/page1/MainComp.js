import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import TagsContext from "./Context";
import { DataGrid } from "@mui/x-data-grid";
import { Box, LinearProgress, ThemeProvider, Typography } from "@mui/material";
import "./Table1.css";
import { Margin } from "@mui/icons-material";

function MainComp() {
  const [loading, setLoading] = useState(true);
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const { selectedtags, setSelectedtags } = useContext(TagsContext);
  console.log(selectedtags);
  const [Polls, setPoll] = useState([]);
  console.log(selectedtags);
  useEffect(() => {
    setLoading(true);
    const url =
      selectedtags.length == 0
        ? "http://127.0.0.1:8000/polls/"
        : `http://localhost:8000/polls?tags=${selectedtags.join(",")}`;
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        setPoll(data.data);
        // console.log(data.data)
        setLoading(false);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, [selectedtags]);
  const navigate = useNavigate();
  const columns = [
    { field: "number", headerName: "Number", flex: 1, maxWidth: 100 },
    {
      field: "question",
      headerName: "Poll Question",
      minWidth: 150,
      maxWidth: 550,
      flex: 1,
      renderCell: (params) => (
        <Box
          sx={{
            whiteSpace: "normal",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            textAlign: "left",
            height: "100%",
          }}
        >
          <Typography variant="body2">
            {capitalizeFirstLetter(params.value)}
          </Typography>
        </Box>
      ),
    },
    {
      field: "votes",
      headerName: "Votes",
      minWidth: 50,
      maxwidth: 50,
      flex: 0,
    },
    {
      field: "tag",
      headerName: "Tags",
      minWidth: 100,
      maxWidth: 130,
      flex: 1,
      renderCell: (params) => (
        <Box
          sx={{
            whiteSpace: "normal",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            display: "grid",
            alignItems: "center",
            justifyContent: "left",
            textAlign: "center",
            height: "100%",
          }}
        >
          {params.value.split(",").map((tag, index) => (
            <Typography key={index} variant="body2">
              {capitalizeFirstLetter(tag.trim())}
            </Typography>
          ))}
        </Box>
      ),
    },
  ];
  const row = Polls.map((poll, index) => ({
    id: poll.Questionid,
    number: index + 1,
    question: poll.Question,
    votes: poll.Totalvote,
    tag: poll.Tags.join(","),
  }));

  return (
    <div >
      {loading ? (
        < LinearProgress style={{marginTop:'270px'}} />
        
      ) : (
        <DataGrid
        style={{height:'30%',gridTemplateColumns:'min-columns auto'}}
          rows={row}
          columns={columns}
          onRowClick={(params) => navigate(`/poll?id=${params.row.id}`)}
          rowHeight={70}
          getRowId={(row) => row.id}
        />
      )}
    </div>
  );
}

export default MainComp;
