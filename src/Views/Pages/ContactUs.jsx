import { Facebook, Instagram, Telegram, WhatsApp, X, YouTube } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Mapview from "../Components/Mapview";
import SendMessage from "../Components/SendMessage";
import AxiosAPI from "../Components/axios";
import { useEffect, useState } from "react";



function ContactUs() {
    const [links,setLinks]=useState([]);
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
    return (
        <Box sx={{  paddingBottom: '0vh', height: { xs: '180vh', sm: '200vh', md: '200vh' }, backgroundColor: '' }}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: '', gap: 1, width: '100%', height: '100vh', backgroundColor: '', position: '', marginTop: '0vh', marginBottom: '0vh' }}>
                {/* Part 1 */}
                <Box sx={{ display: 'flex', padding: { xs: '4vh', sm: '10vh', md: '10vh' }, marginBottom: '10vh', flexDirection:{xs:'column',sm:'row',md:'row'}, justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: 'rgb(251,236,198)', position: '', marginTop: '0vh' }}>
                    <Box sx={{ width: { xs: '100%', sm: '60%', md: '60%' }, backgroundColor: '' }}>
                        <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
                        <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}> CONTACT US</Typography>
                        <Box sx={{ marginLeft: { xs: '1vh', sm: '12vh', md: '12vh' }, display: '', justifyContent: 'space-between', gap: 4, marginTop: '3vh' }}>
                            <Typography variant="h6">We would love to hear from you</Typography>
                            <Typography variant="body1">We provide a better place for children this is a descriptio We provide a better place for children this is a descriptio We provide a better place for children this is a descriptio We provide a better place for children this is a descriptio We provide a better place for children</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: { xs: '100%', sm: '40%', md: '40%' }}}>
                        <Typography variant="h6">{`Let's talk`}</Typography>
                        <Typography variant="body1" sx={{ display: 'inline', }}>{links.phone}</Typography>
                        <Typography variant="body1" sx={{ display: 'inline', paddingX: '3vh' }}>{links.email}</Typography>
                        <hr />
                        <Typography variant="h6">{`Head Office`}</Typography>
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
                    </Box>
                </Box>
                {/* Send Message */}
                <Box sx={{ padding: '5vh'}}>
                <SendMessage />
                </Box>
                {/* Map View */}
            </Box>
            <Box sx={{ backgroundColor: '', height: '50vh',paddingBottom:'0vh',marginTop:{ xs: '40vh', sm: '60vh', md: '60vh' } }}>
                <Mapview />
            </Box>
        </Box>
    )
}
export default ContactUs;
