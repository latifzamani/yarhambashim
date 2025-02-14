import { Box, Typography } from "@mui/material"
import image1 from '../../assets/images/y5.jpg';
import { GraphicEqOutlined, MonetizationOnOutlined, PendingActions, PeopleAltOutlined } from "@mui/icons-material";
import ProjectsDone from "../Components/ProjectsDone";
import BigImage2 from "../Components/BigImage2";
import Events from '../Components/Events';
import { useTranslation } from "react-i18next";
import {motion} from 'framer-motion';
import {fadeIn} from '../Components/variants';


function WhatWD() {
    const {t}=useTranslation();
    const MotionBox= motion(Box);

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: {xs:'column',sm:'row',md:'row'}, justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: '', position: '', paddingY: '5vh', paddingX: {xs:'5vh',sm:'10vh',md:'10vh'} }}>
        <MotionBox
        variants={fadeIn('right',0.5)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
         sx={{ width: {xs:'100%',sm:'60%',md:'60%'}, backgroundColor: '' }}>
          <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
          <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}>{t('whatwedo')}</Typography>
          <Box sx={{ marginLeft: {xs:'2vh',sm:'12vh',md:'12vh'} }}>
            <Typography variant="h6">{t('title1')}</Typography>
            <Typography variant="body1">{t('des1')}</Typography>
          </Box>
        </MotionBox>
        <MotionBox
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
        sx={{ backgroundColor: '', width: {xs:'100%',sm:'40%',md:'40%'}, height: {xs:'40vh',sm:'60vh',md:'60vh'}, }}>
          <img src={image1} style={{ width: '100%', height: '100%', borderRadius: '2%' }} />
        </MotionBox>
      </Box>
      <br />
      <MotionBox
      variants={fadeIn('up',0.5)}
      initial='hidden'
      whileInView={"show"}
      viewport={{once:true,amount:0.7}}
       sx={{ backgroundColor: 'rgb(252,237,198)', paddingY: '8vh', paddingX: { xs: '5vh', sm: '10vh', md: '20vh' } }}>
        <Box sx={{ display: 'flex',flexDirection:{xs:'column',sm:'row',md:'row'} ,justifyContent: 'space-between', gap: 5 }}>
          <Box sx={{ width: {xs:'100%',sm:'50%',md:'50%'} }}>
            <PendingActions />
            <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>{t('title1')}</Typography>
            <Typography sx={{ marginX: '6vh' }}>{t('des1')}
            </Typography>
          </Box>
          <Box sx={{ width: {xs:'100%',sm:'50%',md:'50%'} }}>
            <MonetizationOnOutlined />
            <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>{t('title1')}</Typography>
            <Typography sx={{ marginX: '6vh' }}>{t('des1')}</Typography>
          </Box>
        </Box>
        <br />
        <Box sx={{ display: 'flex',flexDirection:{xs:'column',sm:'row',md:'row'} , justifyContent: 'space-between', gap: 5 }}>
          <Box sx={{ width: {xs:'100%',sm:'50%',md:'50%'} }}>
            <PeopleAltOutlined />
            <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>{t('title1')}</Typography>
            <Typography sx={{ marginX: '6vh' }}>{t('des1')}</Typography>
          </Box>
          <Box sx={{ width: {xs:'100%',sm:'50%',md:'50%'} }}>
            <GraphicEqOutlined />
            <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>{t('title1')}</Typography>
            <Typography sx={{ marginX: '6vh' }}>{t('des1')}</Typography>
          </Box>
        </Box>
        <br />
        <Box sx={{ display: 'flex',flexDirection:{xs:'column',sm:'row',md:'row'} , justifyContent: 'space-between', gap: 5 }}>
          <Box sx={{ width: {xs:'100%',sm:'50%',md:'50%'} }}>
            <PeopleAltOutlined />
            <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>{t('title1')}</Typography>
            <Typography sx={{ marginX: '6vh' }}>{t('des1')}</Typography>
          </Box>
          <Box sx={{ width: {xs:'100%',sm:'50%',md:'50%'} }}>
            <GraphicEqOutlined />
            <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>{t('title1')}</Typography>
            <Typography sx={{ marginX: '6vh' }}>{t('des1')}</Typography>
          </Box>
        </Box>
      </MotionBox>
      {/* Projects Done */}
      <ProjectsDone />
      {/* Donation Image */}
      <MotionBox
        variants={fadeIn('up',0.5)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once:true,amount:0.7}}

      sx={{ marginX:{xs:'5vh',sm:'10vh',md:'10vh'} , marginBottom: '5vh' }}>
        <BigImage2 />
      </MotionBox>
      {/* Events */}
      <Box sx={{ marginX: {xs:'5vh',sm:'10vh',md:'10vh'}, marginBottom: '5vh' }}>
        <Events />
      </Box>

    </>
  )
}

export default WhatWD
