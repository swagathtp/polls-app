import React from "react";
import Submitpoll from "./Button";
import Ques from "./Ques";
import { useLocation } from "react-router-dom";
import "./Sub.css";

function Vote() {
  const location = useLocation();
  const {Polls} = location.state;
  // console.log(Polls)
  return (
    <div className="home" style={{display:'grid',gridColumn:'100px 100px 100px 100px 100px'}}>
      <Ques Polls={Polls}/>
      <Submitpoll Polls={Polls} />
    </div>
  );
}

export default Vote;
