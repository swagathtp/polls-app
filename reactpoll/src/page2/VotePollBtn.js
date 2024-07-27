import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Padding } from "@mui/icons-material";
import './Vote.css';


function VotePollBtn({Polls}) {
  // console.log(Polls)
  const navigate = useNavigate();
  return <Button className="vote" style={{margin:'30px',marginLeft:'40px'}} onClick={() => navigate(`/vote?id=${Polls.Questionid}`, { state: {Polls} })} variant="contained">Vote on this Poll</Button>;
}
export default VotePollBtn;
