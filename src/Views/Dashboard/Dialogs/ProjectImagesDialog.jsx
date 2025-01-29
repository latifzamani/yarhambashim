import { AddOutlined, Close, DeleteOutline, EditOutlined } from "@mui/icons-material"
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, MenuItem, Paper, Select, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import AxiosAPI from "../../Components/axios";
import Toastify from "../../Components/Toastify";
import { useTranslation } from "react-i18next";

function ProjectImagesDailog() {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedItem,setSelectedItem]=useState({});
    const [projectImages,setProjectImages]=useState([]);
    const [projectTitle,setProjectTitle]=useState("Project");
    const [projects,setProjects]=useState([]);
    const [Stoast,setStoast]=useState(false);
    const [Ftoast,setFtoast]=useState(false);
    const [sendMode,setSendMode]=useState(false);
    const {t}=useTranslation();

    const {handleSubmit,setValue,register,formState:{errors}}=useForm();
    const handleFileChange=(e)=>{
        setValue('photo',e.target.files[0]);
    }

    const FetchData=()=>{
        // setSendMode(true);
        AxiosAPI.get('/projectImages/show').then((data)=>{
            setProjectImages(data.data);
            setProjects(data.data);
            // setStoast(true);
            // setSendMode(false);
            console.log(data.data);

        }).catch((error)=>{
            console.log(error);
            setSendMode(false);
            // setFtoast(true);
        })
        // setStoast(false);
        // setFtoast(false);
    }
    const FetchDataProjects=()=>{
        AxiosAPI.get('/projects/show').then((data)=>{
            setProjects(data.data);
            console.log(data.data);

        }).catch((error)=>{
            console.log(error);

        })
    }
    const handleEdit=(supporter)=>{
        setSelectedItem(supporter);
        setProjectTitle(supporter.project);
        setOpenDialog(true);
    }
    const handleDelete=(id)=>{
        AxiosAPI.delete(`/projectImages/${id}/delete`)
        .then((response)=>{
            console.log(response);
            setStoast(true);
            FetchData();
        }).catch((error)=>{
            console.log(error);
            setFtoast(false);
        });
        setStoast(false);
        setFtoast(false);
    }
    const submit=(Data)=>{
        const data=new FormData();
        data.append('project',Data.project);
        data.append('projectId',Data.projectId);
        data.append('photo',Data.photo);

        let result='';
        if(Object.keys(selectedItem).length>0){
            setSendMode(true);
            result=AxiosAPI.post(`/projectImages/${selectedItem?.id}/update`,data,{
                headers:{
                    'Content-Type':'multipart/form-data',
                }
            })
        }else{
            setSendMode(true);
            result=AxiosAPI.post('/projectImages/store',data,{
                headers:{
                    'Content-Type':'multipart/form-data',
                }
            })
        }

        result.then(()=>{
            setOpenDialog(false);
            setStoast(true);
            setSendMode(false);
            FetchData();
        }).catch((error)=>{
            console.log(error);
            setFtoast(true);
            setSendMode(false);
            })
            setFtoast(false);
            setStoast(false);

    };

    const handleDialog = () => {
        setOpenDialog(!openDialog);
        FetchDataProjects();
        setSelectedItem([]);
    };



    useEffect(()=>{
        FetchData();
    },[])
    let UpdateMode=Object.keys(selectedItem).length>0;
    return (
        <>
            {Stoast && (<Toastify message={t('successfullydone')} alertType="success"/>)}
            {Ftoast && (<Toastify message={t('Failed')} alertType="error"/>)}

            <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>{t('projectimages')}</Typography>
            <Button variant='outlined' onClick={handleDialog} color='success' sx={{ float: 'right', marginX: '5vh' }} startIcon={<AddOutlined />}>{t('photo')}</Button>
            <TableContainer component={Paper} sx={{ maxHeight: '60vh', backgroundColor: '', overflowY: 'scroll', scrollbarWidth: 'thin' }}>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>{t('project')}</TableCell>
                        <TableCell align='center'>{t('photo')}</TableCell>
                        <TableCell align='center'>{t('action')}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {projectImages.map((projectImage, index) => (
                        <TableRow key={index}>
                            <TableCell align="center">{projectImage.project}</TableCell>
                            <TableCell align='center'>
                                <img src={`${import.meta.env.VITE_API_BASE_URL}/storage/${projectImage.photo}`} style={{ width: '15vh', height: '15vh', borderRadius: '10%' }} />
                            </TableCell>
                            <TableCell align='center' sx={{ textOverflow: 'ellipsis', maxWidth: '15vh', overflow: 'hidden' }}>
                                <IconButton onClick={()=>handleEdit(projectImage)}>
                                    <EditOutlined color='success' />
                                </IconButton>
                                <IconButton onClick={()=>handleDelete(projectImage.id)}>
                                    <DeleteOutline color='error' />
                                </IconButton>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </TableContainer>
            {/* Dialog */}
            <Dialog
                sx={{ marginBottom: { xs: '40%', sm: '0%', md: '0%' }, padding: '0' }}
                open={openDialog}
                onClose={handleDialog}
            >
                <DialogContentText>
                    <IconButton onClick={handleDialog} sx={{ float: 'right', padding: '3vh' }}>
                        <Close sx={{ color: 'red' }} />
                    </IconButton>
                </DialogContentText>
                <DialogTitle>
                        {/* {JSON.stringify(selectedItem)} */}
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>{UpdateMode ? t('update') :t('new')}</Typography>
                </DialogTitle>
                <DialogContent>
                    {/* Form */}
                    <form method="post" onSubmit={handleSubmit(submit)}>
                        <Select  size='small' value={projectTitle} onChange={(e)=>{

                            const selectedProject = projects.find(project => project.title === e.target.value);
                            setProjectTitle(e.target.value);
                            setValue('project', e.target.value);
                            setValue('projectId', selectedProject.id); // Set the project ID
                            }}>
                            <MenuItem value={projectTitle} disabled>{t('projectTitle')}</MenuItem>
                            {projects.map((project)=>(
                            <MenuItem key={project.id} value={project.title} >{project.title}</MenuItem>
                        ))}
                        </Select>
                        <br/>
                        <TextField type="file" onChange={handleFileChange} variant="standard" label={t('photo')} />
                        <input type="hidden" {...register('photo',{
                            required:t('thisisrequired'),
                        })}/>
                        <br/>
                        {errors.photo &&
                            <small style={{ color:'red' }}>{errors.photo.message}</small>
                        }
                        <br />
                        <Button type="submit" variant="contained" color="success" sx={{ float: 'right', margin: '3vh' }}>{sendMode ? t('submitting'):(Object.keys(selectedItem).length>0 ? t('update') : t('save'))}</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ProjectImagesDailog;
