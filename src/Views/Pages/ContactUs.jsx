import { Facebook, Instagram, Telegram, WhatsApp, X, YouTube } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Mapview from "../Components/Mapview";
import SendMessage from "../Components/SendMessage";
import AxiosAPI from "../Components/axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {motion} from 'framer-motion';
import {fadeIn} from '../Components/variants';



function ContactUs() {
    const [links,setLinks]=useState([]);
    const {t}=useTranslation();
    const FetchData=()=>{
        AxiosAPI.get('/links/show').then((data)=>{
            setLinks(data.data[0]);
            console.log(data.data[0]);

        }).catch((error)=>{
            console.log(error);

        })
    }

    useEffect(()=>{
        FetchData();
    },[]);
    const MotionBox= motion(Box);

    return (
        <Box sx={{  paddingBottom: '0vh', height: { xs: '180vh', sm: '200vh', md: '200vh' }, backgroundColor: '' }}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: '', gap: 1, width: '100%', height: '100vh', backgroundColor: '', position: '', marginTop: '0vh', marginBottom: '0vh' }}>
                {/* Part 1 */}
                <Box sx={{ display: 'flex', padding: { xs: '4vh', sm: '10vh', md: '10vh' }, marginBottom: '10vh', flexDirection:{xs:'column',sm:'row',md:'row'}, justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: 'rgb(251,236,198)', position: '', marginTop: '0vh' }}>
                    <MotionBox
                    variants={fadeIn('right',0.5)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{once:false,amount:0.7}}
                     sx={{ width: { xs: '100%', sm: '60%', md: '60%' }, backgroundColor: '' }}>
                        <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
                        <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}>{t('contactus')}</Typography>
                        <Box sx={{ marginLeft: { xs: '1vh', sm: '12vh', md: '12vh' }, display: '', justifyContent: 'space-between', gap: 4, marginTop: '3vh' }}>
                            <Typography variant="h6">{t('contactustitle')}</Typography>
                            <Typography variant="body1">{t('contactusdes')}</Typography>
                        </Box>
                    </MotionBox>
                    <MotionBox
                    variants={fadeIn('left',0.5)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{once:false,amount:0.7}}
                     sx={{ width: { xs: '100%', sm: '40%', md: '40%' }}}>
                        <Typography variant="h6">{t('letstalk')}</Typography>
                        <Typography variant="body1" sx={{ display: 'inline', }}>{links.phone}</Typography>
                        <Typography variant="body1" sx={{ display: 'inline', paddingX: '3vh' }}>{links.email}</Typography>
                        <hr />
                        <Typography variant="h6">{t('headoffice')}</Typography>
                        <Typography variant="body1" sx={{ display: 'inline', }}>{links.address}</Typography>
                        <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>
                            {links.instagram && (
                                <Link to={links.instagram}><Instagram sx={{ color: "rgb(0,0,0)", marginX: '1vh' }} /></Link>
                            )}
                            {links.facebook && (
                                <Link to={links.facebook}><Facebook sx={{ color: "rgb(0,0,0)", marginX: '1vh' }} /></Link>
                            )}
                            {links.x && (
                                <Link to={links.x}><X sx={{ color: "rgb(0,0,0)", marginX: '1vh' }} /></Link>
                            )}
                            {links.telegram && (
                                <Link to={links.telegram}><Telegram sx={{ color: "rgb(0,0,0)", marginX: '1vh' }} /></Link>
                            )}
                            {links.whatsapp && (
                                <Link to={links.whatsapp}><WhatsApp sx={{ color: "rgb(0,0,0)", marginX: '1vh' }} /></Link>
                            )}
                            {links.youtube && (
                                <Link to={links.youtube}><YouTube sx={{ color: "rgb(0,0,0)", marginX: '1vh' }} /></Link>
                            )}
                        </Typography>
                    </MotionBox>
                </Box>
                {/* Send Message */}
                <MotionBox
                variants={fadeIn('up',0.5)}
                initial='hidden'
                whileInView={"show"}
                viewport={{once:true,amount:0.7}}
                sx={{ paddingX: '5vh',marginBottom:'0vh',backgroundColor:''}}>
                <SendMessage />
                </MotionBox>
                {/* Map View */}
            </Box>
            <Box sx={{ backgroundColor: '', height: '50vh',paddingBottom:'0vh',marginTop:{ xs: '40vh', sm: '60vh', md: '60vh' } }}>
                <Mapview />
            </Box>
        </Box>
    )
}
export default ContactUs;
