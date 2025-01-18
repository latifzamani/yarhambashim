import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import { Link } from "react-router-dom"
import image1 from '../../assets/images/23.jpeg';
import Slider from "react-slick";


// Import required slick carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../Styles/SlickStyle.css';
function ProjectsDone() {
  const projects = [
    { img: image1, title: 'Weekly Excursions', subtitle: 'This Weekly ecvursions is the most important...', url: '/projectreadmore' },
    { img: image1, title: 'Weekly Excursions', subtitle: 'This Weekly ecvursions is the most important...', url: '/' },
    { img: image1, title: 'Weekly Excursions', subtitle: 'This Weekly ecvursions is the most important...', url: '/' },
  ]

  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const S = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;
  // const FTrue=(projects.length() <2) ? false :true ;
  const setting = {
    className: 'center',
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: S,
    centerPadding: '60px',
    arrows: true,
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: '', position: '', marginTop: '5vh', padding: '5vh' }}>
      <Box sx={{ width: { xs:'100%',sm:'60%',md:'60%'}, backgroundColor: '' }}>
        <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
        <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}>PROJECTS WE HAVE DONE</Typography>
        <Box sx={{ marginLeft: { xs:'2vh',sm:'12vh',md:'12vh'} }}>
          <Typography variant="h6">We are creating a place where children with special needs can thrive</Typography>
        </Box>
      </Box>
      <Box className="slider-container" sx={{ position: 'relative', display: '', gap: 3, justifyContent: 'space-around' }}>
        <Slider {...setting}>
          {projects.map((item, index) => (
            <>
            <Box key={index} sx={{ width: { xs:'20vh',sm:'30vh',md:'30vh'}, padding: '3vh', height: '30vh', backgroundImage: `url(${item.img})`, borderRadius: '10%' }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="" sx={{ fontSize: '12px' }}>{item.subtitle}</Typography>
              <Button variant="contained" size="small" sx={{ backgroundColor: 'white', marginY: '5vh' }}>
                <Link to={item.url} style={{ textDecorationLine: 'none', color: 'black' }}>
                  Learn More
                </Link>
              </Button>
            </Box>
            <br/>
            </>
          ))}
        </Slider>
      </Box>
    </Box>
  )
}

export default ProjectsDone