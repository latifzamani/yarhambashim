import { Box, Button, Container, IconButton, Typography } from "@mui/material"
import video1 from '../../assets/videos/1.mp4';
import image1 from '../../assets/images/23.jpeg';
import { Link } from "react-router-dom";
import { ArrowCircleLeft, ArrowCircleRight, ArrowRightRounded, DateRange, EventNote, HomeMaxOutlined, HomeOutlined, HomeSharp, LocalHospital, Medication, PlayCircle, SchoolSharp, TitleSharp, VideoLabel } from "@mui/icons-material";
import { useState } from "react";
import Events from "../Components/Events";
import BigImage2 from "../Components/BigImage2";
import Supporters from "../Components/Supporters";
import { PieChart } from "@mui/x-charts";
// import video1 from '../../assets/images/23.jpeg';
function Home() {
  const [playVideo, setPlayVideo] = useState(false);
  const [playVideo2, setPlayVideo2] = useState(false);



  const projects = [
    { img: image1, title: 'Weekly Excursions', subtitle: 'This Weekly ecvursions is the most important...', url: '/' },
    { img: image1, title: 'Weekly Excursions', subtitle: 'This Weekly ecvursions is the most important...', url: '/' },
    { img: image1, title: 'Weekly Excursions', subtitle: 'This Weekly ecvursions is the most important...', url: '/' },
  ]

  const valueFormatter = (item) => `${item.value}%`;

  const handlePlayVideo = () => {
    setPlayVideo(!playVideo);
  }

  const handlePlayVideo2 = () => {
    setPlayVideo2(!playVideo2);
  }
  return (
    <Box sx={{ padding: '5vh' }}>
      {/* Part 1 */}
      <Box sx={{ backgroundColor: '', width: '100%', height: '80vh', backgroundImage: 'url()', position: 'relative' }} onClick={handlePlayVideo}>
        <video controls={playVideo} autoPlay={playVideo} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1, objectFit: 'cover', borderRadius: '1%' }}>
          <source src={video1} type="video/mp4" />
        </video>
        {!playVideo && (
          <Box sx={{ zIndex: 2, paddingY: '20vh', paddingX: '10vh' }}>
            <Typography sx={{ zIndex: 2, position: 'relative', backdropFilter: 'blur(20px)', padding: '20px', marginBottom: '3vh', fontSize: { xs: '20px', sm: '40px', md: '40px' } }}>
              Inclusive Care for Children With Special Needs...
            </Typography>
            <Typography sx={{ zIndex: 2, position: 'relative', display: 'flex', gap: 4, flexDirection: 'row' }}>
              <Button variant="contained" sx={{ backgroundColor: 'green' }}>
                <Link to='/' style={{ textDecorationLine: 'none', color: 'white' }}>What We Do</Link>
              </Button>
              <Button variant="outlined" onClick={handlePlayVideo} startIcon={<PlayCircle sx={{ color: 'white' }} />} sx={{ color: "white" }}>
                Play Video
              </Button>
            </Typography>
          </Box>
        )}
      </Box>
      {/* Part 2 */}

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: '', gap: 1, width: '100%', height: '100vh', backgroundColor: '', position: '', marginY: '10vh' }}>
        <Box sx={{ display: 'flex', padding: '5vh', flexDirection: 'row', justifyContent: 'space-between', gap: 4, width: '100%', height: '70vh', backgroundColor: '', position: 'relative', marginTop: '0vh' }}>
          <Box sx={{ width: '60%', backgroundColor: '' }}>
            <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
            <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}> KNOW ABOUT US</Typography>
            <Box sx={{ marginLeft: '12vh' }}>
              <Typography variant="h6">We provide a better place for children</Typography>
              <Typography variant="body1">We provide a better place for children this is a descriptio We provide a better place for children this is a descriptio We provide a better place for children this is a descriptio We provide a better place for children this is a descriptio We provide a better place for children</Typography>
              <Button variant="contained" sx={{ backgroundColor: 'rgb(242,200,75)', marginY: '5vh' }}>
                <Link to='/' style={{ textDecorationLine: 'none', color: 'black' }}>
                  Learn More
                </Link>
              </Button>

            </Box>
          </Box>
          <Box sx={{ backgroundColor: '', width: '40%', height: '60vh', backgroundImage: 'url()', position: 'relative' }} onClick={handlePlayVideo2}>
            <video controls={playVideo2} autoPlay={playVideo2} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1, objectFit: 'cover', borderRadius: '1%' }}>
              <source src={video1} type="video/mp4" />
            </video>
            {!playVideo2 && (
              <Box sx={{ zIndex: 2, paddingY: '20vh', paddingX: '10vh' }}>

                <Typography sx={{ zIndex: 2, position: 'relative', display: 'flex', gap: 4, flexDirection: 'row' }}>
                  <IconButton variant="outlined" onClick={handlePlayVideo2} sx={{ color: "white" }}>
                    <PlayCircle fontSize="large" sx={{ color: 'white' }} />
                  </IconButton>
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
        <Supporters />
      </Box>
      {/* Part 3 */}

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: 'rgb(252,237,198)', position: '', padding: '5vh' }}>
        <Box sx={{ width: '60%', backgroundColor: '' }}>
          <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
          <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}> WHAT WE DO</Typography>
          <Box sx={{ marginLeft: '12vh' }}>
            <Typography variant="h6">Some services we provide for our children</Typography>
            <Typography variant="body1">We provide a better place for children this is a descriptio  better place for children this is a descriptio We provide a better place for children this is a </Typography>
            <Box sx={{ display: 'flex', margin: '2vh', flexDirection: 'column' }}>
              <Typography variant="h6">
                <HomeSharp /> Family Support
              </Typography>
              <Typography sx={{ marginLeft: '4vh' }}>
                This is the subtitle for this part of the page...
              </Typography>
              <Typography variant="h6">
                <LocalHospital /> Health benefits
              </Typography>
              <Typography sx={{ marginLeft: '4vh' }}>
                This is the subtitle for this part of the page...
              </Typography>
              <Typography variant="h6">
                <SchoolSharp /> Scholarships
              </Typography>
              <Typography sx={{ marginLeft: '4vh' }}>
                This is the subtitle for this part of the page...
              </Typography>
              <Typography variant="h6">
                <Medication /> Therapy
              </Typography>
              <Typography sx={{ marginLeft: '4vh' }}>
                This is the subtitle for this part of the page...
              </Typography>
            </Box>

          </Box>
        </Box>
        <Box sx={{ backgroundColor: '', width: '40%', height: '60vh', }}>
          <img src={image1} style={{ width: '100%', height: '100%', borderRadius: '2%' }} />
        </Box>
      </Box>
      {/* Part 4 */}
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: '', position: '', marginTop: '5vh', padding: '5vh' }}>
        <Box sx={{ width: '60%', backgroundColor: '' }}>
          <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
          <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}>PROJECTS WE HAVE DONE</Typography>
          <Box sx={{ marginLeft: '12vh' }}>
            <Typography variant="h6">We are creating a place where children with special needs can thrive</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'space-around' }}>
          {projects.map((item, index) => (
            <Box key={index} sx={{ width: '30vh', padding: '3vh', height: '30vh', backgroundImage: `url(${item.img})`, borderRadius: '10%' }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="" sx={{ fontSize: '12px' }}>{item.subtitle}</Typography>
              <Button variant="contained" size="small" sx={{ backgroundColor: 'white', marginY: '5vh' }}>
                <Link to={item.url} style={{ textDecorationLine: 'none', color: 'black' }}>
                  Learn More
                </Link>
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
      {/* Part 5 */}
      <Box sx={{ backgroundColor: 'black', display: 'flex',justifyContent:'space-between',gap:4, height: '50vh', paddingX: '10vh',paddingY:'4vh', marginTop: '7vh' }}>
        <Box>
          <Typography sx={{ color: 'white', fontSize: '20px' }}>How we spend your donation</Typography>
          <Typography sx={{ color: 'white', fontSize: '14px' }}>This description about How we spend your donation and how to solve it ...</Typography>
        </Box>
        <Box sx={{ backgroundColor: '', }}>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: 'Kabul', color: 'green' },
                  { id: 1, value: 30, label: 'Herat' },
                  { id: 2, value: 30, label: 'Mazar' },
                  { id: 3, value: 30, label: 'Kandar' },
                ],
                highlightScope: { fade: 'global', highlight: 'item' },
                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                valueFormatter,
              }
            ]}
            width={500} height={300}
            slotProps={{
              legend: { 
                hidden: false,position:{vertical:'middle',horizontal:'left'}, 
                direction:'column',
                padding:-20,
                itemMarkHeight:22,
                markGap:-40,
                labelStyle: {
                  fontSize: 20,
                  fill: 'white',
                },
              }  // Using slotProps to hide the legend
            }}
            p
          />
        </Box>

      </Box>
      {/* Part 6 */}
      <BigImage2 />

      {/* Part 7 */}
      <Events />

    </Box>


  )
}

export default Home