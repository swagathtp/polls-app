import React, { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { off, voted,msg,setSuccess } from '../page3/message'
import { Navigate, useNavigate } from 'react-router-dom';
import { Alert, AlertTitle, Box, CircularProgress, Stack } from "@mui/material";
import "./Box.css";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { nnNO } from "@mui/material/locale";
function QuesBox() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const[chkopt,setChkopt]=useState(false)
  const[chkques,setChkques]=useState(false)
  const [question, setQuestion] = useState("");
  
  const [alertvisible, setAlertvisible] = useState(false);
  const[help,setHelp]=useState(null)
  const [options, setOption] = useState([{ 0: "" }]);
  const [tags, setTags] = useState("");
  // const[alertmsg,setAlertmsg]=useState('Poll Created Successfull')
  const[loading,setLoading]=useState(false)
  const newtag = () => {
    return tags.split(",");
  };
  const addoption = () => {
    let abc = [...options, { [0]: "" }];
    setOption(abc);
  };
  const handlechange = (e, index) => {
    let newOptions = [...options];
    newOptions[index] = { [index]: e.target.value };
    setOption(newOptions);
  };
  const Value = options.map((option) => Object.values(option)[0]);
  let newobj = {};
  for (let i = 0; i < Value.length; i++) {
    newobj[Value[i]] = "0";
  }
  console.log(Value[0])
  const newpoll = { Question: question, OptionVote: newobj, Tags: newtag() };
  console.log(newpoll);
  const addPoll = () => {
    if(Value[0] && question){
    setLoading(true)
    fetch("http://127.0.0.1:8000/polls/", {
      method: "POST",
      body: JSON.stringify(newpoll),
    }).then((Response) => Response.json())
    .then((data) => {
      dispatch(off(true))
      console.log(data.success)
      dispatch(setSuccess(data.success))
      dispatch(msg(data.msg))
      console.log(data.msg)
      if(data.success){
        navigate('/')
      }
      setTimeout(() => {
        dispatch(off(false))
        navigate("/");
      },2000)
    })}else{
      if(question){
      setChkopt(true)
      setLoading(true)
      setHelp("*required")
      setTimeout(() => {
        setLoading(false)
      },1200)}else{
      setChkques(true)
      setLoading(true)
      setHelp("*required")
      setTimeout(() => {
        setLoading(false)
      },1200)
      }}
  };
  return (
    <div>
      <div className="box" style={{ backgroundColor: "#e3f2fd" }}>
        <h2 style={{marginLeft:"20px"}}>Question</h2>
        {chkques ?(
        <TextField
        error
        style={{marginTop:"-13px",scale:'86%',width:'59%'}}
          id="outlined-error-helper-text"
          size="small"
          onChange={(e) => setQuestion(e.target.value)}
          label="Question"
          variant="outlined"
          helperText={help}
        />):(<TextField
          style={{marginTop:"-13px",scale:'86%',width:'59%'}}
            id="outlined-error-helper-text"
            size="small"
            onChange={(e) => setQuestion(e.target.value)}
            label="Question"
            variant="outlined"
          />)}
        <br></br>
        <br></br>
        <br />
        <h3 style={{marginLeft:"20px"}}>Answer Options</h3>
        {options.map((option, index) => (
          <div key={option.key}>
            {chkopt ?(
            <TextField
            error
            style={{marginTop:"-13px",scale:'86%',width:'59%'}}
              id="outlined-basic"
              size="small"
              onChange={(e) => handlechange(e, index)}
              label={`Option ${index+1}`}
              variant="outlined"
              helperText="*Required"
            />):(<TextField
              style={{marginTop:"-13px",scale:'86%',width:'59%'}}
                id="outlined-basic"
                size="small"
                onChange={(e) => handlechange(e, index)}
                label={`Option ${index+1}`}
                variant="outlined"
              />)}
            <br></br>
            <br></br>
          </div>
        ))}
        <div className="btn">
          <Button
            className="btn"
            style={{ backgroundColor: "white",marginLeft:"20px" }}
            onClick={addoption}
            variant="outlined"
          >
            Add Option
          </Button>
        </div>
        <br></br>
        <br></br>
        <h4 style={{marginLeft:"20px"}}>Comma separated tags</h4>
        <TextField
        style={{marginTop:"-13px",scale:'86%',width:'59%'}}
          id="outlined-basic"
          size="small"
          onChange={(e) => setTags(e.target.value)}
          label="Tags"
          variant="outlined"
        />
        <br></br>
        <br />
      </div>
      <div className="button">
      {loading ? (<><Button disabled className="create" variant="contained">Submitpoll</Button><div style={{margin:'-47px 143px'}}><CircularProgress style={{scale:'40%',margin:'10px 10px'}}/></div></>)
        :(<Button className="create" onClick={addPoll} variant="contained">
          Create Poll
        </Button>)}
      </div>
    </div>
  );
}
export default QuesBox;
