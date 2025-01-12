import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import image1 from '../../assets/images/23.jpeg';
import { GraphicEqOutlined, MonetizationOnOutlined, PendingActions, PeopleAltOutlined } from "@mui/icons-material";
import ProjectsDone from "../Components/ProjectsDone";
import BigImage2 from "../Components/BigImage2";
import Events from '../Components/Events';


function WhatWD() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: '', position: '', paddingY: '5vh', paddingX: '10vh' }}>
        <Box sx={{ width: '60%', backgroundColor: '' }}>
          <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
          <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}>WHAT WE DO</Typography>
          <Box sx={{ marginLeft: '12vh' }}>
            <Typography variant="h6">We are working cross country</Typography>
            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
              nulla, ut commodo diam libero vitae erat.</Typography>
          </Box>
        </Box>
        <Box sx={{ backgroundColor: '', width: '40%', height: '60vh', }}>
          <img src={image1} style={{ width: '100%', height: '100%', borderRadius: '2%' }} />
        </Box>
      </Box>
      <br />
      <Box sx={{ backgroundColor: 'rgb(252,237,198)', paddingY: '8vh', paddingX: { xs: '', sm: '10vh', md: '20vh' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}>
          <Box sx={{ width: '50%' }}>
            <PendingActions />
            <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>Family support</Typography>
            <Typography sx={{ marginX: '6vh' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <MonetizationOnOutlined />
            <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>Health benefits</Typography>
            <Typography sx={{ marginX: '6vh' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </Typography>
          </Box>
        </Box>
        <br />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}>
          <Box sx={{ width: '50%' }}>
            <PeopleAltOutlined />
            <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>Education </Typography>
            <Typography sx={{ marginX: '6vh' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <GraphicEqOutlined />
            <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>Basic amenities</Typography>
            <Typography sx={{ marginX: '6vh' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </Typography>
          </Box>
        </Box>
        <br />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}>
          <Box sx={{ width: '50%' }}>
            <PeopleAltOutlined />
            <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>Therapy </Typography>
            <Typography sx={{ marginX: '6vh' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <GraphicEqOutlined />
            <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>Public outreach</Typography>
            <Typography sx={{ marginX: '6vh' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Projects Done */}
      <ProjectsDone />
      {/* Donation Image */}
      <Box sx={{ marginX: '10vh', marginBottom: '5vh' }}>
        <BigImage2 />
      </Box>
      {/* Events */}
      <Box sx={{ marginX: '10vh', marginBottom: '5vh' }}>
        <Events />
      </Box>

    </>
  )
}

export default WhatWD