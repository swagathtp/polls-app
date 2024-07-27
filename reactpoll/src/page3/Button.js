// import React from "react";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import "./Sub.css";
import { Alert, AlertTitle, CircularProgress, Stack } from "@mui/material";
import { off, voted,msg,setSuccess } from "./message";
import { siLK } from "@mui/material/locale";
function Submitpoll({ Polls }) {
  const[loading,setLoading]=useState(false)
  const navigate = useNavigate();
  const [data,SetData]=useState()
  const[severity,setServerity]=useState('success')
  const[alertmsg,setAlertmsg]=useState(null)
  // const msg = useSelector((state) => state.message.value)
  const dispatch = useDispatch()
  const [selectedValue, setSelectedValue] = useState(null);
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  console.log(selectedValue);
  const body = {
    incrementOption: selectedValue,
  };
  
  const addVote = () => {
    setLoading(true)
    if(selectedValue){
      fetch(`http://127.0.0.1:8000/polls/${Polls["Questionid"]}/`, {
      method: "PUT",
      body: JSON.stringify(body)
    }).then((Response) => Response.json())
    .then((data) => {
      dispatch(off(true))
      console.log(data.success)
      dispatch(setSuccess(data.success))
      dispatch(msg(data.msg))
      if(data.success){
        navigate('/')
      }
      setTimeout(() => {
         dispatch(off(false))
         setLoading(false);
      },2000);
    })
    .catch((e) => {
      console.log("error", e);
    })
    }else{
      dispatch(off(true))
      dispatch(setSuccess(false))
      dispatch(msg("Please select any options"))
      setLoading(true)
      setTimeout(() => {
        dispatch(off(false))
        setLoading(false)
      },1200);}}
  
  let total_vote = Polls.OptionVote;
  let options = Object.keys(total_vote);
  return (
    <div className="sub">
      {options.map((option, index) => (
        <div key={index}>
          <br></br>
          <input
          style={{scale:"150%"}}
            type="radio"
            id={option}
            name="polls_options"
            value={option}
            onChange={handleChange}
          />{" "}
          <label className="radio" htmlFor={option}>
            {capitalizeFirstLetter(option)}
          </label>
        </div>
      ))}
      <br></br>
      <div>
        {loading ? (<><Button disabled variant="contained">Submitpoll</Button><div style={{margin:'-42px 124px'}}><CircularProgress style={{scale:'40%'}}/></div></>):
        (<><Button onClick={addVote} variant="contained">
          submit poll
        </Button></>)}
      </div>
    </div>
  );
}

export default Submitpoll;
