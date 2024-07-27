import { Alert, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { navigate, useNavigate } from "react-router-dom";
import './App.css';

function Alertpg3() {
  const navigate = useNavigate();
  const success = useSelector((state) => state.alert.success);
  const message = useSelector((state) => state.alert.message);
  const show = useSelector((state) => state.alert.show);

  // console.log(value)
  // console.log(success)
  // const successvalue = useSelector((state) => state.success);
  // console.log(successvalue);
  // return(<></>)
  return (
    <div>
      {show ? (
        <Alert
          className="alert"
          severity={success ? "success" : "error"}
        >
          {message}
        </Alert>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Alertpg3;
