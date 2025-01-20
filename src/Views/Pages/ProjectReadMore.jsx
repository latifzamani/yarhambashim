import { Box, Button, Typography } from "@mui/material"
import image1 from '../../assets/images/23.jpeg';
import { GraphicEqOutlined, MonetizationOn, MonetizationOnOutlined, PendingActions, PeopleAltOutlined } from "@mui/icons-material";
import ProjectsDone from "../Components/ProjectsDone";
import BigImage2 from "../Components/BigImage2";
import AxiosAPI from "../Components/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectImages from "../Components/ProjectImages";

function ProjectReadMore() {
    const[project,setProject]=useState([]);
    const {id}=useParams();
    const FetchData=()=>{
    AxiosAPI.get(`/projects/${id}/show`).then((data)=>{
        setProject(data.data);
        console.log(data.data);

    }).catch((error)=>{
        console.log(error);

    })
}

    useEffect(()=>{
        FetchData();
    },[])
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: '', position: '', paddingX: { xs: '5vh', sm: '10vh', md: '40vh' }, paddingY: '5vh' }}>
                <Box sx={{ width: '100%', backgroundColor: '' }}>
                    <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
                    <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}> OUR PROJECTS</Typography>
                    <Box sx={{ marginLeft: '12vh' }}>
                        <Typography variant="h6">{project.title}</Typography>
                        <br/>
                        <Typography variant="body1">{project.paragraph1}</Typography>
                        <br/>
                        <Typography variant="body1">{project.paragraph2}</Typography>
                        <br/>
                        <Typography variant="body1">{project.paragraph3}</Typography>


                    </Box>
                </Box>
                <Box sx={{ backgroundColor: '', width: '100%', height: '40vh', paddingX: { xs: '', sm: '10vh', md: '20vh' } }}>
                    <img src={`${import.meta.env.VITE_API_BASE_URL}/storage/${project.photo2}`} style={{ width: '100%', height: '100%', borderRadius: '2%' }} />
                </Box>
                <Box sx={{ marginLeft: '12vh' }}>
                        <Typography variant="body1">{project.paragraph3}</Typography>
                 </Box>
                        <Typography variant="body1" sx={{color:'gray',textAlign:'end'}}>{project.date}</Typography>
            </Box>
            {/* Project Images */}
            <Box sx={{ padding: { xs:'0vh',sm:'10vh',md:'10vh'} }}>
                <ProjectImages id={id}/>
            </Box>
            {/* Project Images */}

            <Box sx={{ backgroundColor: 'rgb(252,237,198)', paddingY: '8vh',paddingX: { xs: '', sm: '10vh', md: '20vh' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}>
                    <Box sx={{ width: '50%' }}>
                        <PendingActions />
                        <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>20+ orphanage visit in 2 months</Typography>
                        <Typography sx={{ marginX: '6vh' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique.
                        </Typography>
                    </Box>
                    <Box sx={{ width: '50%' }}>
                        <MonetizationOnOutlined />
                        <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>230 People Have donated</Typography>
                        <Typography sx={{ marginX: '6vh' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique.
                        </Typography>
                    </Box>
                </Box>
                <br/>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}>
                    <Box sx={{ width: '50%' }}>
                        <PeopleAltOutlined />
                        <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>30+ people joined </Typography>
                        <Typography sx={{ marginX: '6vh' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique.
                        </Typography>
                    </Box>
                    <Box sx={{ width: '50%' }}>
                        <GraphicEqOutlined />
                        <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>1.2m Raised for this initiate</Typography>
                        <Typography sx={{ marginX: '6vh' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {/* Projects Done */}
            <Box sx={{ padding: { xs:'0vh',sm:'10vh',md:'10vh'} }}>
            <ProjectsDone/>
            </Box>
            {/* Donation Image */}
            <Box sx={{marginX:'10vh',marginBottom:'5vh'}}>
            <BigImage2/>
            </Box>
        </>
    )
}

export default ProjectReadMore
