import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import video1 from '../../assets/videos/1.mp4';
import { useEffect, useState } from "react";
import { Facebook, Instagram, PlayCircle, X } from "@mui/icons-material";
import Supporters from "../Components/Supporters";
import image1 from '../../assets/images/23.jpeg';
import BigImage2 from "../Components/BigImage2";
import Events from "../Components/Events";
import { Link } from "react-router-dom";
import AxiosAPI from "../Components/axios";


function AboutUs() {
    const [playVideo2, setPlayVideo2] = useState(false);
    const [videos,setVideos]=useState([]);
    const [members,setMembers]=useState([]);
  const FetchData=()=>{
    AxiosAPI.get('/videos/show').then((data)=>{
        setVideos(data.data[0]);
        console.log(data.data[0]);

    }).catch((error)=>{
        console.log(error);

    })
}
  const FetchDataTeam=()=>{
    AxiosAPI.get('/members/show').then((data)=>{
        setMembers(data.data);
        console.log(data.data);

    }).catch((error)=>{
        console.log(error);

    })
}



    const handlePlayVideo2 = () => {
        setPlayVideo2(!playVideo2);
    }
    useEffect(()=>{
        FetchData();
        FetchDataTeam();
    },[]);
    return (
        <Box sx={{ padding: '5vh', marginBottom: '0vh', height: { xs:'520vh',sm:'400vh',md:'400vh'},backgroundColor: 'rgb(251,236,198)'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: '', gap: 1, width: '100%', height: '100vh', backgroundColor: '', position: '', marginTop: '0vh', marginBottom: '0vh' }}>
                <Box sx={{ display: 'flex', padding: { xs:'0vh',sm:'5vh',md:'5vh'}, marginBottom: { xs:'0vh',sm:'10vh',md:'10vh'}, flexDirection: 'column', justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: '', position: '', marginTop: '0vh' }}>
                    <Box sx={{ width: { xs:'100%',sm:'80%',md:'80%'}, backgroundColor: '' }}>
                        <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
                        <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}> KNOW ABOUT US</Typography>
                        <Box sx={{ marginLeft: { xs:'2vh',sm:'12vh',md:'12vh'}, display: '',justifyContent:'space-between', gap: 4, marginTop: '3vh' }}>
                            <Typography variant="h6">We provide a better place for children</Typography>
                            <Typography variant="body1">We provide a better place for children this is a descriptio We provide a better place for children this is a descriptio We provide a better place for children this is a descriptio We provide a better place for children this is a descriptio We provide a better place for children</Typography>
                        </Box>
                    </Box>
                    {/* Video */}
                    <Box sx={{ backgroundColor: '', width: '90%',paddingX:{ xs:'1vh',sm:'10vh',md:'10vh'}, height: '50vh', backgroundImage: 'url()', position: 'relative' }} onClick={handlePlayVideo2}>
                        <video controls={playVideo2} src={`${import.meta.env.VITE_API_BASE_URL}/storage/${videos.video3}`} autoPlay={playVideo2} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1, objectFit: 'cover', borderRadius: '1%' }}
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
                    </Box>
                </Box>
                <Box sx={{ marginY: '2vh',paddingY:'4vh',paddingX:'2vh', backgroundColor: 'rgb(251,236,198)', borderRadius: '1%' }}>
                    <Box sx={{ display: 'flex',flexDirection:{ xs:'column',sm:'row',md:'row'} ,backgroundColor: 'rgb(251,236,198)', padding: '3vh', borderRadius: '1%', marginTop: '4vh', justifyContent: 'center', gap: 5 }}>
                        <Box sx={{ width: { xs:'100%',sm:'40%',md:'40%'} }}>
                            <Typography variant="h6">OUR MISSION</Typography>
                            <Typography variant="h6">We make sure to provide inclusive care for children with special needs</Typography>
                            <Typography sx={{ fontSize: '14px' }}>This is a description about how We make sure to provide inclusive care for children with special needs</Typography>
                        </Box>
                        <Box sx={{ width: { xs:'100%',sm:'40%',md:'40%'} }}>
                            <Typography variant="h6">OUR MISSION</Typography>
                            <Typography variant="h6">We make sure to provide inclusive care for children with special needs</Typography>
                            <Typography sx={{ fontSize: '14px' }}>This is a description about how We make sure to provide inclusive care for children with special needs</Typography>
                        </Box>
                    </Box>
                 {/* Supporters */}
                    <Supporters />
                </Box>
                {/* Our Journey */}
                <Box sx={{ width: '100%',height:'auto', padding: '4vh', backgroundColor: 'rgb(242,200,75)',borderRadius:'1%' }}>
                    <Box sx={{ display: 'flex',flexDirection:{ xs:'column',sm:'row',md:'row'}, gap:4,justifyContent:'space-between' }}>
                        <Box sx={{ marginLeft: { xs:'0vh',sm:'4vh',md:'4vh'}, width: { xs:'100%',sm:'50%',md:'50%'} }}>
                            <Typography variant="h6">OUR JOURNEY</Typography>
                            <Typography variant="h6">How We Raised 34M</Typography>
                            <Typography variant="body1">How We Raised 34M is a journey of years ised 34M is a journey ofised 34M is of years ised 34M is a journey ofised 34M is a journey of of years ised 34M is a journey ofised 34M is</Typography>
                            <Box sx={{ display: 'flex',justifyContent:'space-around',gap:2,marginTop:'2vh' }}>
                            <Typography >
                                <Typography variant="h6">34M+</Typography>
                                <Typography variant="h6">Donation Received</Typography>
                            </Typography>
                            <Typography sx={{ }}>
                                <Typography variant="h6">400+</Typography>
                                <Typography variant="h6">Volunters</Typography>
                            </Typography>
                            <Typography sx={{  }}>
                                <Typography variant="h6">20+</Typography>
                                <Typography variant="h6">Care Homes</Typography>
                            </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: { xs:'100%',sm:'50%',md:'50%'} }}>
                            <img src={image1} style={{ width: '100%', height: '80%',borderRadius:'2%' }} />
                        </Box>
                    </Box>
                </Box>
                {/* Meet Our Team */}
                <Box sx={{marginTop:'3vh'}}>
                    <Typography variant="h6" sx={{textAlign:'center'}}>Meet Our Team</Typography>
                    <Typography variant="body1" sx={{textAlign:'center'}}>This is our great team for helping children</Typography>
                    <Box sx={{padding:'2vh'}}>
                        <Grid container spacing={2} justifyContent="center">
                            {members.map((member,index)=>(
                            <Grid key={index} item xs={12} sm={6} md={3}>
                                <Card sx={{width:'30vh'}}>
                                    <CardMedia component="img" image={`${import.meta.env.VITE_API_BASE_URL}/storage/${member.photo}`} sx={{height:{ xs:'20vh',sm:'30vh',md:'30vh'},}}/>
                                    <CardContent>
                                        <Typography variant="h6" sx={{textAlign:'center'}}>{member.fullName}</Typography>
                                        <Typography variant="body1" sx={{textAlign:'center'}}>{member.position}</Typography>
                                        <Typography sx={{textAlign:'center',marginY:'1vh'}}>
                                            {member.facebook && (
                                                <Link to={member.facebook}><Instagram sx={{color:"rgb(0,0,0)"}}/></Link>
                                            )}
                                            {member.instagram && (
                                                <Link to={member.instagram}><Facebook sx={{color:"rgb(0,0,0)",marginX:'1vh'}}/></Link>
                                            )}
                                            {member.x && (
                                                    <Link to={member.x}><X sx={{color:"rgb(0,0,0)"}}/></Link>
                                            )}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            ))}
                        </Grid>
                    </Box>

                </Box>
                {/* Donation Image */}
                <BigImage2/>
                {/* Events */}
                <Events/>
            </Box>
        </Box>
    )
}
export default AboutUs;
