import { AddOutlined, Close, DeleteOutline, EditOutlined } from "@mui/icons-material"
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, MenuItem, Paper, Select, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import AxiosAPI from "../../Components/axios";

function ProjectImagesDailog() {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedItem,setSelectedItem]=useState({});
    const [projectImages,setProjectImages]=useState([]);
    const [projectTitle,setProjectTitle]=useState("Project");
    const [projects,setProjects]=useState([]);
    const {handleSubmit,setValue,register,formState:{errors}}=useForm();
    const handleFileChange=(e)=>{
        setValue('photo',e.target.files[0]);
    }

    const FetchData=()=>{
        AxiosAPI.get('/projectImages/show').then((data)=>{
            setProjectImages(data.data);
            setProjects(data.data);
            console.log(data.data);

        }).catch((error)=>{
            console.log(error);

        })
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
            FetchData();
        }).catch((error)=>{
            console.log(error);

        });
    }
    const submit=(Data)=>{
        const data=new FormData();
        data.append('project',Data.project);
        data.append('projectId',Data.projectId);
        data.append('photo',Data.photo);

        let result='';
        if(Object.keys(selectedItem).length>0){
            result=AxiosAPI.post(`/projectImages/${selectedItem?.id}/update`,data,{
                headers:{
                    'Content-Type':'multipart/form-data',
                }
            })
        }else{
            result=AxiosAPI.post('/projectImages/store',data,{
                headers:{
                    'Content-Type':'multipart/form-data',
                }
            })
        }

        result.then(()=>{
            setOpenDialog(false);
            FetchData();
        }).catch((error)=>{
            console.log(error);
            })
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
            <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>Projects Images</Typography>
            <Button variant='outlined' onClick={handleDialog} color='success' sx={{ float: 'right', marginX: '5vh' }} startIcon={<AddOutlined />}>Image</Button>
            <TableContainer component={Paper} sx={{ maxHeight: '60vh', backgroundColor: '', overflowY: 'scroll', scrollbarWidth: 'thin' }}>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Project</TableCell>
                        <TableCell align='center'>Photo</TableCell>
                        <TableCell align='center'>Action</TableCell>
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
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>{UpdateMode ? "Update Image" :"New Image"}</Typography>
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
                            <MenuItem value={projectTitle} disabled>ProjectTitle</MenuItem>
                            {projects.map((project)=>(
                            <MenuItem key={project.id} value={project.title} >{project.title}</MenuItem>
                        ))}
                        </Select>
                        <br/>
                        <TextField type="file" onChange={handleFileChange} variant="standard" label='Photo' />
                        <input type="hidden" {...register('photo',{
                            required:'Photo is required',
                        })}/>
                        <br/>
                        {errors.photo &&
                            <small style={{ color:'red' }}>{errors.photo.message}</small>
                        }
                        <br />
                        <Button type="submit" variant="contained" color="success" sx={{ float: 'right', margin: '3vh' }}>{Object.keys(selectedItem).length>0 ? 'Update':'Save'}</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ProjectImagesDailog;
