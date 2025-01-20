import { ArrowCircleRight, DateRange, EventNote } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import AxiosAPI from "./axios";
import { useEffect, useState } from "react";

function Events() {

    const [events,setEvents]=useState([]);
    const FetchData=()=>{
        AxiosAPI.get('/events/show').then((data)=>{
            setEvents(data.data);
            console.log(data.data);

        }).catch((error)=>{
            console.log(error);

        })
    }

    useEffect(()=>{
        FetchData();
    },[]);
  return (
    <Box  sx={{marginY:'5vh'}}>
        <Box sx={{display:'flex',justifyContent:'start'}}>
          <Typography variant="p" sx={{display:'inline'}}>OUR Events</Typography>
          <Box sx={{display:'',width:'80%',height:'0.5vh',marginTop:'3vh',marginLeft:'3vh',backgroundColor:'black'}}></Box>
        </Box>
        <Box sx={{display:'flex',flexDirection:{ xs:'column',sm:'row',md:'row'},justifyContent:'center',gap:{ xs:0,sm:5,md:5}}}>
          {events.map((event,index)=>(
          <Box key={index} sx={{backgroundColor:'rgb(242,200,75)',width:{ xs:'35vh',sm:'40vh',md:'40vh'},height:'20vh',padding:'2vh',borderRadius:'4%',marginTop:'4vh'}}>
              <Typography variant="body1" sx={{paddingBottom:'1vh'}}>Next Event _______</Typography>
              <Typography variant="h6"><EventNote/> {event.title}</Typography>
              <Typography variant="h6" sx={{display:'inline'}}><DateRange/> {event.date}</Typography>
              <Typography variant="h6" sx={{display:'inline',float:'right'}}>
                <Link to={`${import.meta.env.VITE_API_FRONT_URL}/eventreadmore/${event.id}`}>
                <ArrowCircleRight fontSize="medium" sx={{color:'white',backgroundColor:'black',borderRadius:'100%'}}/>
                </Link>
              </Typography>

          </Box>
          ))}
        </Box>
        </Box>
  )
}

export default Events
