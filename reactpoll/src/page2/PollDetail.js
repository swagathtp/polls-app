import React from "react";
import VotePollBtn from "./VotePollBtn";
import "./PollDetail.css";
import Pie from "./Pie";
import Maincomp2 from "./Maincomp2";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import './Votebtn.css';
import { LinearProgress } from "@mui/material";


function PollDetail() {
  const [loading, setLoading] = useState(true);
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  // console.log(id);
  const [Polls, setPoll] = useState(null);
  // let Question=Polls["Question"]
  // console.log(Question)
  useEffect(() => {
    setLoading(true)
    fetch(`http://127.0.0.1:8000/polls/${id}`)
      .then((Response) => Response.json())
      .then((data) => {
        setPoll(data.data);
        setLoading(false)
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, [id]); 
  return (
    <div className="PollDetail">
      <div className="head">{Polls? Polls["Question"]:null}</div>
      <div>
      <VotePollBtn Polls={Polls} />
      </div>
      <div>
        {loading ? (<LinearProgress style={{width:'50%',marginLeft:'100px',marginTop:'100px'}}/>):
      (<Maincomp2 Polls={Polls}/>)}
      </div>
      <Pie/>
      </div>
  );
}

export default PollDetail;
