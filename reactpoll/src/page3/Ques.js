import React from 'react'
import './Sub.css';
function Ques({Polls}) {
  console.log(Polls)
  // let question=Polls.Question
  // console.log(question)
  return (
    <text style={{fontSize:'35px',marginLeft:'35px',textAlign:"left"}}>{Polls.Question} ?</text>
  )
}

export default Ques