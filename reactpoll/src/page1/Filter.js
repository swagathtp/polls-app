import React from "react";
import { useState,useEffect } from "react";
import{useContext} from 'react';
import TagsContext from "./Context";
import Button from "@mui/material/Button";
import './Bar.css';
import { LinearProgress } from "@mui/material";


function Filter() {
  const [loading, setLoading] = useState(true);
  const [Tags, setTags] = useState([]);
  useEffect(() => {
    setLoading(true)
    fetch("http://127.0.0.1:8000/polls/tags")
      .then((Response) => Response.json())
      .then((data) => {
        setTags(data);
        // console.log(data.data)
        setLoading(false)
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

  const {selectedtags, setSelectedtags} = useContext(TagsContext)
  const [checkedtags,setCheckedtags]=useState([])
    const checkboxchange=(event)=>{
    const{checked,value}=event.target;
    setCheckedtags((prevTags)=>{
      let updatedtag;
      if(checked){
        updatedtag=[...prevTags,value]
      }
      else{
        updatedtag=prevTags.filter((Tags)=>Tags != value)
      }
      return updatedtag
    })
      }
      const filterbytags=()=>{
        setSelectedtags(checkedtags);
      }  

    
  // console.log(Tags)
  console.log(selectedtags)
  return (
    <div>
    {loading ?(<div className="bar" style={{ backgroundColor: "#e3f2fd" }}><LinearProgress style={{marginTop:'210px',marginLeft:'0px',width:'100%',backgroundColor:'#e3f2fd'}} /></div>):
    (<div className="bar" style={{ backgroundColor: "#e3f2fd" }}>
      {Tags.map((item,index) =>(
        <filter key={index}>
          <input type="checkbox" value={item} onChange={checkboxchange}/>
              <label style={{marginLeft:'8px'}}>{capitalizeFirstLetter(item)}</label>
              <br></br>
              <br></br>
              <br></br>
        </filter>))}
      <br></br>
      <Button style={{backgroundColor:"white"}} onClick={filterbytags} variant="outlined">filter by tags</Button>
      <br></br>
    </div>)}
    </div>
  );
 } 

export default Filter;
