import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import { Link } from "react-router-dom"
import image1 from '../../assets/images/23.jpeg';
import Slider from "react-slick";


// Import required slick carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../Styles/SlickStyle.css';
import { useEffect, useState } from "react";
import AxiosAPI from "./axios";
import { useTranslation } from "react-i18next";
function ProjectImages({id}) {

    const[images,setImages]=useState([]);
    const {t}=useTranslation();
    const FetchData=()=>{
    AxiosAPI.get(`/projectImages/${id}/show`).then((data)=>{
        setImages(data.data);
        console.log(data.data);

    }).catch((error)=>{
        console.log(error);

    })
}


  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const S = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;
  const FTrue=(images.length<2) ? false :true ;
  const setting = {
    className: 'center',
    centerMode: true,
    infinite: FTrue,
    speed: 500,
    slidesToShow: S,
    centerPadding: '60px',
    arrows: true,
  }

  useEffect(()=>{
    FetchData();
  },[]);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: '', position: '', marginTop: '5vh', padding: '5vh' }}>
      <Box sx={{ width: { xs:'100%',sm:'60%',md:'60%'}, backgroundColor: '' }}>
        <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
        <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}>{t('projectimages')}</Typography>
        <Box sx={{ marginLeft: { xs:'2vh',sm:'12vh',md:'12vh'} }}>
          <Typography variant="h6">{t('projectimagest')}</Typography>
        </Box>
      </Box>
      <Box className="slider-container" sx={{ position: 'relative', display: '', gap: 3, justifyContent: 'space-around' }}>
        <Slider {...setting}>
          {images.map((item, index) => (
            <>
            <Box key={index} sx={{ width: { xs:'20vh',sm:'30vh',md:'30vh'}, padding: '3vh', height: '30vh', backgroundImage: `url(${import.meta.env.VITE_API_BASE_URL}/storage/${item.photo})`, borderRadius: '10%',backgroundSize:'cover' }}/>
            <br/>
            </>
          ))}
        </Slider>
      </Box>
    </Box>
  )
}

export default ProjectImages;
