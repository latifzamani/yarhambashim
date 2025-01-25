import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import image from '../../../assets/images/23.jpeg';
import { Link } from "react-router-dom";
import { AddOutlined, DeleteOutline, EditOutlined } from "@mui/icons-material";
import AxiosAPI from "../../Components/axios";
import { useEffect, useState } from "react";
import ProjectImagesDailog from "../Dialogs/ProjectImagesDialog";
import LazyLoading from "../../Components/LazyLoading";

function Dashboard() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const FetchData = () => {
        AxiosAPI.get('/projects/show').then((data) => {
            setProjects(data.data);
            console.log(data.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        })
    }
    const handleDelete = (id) => {
        AxiosAPI.delete(`/projects/${id}/delete`)
            .then((response) => {
                console.log(response);
                FetchData();
            }).catch((error) => {
                console.log(error);

            });
    }

    useEffect(() => {
        FetchData();
    }, []);
    return (
        <>
            {loading ?
                (
                    <LazyLoading />
                ) : (
        <Box sx={{ margin: '3vh' }}>
            <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>Projects</Typography>
            <Link to='/dashboard/addProject'>
                <Button variant='outlined' color='success' sx={{ float: 'right', marginX: '5vh' }} startIcon={<AddOutlined />}>Project</Button>
            </Link>
            <TableContainer component={Paper} sx={{ maxHeight: '60vh', overflowY: 'scroll', scrollbarWidth: 'thin' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Subtitle</TableCell>
                            <TableCell align="center">Paragraph1</TableCell>
                            <TableCell align="center">Paragraph2</TableCell>
                            <TableCell align="center">Paragraph3</TableCell>
                            <TableCell align="center">Paragraph4</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Photo1</TableCell>
                            <TableCell align="center">Photo2</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projects.map((project, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{project.title}</TableCell>
                                <TableCell align="center">{project.subtitle}</TableCell>
                                <TableCell align="center" >
                                <Box sx={{backgroundColor:'',overflow:'hidden',maxHeight:'10vh'}}>
                                    {project.paragraph1}
                                    </Box>
                                </TableCell>
                                <TableCell align="center" >
                                <Box sx={{backgroundColor:'',overflow:'hidden',maxHeight:'10vh'}}>
                                    {project.paragraph1}
                                    </Box>
                                </TableCell>
                                <TableCell align="center" >
                                <Box sx={{backgroundColor:'',overflow:'hidden',maxHeight:'10vh'}}>
                                    {project.paragraph1}
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box sx={{backgroundColor:'',overflow:'hidden',maxHeight:'10vh'}}>
                                    {project.paragraph1}
                                    </Box>
                                </TableCell>

                                <TableCell align="center">
                                    <img src={`${import.meta.env.VITE_API_BASE_URL}/storage/${project.photo1}`} style={{ width: '15vh', height: '15vh', borderRadius: '10%' }} />
                                </TableCell>
                                <TableCell align="center">
                                    <img src={`${import.meta.env.VITE_API_BASE_URL}/storage/${project.photo2}`} style={{ width: '15vh', height: '15vh', borderRadius: '10%' }} />
                                </TableCell>
                                <TableCell align='center'>
                                    <Link to={`/dashboard/editProject/${project.id}`}><EditOutlined color='success' /></Link>||
                                    <IconButton onClick={() => handleDelete(project.id)}><DeleteOutline color='error' /></IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )}
        <br/>
        {/* Project Images */}
        {loading ?
                (
                    <LazyLoading />
                ) : (
            <Box sx={{ margin: '3vh' }}>
                <ProjectImagesDailog />
            </Box>
              )}
            <br />
            <br />
            <br />
        </>
    )
}

export default Dashboard
