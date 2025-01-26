import { Box, Typography } from "@mui/material"
import image1 from '../../assets/images/y5.jpg';
import { GraphicEqOutlined, MonetizationOnOutlined, PendingActions, PeopleAltOutlined } from "@mui/icons-material";
import ProjectsDone from "../Components/ProjectsDone";
import BigImage2 from "../Components/BigImage2";
import Events from '../Components/Events';
import { useTranslation } from "react-i18next";


function WhatWD() {
    const {t}=useTranslation();
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: {xs:'column',sm:'row',md:'row'}, justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: '', position: '', paddingY: '5vh', paddingX: {xs:'5vh',sm:'10vh',md:'10vh'} }}>
        <Box sx={{ width: {xs:'100%',sm:'60%',md:'60%'}, backgroundColor: '' }}>
          <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
          <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}>{t('whatwedo')}</Typography>
          <Box sx={{ marginLeft: {xs:'2vh',sm:'12vh',md:'12vh'} }}>
            <Typography variant="h6">{t('title1')}</Typography>
            <Typography variant="body1">{t('des1')}</Typography>
          </Box>
        </Box>
        <Box sx={{ backgroundColor: '', width: {xs:'100%',sm:'40%',md:'40%'}, height: {xs:'40vh',sm:'60vh',md:'60vh'}, }}>
          <img src={image1} style={{ width: '100%', height: '100%', borderRadius: '2%' }} />
        </Box>
      </Box>
      <br />
      <Box sx={{ backgroundColor: 'rgb(252,237,198)', paddingY: '8vh', paddingX: { xs: '5vh', sm: '10vh', md: '20vh' } }}>
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
      </Box>
      {/* Projects Done */}
      <ProjectsDone />
      {/* Donation Image */}
      <Box sx={{ marginX:{xs:'5vh',sm:'10vh',md:'10vh'} , marginBottom: '5vh' }}>
        <BigImage2 />
      </Box>
      {/* Events */}
      <Box sx={{ marginX: {xs:'5vh',sm:'10vh',md:'10vh'}, marginBottom: '5vh' }}>
        <Events />
      </Box>

    </>
  )
}

export default WhatWD
