import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import image from '../../../assets/images/23.jpeg';
import { Link } from "react-router-dom";
import { AddOutlined, DeleteOutline, EditOutlined } from "@mui/icons-material";
import AxiosAPI from "../../Components/axios";
import { useEffect, useState } from "react";
import ProjectImagesDailog from "../Dialogs/ProjectImagesDialog";
import LazyLoading from "../../Components/LazyLoading";
import { useTranslation } from 'react-i18next';
import Toastify from "../../Components/Toastify";

function Dashboard() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Stoast,setStoast]=useState(false);
    const [Ftoast,setFtoast]=useState(false);
    const {t}=useTranslation();
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
                setStoast(true);
                FetchData();
            }).catch((error) => {
                console.log(error);
                setFtoast(true);
            });
            setStoast(false);
            setFtoast(false);
    }

    useEffect(() => {
        FetchData();
    }, []);
    return (
        <>
            {Stoast && (<Toastify message={t('successfullydone')} alertType="success"/>)}
            {Ftoast && (<Toastify message={t('Failed')} alertType="error"/>)}

            {loading ?
                (
                    <LazyLoading />
                ) : (

        <Box sx={{ margin: '3vh' }}>
            <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>{t('projects')}</Typography>
            <Link to='/dashboard/addProject'>
                <Button variant='outlined' color='success' sx={{ float: 'right', marginX: '5vh' }} startIcon={<AddOutlined />}>{t('project')}</Button>
            </Link>
            <TableContainer component={Paper} sx={{ maxHeight: '60vh', overflowY: 'scroll', scrollbarWidth: 'thin' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">{t('title')}</TableCell>
                            <TableCell align="center">{t('subtitle')}</TableCell>
                            <TableCell align="center">{t('paragraph1')}</TableCell>
                            <TableCell align="center">{t('paragraph2')}</TableCell>
                            <TableCell align="center">{t('paragraph3')}</TableCell>
                            <TableCell align="center">{t('paragraph4')}</TableCell>
                            <TableCell align="center">{t('date')}</TableCell>
                            <TableCell align="center">{t('photo1')}</TableCell>
                            <TableCell align="center">{t('photo2')}</TableCell>
                            <TableCell align="center">{t('action')}</TableCell>
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
                                    {project.paragraph2}
                                    </Box>
                                </TableCell>
                                <TableCell align="center" >
                                <Box sx={{backgroundColor:'',overflow:'hidden',maxHeight:'10vh'}}>
                                    {project.paragraph3}
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box sx={{backgroundColor:'',overflow:'hidden',maxHeight:'10vh'}}>
                                    {project.paragraph4}
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box sx={{backgroundColor:'',overflow:'hidden',maxHeight:'10vh'}}>
                                    {project.date}
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
