import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import './Bar.css';

function CreatePollBtn() {
  const navigate = useNavigate(); // Initialize useNavigate
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = () => {
    navigate('/createpoll');
  };



  return (
      <Button className='pollbtn' variant="contained" style={{marginBottom:'10px'}}  onClick={handleClick}>Create Poll</Button>
  );
}

export default CreatePollBtn;