import React from 'react'
import { navigate, useNavigate } from "react-router-dom";

function Headingmain() {
  const navigate=useNavigate();
  return (
    <div style={{overflow: 'auto',
      display:'flex',
      height: '40px',
      backgroundColor:"#bbdefb",
      width: '1300px',
      marginLeft: '10px',
      marginBottom:'10px',  
      padding: '50px'}}>
      <h1 style={{marginTop:"-1px",marginLeft:"-23px",fontSize:'250%'}}
      onClick={()=>navigate('/')}>Flyweight Polls</h1>
        </div>
  )
}

export default Headingmain