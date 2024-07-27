import { useEffect, useState } from "react";
import React from "react";
import Filter from "./Filter";
import CreatePollBtn from "./CreatePollBtn";
import { blue, red } from "@mui/material/colors";
function SideBar() {
  const [Polls, setPoll] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/polls/")
      .then((Response) => Response.json())
      .then((data) => {
        setPoll(data.data);
        //     data.data.forEach(polls=>{
        //     setPoll(polls)
        //     // console.log(polls)
        //  });
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);
  
  return (
    <div >
      <CreatePollBtn />
      <Filter/>
    </div>
  );
}

export default SideBar;
