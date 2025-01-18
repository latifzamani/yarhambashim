import { Box, Typography, useMediaQuery } from "@mui/material"
import image1 from '../../assets/images/23.jpeg';
import Slider from "react-slick";

// Import required slick carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import '../../Styles/SlickStyle.css';


function Supporters() {
    const supporters=[image1,image1,image1,image1,];

    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const S = isSmallScreen ? 1 : isMediumScreen ? 2 : 2;
  // const FTrue=(projects.length() <2) ? false :true ;
  const settings = {
    autoplay: true,
    autoplaySpeed:500,
    className: 'center',
    centerMode: true,
    infinite: true,
    speed: 2000,
    slidesToShow: S,
    slidesToScroll: 1,
    centerPadding: '60px',
    arrows: false,
    dots: true,
    cssEase: 'linear'
  };
  
  return (
    <>
    <Box sx={{display:'flex',justifyContent:'start'}}>
          <Typography variant="p" sx={{display:'inline'}}>OUR SUPPORTERS</Typography>
          <Box sx={{display:'',width:'80%',height:'0.5vh',marginTop:'3vh',marginLeft:'3vh',backgroundColor:'black'}}></Box>  
        </Box>
        <Box className="slider-container" sx={{display:'',position:'relative',marginTop:'3vh',justifyContent:'space-around'}}>
          <Slider {...settings}>
            {supporters.map((item,index)=>(
              <>
              <img key={index} src={item} style={{width:'20vh',height:'10vh',borderRadius:'10%'}}/>
              <br/>
              </>
            ))
            }
            </Slider>
        </Box>
        </>
  )
}

export default Supporters