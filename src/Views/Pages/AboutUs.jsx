import { Box, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {  PlayCircle,} from "@mui/icons-material";
import Supporters from "../Components/Supporters";
import image1 from '../../assets/images/y1.jpg';
import BigImage2 from "../Components/BigImage2";
import Events from "../Components/Events";
import AxiosAPI from "../Components/axios";
import { useTranslation } from "react-i18next";
import {motion} from 'framer-motion';
import {fadeIn} from '../Components/variants';
import TeamMembers from "../Components/TeamMembers";


function AboutUs() {
    const [playVideo2, setPlayVideo2] = useState(false);
    const [videos,setVideos]=useState([]);
    const {t}=useTranslation();
  const FetchData=()=>{
    AxiosAPI.get('/videos/show').then((data)=>{
        setVideos(data.data[0]);
        console.log(data.data[0]);

    }).catch((error)=>{
        console.log(error);

    })
}

    const handlePlayVideo2 = () => {
        setPlayVideo2(!playVideo2);
    }
    useEffect(()=>{
        FetchData();
    },[]);
    const MotionBox= motion(Box);
    return (
        <Box sx={{ padding: '5vh', marginBottom: '0vh', height: { xs:'520vh',sm:'400vh',md:'400vh'},backgroundColor: 'rgb(251,236,198)'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: '', gap: 1, width: '100%', height: '100vh', backgroundColor: '', position: '', marginTop: '0vh', marginBottom: '0vh' }}>
                <Box sx={{ display: 'flex', padding: { xs:'0vh',sm:'5vh',md:'5vh'}, marginBottom: { xs:'0vh',sm:'10vh',md:'10vh'}, flexDirection: 'column', justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: '', position: '', marginTop: '0vh' }}>
                    <MotionBox
                        variants={fadeIn('right',0.5)}
                        initial='hidden'
                        whileInView={"show"}
                        viewport={{once:false,amount:0.7}}

                    sx={{ width: { xs:'100%',sm:'80%',md:'80%'}, backgroundColor: '' }}>
                        <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
                        <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}>{t('')}{t('knowaboutus')}</Typography>
                        <Box sx={{ marginLeft: { xs:'2vh',sm:'12vh',md:'12vh'}, display: '',justifyContent:'space-between', gap: 4, marginTop: '3vh' }}>
                            <Typography variant="h6">{t('knowaboutustitle')}</Typography>
                            <Typography variant="body1">{t('knowaboutusdes')}</Typography>
                        </Box>
                    </MotionBox>
                    {/* Video */}
                    <MotionBox
                        variants={fadeIn('left',0.5)}
                        initial='hidden'
                        whileInView={"show"}
                        viewport={{once:true,amount:0.7}}

                    sx={{ backgroundColor: '', width: '90%',paddingX:{ xs:'1vh',sm:'10vh',md:'10vh'}, height: '50vh', backgroundImage: 'url()', position: 'relative' }} onClick={handlePlayVideo2}>
                        <video controls={playVideo2} poster={image1} src={`${import.meta.env.VITE_API_BASE_URL}/storage/${videos.video3}`} autoPlay={playVideo2} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1, objectFit: 'cover', borderRadius: '1%' }}
                        />
                        {!playVideo2 && (
                            <Box sx={{ zIndex: 2, paddingY: '20vh', paddingX: '10vh' }}>

                                <Typography sx={{ zIndex: 2, position: 'relative', display: 'flex', gap: 4, flexDirection: 'row' }}>
                                    <IconButton variant="outlined" onClick={handlePlayVideo2} sx={{ color: "white" }}>
                                        <PlayCircle fontSize="large" sx={{ color: 'white' }} />
                                    </IconButton>
                                </Typography>
                            </Box>
                        )}
                    </MotionBox>
                </Box>
                <Box sx={{ marginY: '2vh',paddingY:'4vh',paddingX:'2vh', backgroundColor: 'rgb(251,236,198)', borderRadius: '1%' }}>
                    <Box sx={{ display: 'flex',flexDirection:{ xs:'column',sm:'row',md:'row'} ,backgroundColor: 'rgb(251,236,198)', padding: '3vh', borderRadius: '1%', marginTop: '4vh', justifyContent: 'center', gap: 5 }}>
                        <MotionBox
                            variants={fadeIn('right',0.5)}
                            initial='hidden'
                            whileInView={"show"}
                            viewport={{once:false,amount:0.7}}

                        sx={{ width: { xs:'100%',sm:'40%',md:'40%'} }}>
                            <Typography variant="h6">{t('missiont1')}</Typography>
                            <Typography variant="h6">{t('missionst1')}</Typography>
                            <Typography sx={{ fontSize: '14px' }}>{t('missiondes1')}</Typography>
                        </MotionBox>
                        <MotionBox
                        variants={fadeIn('left',0.5)}
                        initial='hidden'
                        whileInView={"show"}
                        viewport={{once:false,amount:0.7}}

                        sx={{ width: { xs:'100%',sm:'40%',md:'40%'} }}>
                            <Typography variant="h6">{t('missiont2')}</Typography>
                            <Typography variant="h6">{t('missionst2')}</Typography>
                            <Typography sx={{ fontSize: '14px' }}>{t('missiondes2')}</Typography>
                        </MotionBox>
                    </Box>
                 {/* Supporters */}
                    <Supporters />
                </Box>
                {/* Our Journey */}
                <Box sx={{ width: '100%',height:'auto', padding: '4vh', backgroundColor: 'rgb(242,200,75)',borderRadius:'1%' }}>
                    <Box sx={{ display: 'flex',flexDirection:{ xs:'column',sm:'row',md:'row'}, gap:4,justifyContent:'space-between' }}>
                        <Box sx={{ marginLeft: { xs:'0vh',sm:'4vh',md:'4vh'}, width: { xs:'100%',sm:'50%',md:'50%'} }}>
                            <Typography variant="h6">{t('journeyt')}</Typography>
                            <Typography variant="h6">{t('journeyst')}</Typography>
                            <Typography variant="body1">{t('journeydes')}</Typography>
                            <Box sx={{ display: 'flex',justifyContent:'space-around',gap:2,marginTop:'2vh' }}>
                            <Typography >
                                <Typography variant="h6">{t('journeyn1')}</Typography>
                                <Typography variant="h6">{t('journeynt1')}</Typography>
                            </Typography>
                            <Typography sx={{ }}>
                                <Typography variant="h6">{t('journeyn2')}</Typography>
                                <Typography variant="h6">{t('journeynt2')}</Typography>
                            </Typography>
                            <Typography sx={{  }}>
                                <Typography variant="h6">{t('journeyn3')}</Typography>
                                <Typography variant="h6">{t('journeynt3')}</Typography>
                            </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: { xs:'100%',sm:'50%',md:'50%'} }}>
                            <img src={image1} style={{ width: '100%', height: '80%',borderRadius:'2%' }} />
                        </Box>
                    </Box>
                </Box>
                {/* Meet Our Team */}
                <TeamMembers/>
                {/* Donation Image */}
                <MotionBox
                variants={fadeIn('up',0.5)}
                initial='hidden'
                whileInView={"show"}
                viewport={{once:true,amount:0.7}}

                >
                <BigImage2/>
                </MotionBox>
                {/* Events */}
                <Events/>
            </Box>
        </Box>
    )
}
export default AboutUs;
