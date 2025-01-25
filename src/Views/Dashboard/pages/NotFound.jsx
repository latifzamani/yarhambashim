import { ArrowBack, ErrorOutline, HomeMaxOutlined, HomeOutlined } from '@mui/icons-material';
import {  Box, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Box>
        <Typography variant='h3' sx={{color:'red',margin:'20vh',textAlign:'center'}}>
         Not Found
        <Typography variant='h6' sx={{color:'red',margin:'0vh',textAlign:'center'}}>
            No Page with this URL
        </Typography>
            <Link to='/'>
        <Typography variant='h6' sx={{color:'green',textDecorationLine:'none',margin:'0vh',textAlign:'center'}}>
            <HomeOutlined/> back to home
        </Typography>
            </Link>
        </Typography>
    </Box>
  )
}

export default NotFound;
