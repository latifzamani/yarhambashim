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
import LazyLoading from "./LazyLoading";
import { useTranslation } from "react-i18next";
function ProjectsDone() {

    const[projects,setProjects]=useState([]);
    const [loading, setLoading] = useState(true);
    const {t}=useTranslation();

    const FetchData=()=>{
    AxiosAPI.get('/projects/show').then((data)=>{
        setProjects(data.data);
        console.log(data.data);
        setLoading(false);
    }).catch((error)=>{
        console.log(error);

    })
}


  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const S = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;
  const FTrue=(projects.length<2) ? false :true ;
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
    <>
        {loading ?
            (
                <LazyLoading />
            ) :
             (

    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: '', position: '', marginTop: '5vh', padding: '5vh' }}>
      <Box sx={{ width: { xs:'100%',sm:'60%',md:'60%'}, backgroundColor: '' }}>
        <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
        <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}>{t('projectswehavedone')}</Typography>
        <Box sx={{ marginLeft: { xs:'2vh',sm:'12vh',md:'12vh'} }}>
          <Typography variant="h6">{t('projectswehavedonetitle')}</Typography>
        </Box>
      </Box>
      <Box className="slider-container" sx={{ position: 'relative', display: '', gap: 3, justifyContent: 'space-around' }}>
        <Slider {...setting}>
          {projects.map((item, index) => (
            <>
            <Box key={index} sx={{ width: { xs:'20vh',sm:'30vh',md:'30vh'}, padding: '3vh', height: '30vh', backgroundImage: `url(${import.meta.env.VITE_API_BASE_URL}/storage/${item.photo1})`, borderRadius: '10%',backgroundSize:'cover' }}>
              <Typography variant="h6" sx={{ backdropFilter: 'blur(20px)' ,color:'white'}}>{item.title}</Typography>
              <Typography variant="h6" sx={{ fontSize: '12px',backdropFilter: 'blur(20px)' ,color:'white' }}>{item.subtitle}</Typography>
              <Button variant="contained" size="small" sx={{ backgroundColor: 'white', marginY: '5vh' }}>
                <Link to={`/projectreadmore/${item.id}`} style={{ textDecorationLine: 'none', color: 'black' }}>
                  {t('learnmore')}
                </Link>
              </Button>
            </Box>
            <br/>
            </>
          ))}
        </Slider>
      </Box>
    </Box>
    )}
    </>
  )
}

export default ProjectsDone
