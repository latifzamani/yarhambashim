import { Box, Button, Typography } from "@mui/material"
import BigImage2 from "../Components/BigImage2"
import Events from "../Components/Events"
import image1 from '../../assets/images/23.jpeg';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AxiosAPI from "../Components/axios";
import { useTranslation } from "react-i18next";
import {motion} from 'framer-motion';
import {fadeIn} from '../Components/variants';


function Media() {

    const[projects,setProjects]=useState([]);
    const {t}=useTranslation();

    const FetchData=()=>{
    AxiosAPI.get('/projects/show').then((data)=>{
        setProjects(data.data);
        console.log(data.data);

    }).catch((error)=>{
        console.log(error);

    })
}

    useEffect(()=>{
        FetchData();
    },[]);
    const MotionBox= motion(Box);

  return (
    <Box sx={{ padding: {xs:'1vh',sm:'5vh',md:'5vh'} }}>
      <Box sx={{ display: 'flex', flexDirection: {xs:'column',sm:'row',md:'row'}, justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: 'rgb(252,237,198)', position: '', padding: '1vh' }}>
        <MotionBox
        variants={fadeIn('right',0.5)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
         sx={{ width: {xs:'100%',sm:'60%',md:'60%'}, backgroundColor: '', padding: '4vh' }}>
          <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
          <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}>{t('topnews')}</Typography>
          <Box sx={{ marginLeft: {xs:'1vh',sm:'12vh',md:'12vh'} }}>
            <Typography variant="h6">{t('topnewstitle')}</Typography>
            <Typography variant="body1">{t('topnewsdes')}</Typography>
            <Button variant="contained" sx={{ backgroundColor: 'rgb(242,200,75)', marginY: '5vh' }}>
              <Link to='/' style={{ textDecorationLine: 'none', color: 'black' }}>
              {t('readmore')}
              </Link>
            </Button>

          </Box>
        </MotionBox>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, padding: '2vh', backgroundColor: 'white', width: {xs:'100%',sm:'20%',md:'20%'}, height: {xs:'45vh',sm:'60vh',md:'60vh'}, overflowY: 'scroll', scrollbarWidth: 'none' }}>
          {projects.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-arround' ,gap:1}}>
              <img src={`${import.meta.env.VITE_API_BASE_URL}/storage/${item.photo1}`} style={{ width: '40%', height: '100%', borderRadius: '2%' }} />
              <Box>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="p" sx={{ color: 'gray' }}>{item.date}</Typography>
                <Typography variant="body1">{item.subtitle}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      {/* Donation Image */}
      <Box sx={{padding:'3vh'}}>
      <BigImage2 />
      </Box>
      {/* Events */}
      <MotionBox
      variants={fadeIn('up',0.5)}
      initial='hidden'
      whileInView={"show"}
      viewport={{once:false,amount:0.7}}
       sx={{padding:'3vh'}}>
      <Events />
      </MotionBox>
    </Box>
  )
}

export default Media
