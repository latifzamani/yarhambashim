import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Tab, Typography } from "@mui/material"
import image1 from '../../assets/images/y4.jpg';
import { Link } from "react-router-dom";
import BigImage2 from "../Components/BigImage2";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import SendMessage from "../Components/SendMessage";
import { useTranslation } from "react-i18next";
import {motion} from 'framer-motion';
import {fadeIn} from '../Components/variants';

// import TabContext from '@mui/lab';
function Donation() {

    const [tabValue, setTabValue] = useState(1);
    const [openDialog,setOpenDialog]=useState(false);
    const {t}=useTranslation();


    const handleTabValue = (e, newValue) => {
        setTabValue(newValue);
    }
    const handleDailog=()=>{
        setOpenDialog(!openDialog);
    }
    const MotionBox= motion(Box);

    return (
        <>
            <Box sx={{ padding: '0vh' }}>
                <Box sx={{ display: 'flex', flexDirection:{xs:'column',sm:'row',md:'row'}, justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: 'rgb(252,237,198)', position: '', padding: '5vh' }}>
                    <MotionBox
                    variants={fadeIn('right',0.5)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{once:true,amount:0.7}}

                     sx={{ width: {xs:'100%',sm:'60%',md:'60%'}, backgroundColor: '' }}>
                        <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
                        <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}>{t('donation')}</Typography>
                        <Box sx={{ marginLeft:{xs:'2vh',sm:'12vh',md:'12vh'} }}>
                            <Typography variant="h6">{t('donationt')}</Typography>
                            <Typography variant="body1">{t('donationdes')}</Typography>
                            <Link to='https://gofund.me/247bb294' target="_blank">
                                <Button variant="contained"  sx={{ backgroundColor: 'rgb(242,200,15)', textDecorationLine: 'none', color: 'black', marginTop: '5vh' }}>
                                {t('donatenow')}
                                </Button>
                            </Link>
                                <Button variant="contained" onClick={handleDailog} sx={{ backgroundColor: 'rgb(242,200,15)', textDecorationLine: 'none', color: 'black', marginTop: '5vh',marginX:'1vh' }}>
                                {t('sendmessage')}
                                </Button>

                        </Box>
                    </MotionBox>
                    <MotionBox
                    variants={fadeIn('left',0.5)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{once:true,amount:0.7}}

                     sx={{ backgroundColor: '', width: {xs:'100%',sm:'40%',md:'40%'}, height: {xs:'30vh',sm:'60vh',md:'60vh'},backgroundImage:`url(${image1})`,backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>
                        {/* <img src={image1} style={{ width: '100%', height: '100%', borderRadius: '2%' }} /> */}
                    </MotionBox>
                </Box>
            </Box>
            <Box sx={{ padding: '5vh' }}>
                <MotionBox
                variants={fadeIn('up',0.5)}
                initial='hidden'
                whileInView={"show"}
                viewport={{once:true,amount:0.7}}

                 sx={{ display: 'flex',flexDirection:{xs:'column',sm:'row',md:'row'}, justifyContent: 'space-between', gap: 12,paddingX:{xs:'0vh',sm:'10vh',md:'10vh'} }}>
                    <Box sx={{ width: {xs:'100%',sm:'50%',md:'50%'} }}>
                        <Typography variant="h6">{t('section1t')}</Typography>
                        <Typography variant="body1">{t('section1des')}</Typography>
                    </Box>
                    <Box sx={{ width: {xs:'100%',sm:'50%',md:'50%'} }}>
                        <TabContext value={tabValue}>
                            <Box >
                                <TabList onChange={handleTabValue}>
                                    <Tab label={t('overview')} value={1} />
                                    <Tab label={t('impact')} value={2} />
                                    <Tab label={t('whatyouget')} value={3} />
                                </TabList>
                            </Box>
                            <TabPanel value={1} sx={{backgroundColor:''}}>{t('overviewdes')}</TabPanel>
                            <TabPanel value={2}>{t('impactdes')}</TabPanel>
                            <TabPanel value={3}>{t('whatyougetdes')}</TabPanel>
                        </TabContext>
                    </Box>
                </MotionBox>
                <br />
                <hr />
                <br />
                <MotionBox
                variants={fadeIn('up',0.5)}
                initial='hidden'
                whileInView={"show"}
                viewport={{once:true,amount:0.7}}

                sx={{ display: 'flex',flexDirection:{xs:'column',sm:'row',md:'row'}, justifyContent: 'space-between', gap: 5,paddingX:{xs:'3vh',sm:'10vh',md:'10vh'} }}>
                    <Typography variant="h6" sx={{ width: {xs:'100%',sm:'33%',md:'33%'} }}>{t('section2t')}</Typography>
                    <Typography variant="body1" sx={{ width: {xs:'100%',sm:'33%',md:'33%'}}}>{t('section2des1')}</Typography>
                    <Typography variant="body1" sx={{ width: {xs:'100%',sm:'33%',md:'33%'} }}>{t('section2des2')}</Typography>
                </MotionBox>
                <BigImage2 />
            </Box>
            {/* Dialog */}
      <Dialog
        sx={{marginBottom:{xs:'40%',sm:'0%',md:'0%'},padding:'0'}}
        open={openDialog}
        onClose={handleDailog}
      >
        <DialogContentText>
          <IconButton onClick={handleDailog} sx={{float:'right',padding:'3vh'}}>
            <Close sx={{color:'red'}}/>
          </IconButton>
        </DialogContentText>
        <DialogTitle>
          <Typography variant="h6" sx={{textAlign:'center'}}>{t('donationmessaget')}</Typography>
          <Typography variant="body1" sx={{textAlign:'center'}}>{t('donationmessagest')}</Typography>
        </DialogTitle>
        <DialogContent>
          {/* Sending Message Component */}
            <SendMessage/>
        </DialogContent>
      </Dialog>
        </>
    )
}

export default Donation
