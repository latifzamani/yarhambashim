
import { AddOutlined, Close, DeleteOutline, EditOutlined } from "@mui/icons-material"
import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import AxiosAPI from "../../Components/axios";
import LazyLoading from "../../Components/LazyLoading";

function EventDialog() {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedItem,setSelectedItem]=useState({});
    const [events,setEvents]=useState([]);
    const [loading, setLoading] = useState(true);
    const {handleSubmit,setValue,register,formState:{errors}}=useForm();
    const handleFileChange=(e)=>{
        setValue('photo',e.target.files[0]);
    }

    const FetchData=()=>{
        AxiosAPI.get('/events/show').then((data)=>{
            setEvents(data.data);
            console.log(data.data);
            setLoading(false);
        }).catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    }
    const handleEdit=(event)=>{
        setSelectedItem(event);
        setOpenDialog(true);
    }
    const handleDelete=(id)=>{
        AxiosAPI.delete(`/events/${id}/delete`)
        .then((response)=>{
            console.log(response);
            FetchData();
        }).catch((error)=>{
            console.log(error);

        });
    }
    const submit=(Data)=>{
        const data=new FormData();
        data.append('title',Data.title);
        data.append('description',Data.description);
        data.append('address',Data.address);
        data.append('date',Data.date);
        data.append('time',Data.time);
        data.append('photo',Data.photo);

        let result='';
        if(Object.keys(selectedItem).length>0){
            result=AxiosAPI.post(`/events/${selectedItem?.id}/update`,data,{
                headers:{
                    'Content-Type':'multipart/form-data',
                }
            })
        }else{
            result=AxiosAPI.post('/events/store',data,{
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
        setSelectedItem([]);
    };



    useEffect(()=>{
        FetchData();
    },[])

    let updateMode=Object.keys(selectedItem).length>0;
    return (
        <>
        {loading ?
            (
                <LazyLoading />
            ) :
             (
                <>
            <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>Events</Typography>
            <Button variant='outlined' onClick={handleDialog} color='success' sx={{ float: 'right', marginX: '5vh' }} startIcon={<AddOutlined />}>Event</Button>
            <TableContainer component={Paper} sx={{ maxHeight: '60vh', overflowY: 'scroll', scrollbarWidth: 'thin' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Photo</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Time</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {events.map((event, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{event.title}</TableCell>
                                <TableCell align="center">{event.description}</TableCell>
                                <TableCell align="center">
                                    <img src={`${import.meta.env.VITE_API_BASE_URL}/storage/${event.photo}`} style={{ width: '15vh', height: '15vh', borderRadius: '10%' }} />
                                </TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10vh', textOverflow: 'ellipsis', overflow: 'hidden' }}>{event.address}</TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10vh', textOverflow: 'ellipsis', overflow: 'hidden' }}>{event.date}</TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10vh', textOverflow: 'ellipsis', overflow: 'hidden' }}>{event.time}</TableCell>
                                <TableCell align='center'>
                                <IconButton onClick={()=>handleEdit(event)}>
                                    <EditOutlined color='success' />
                                </IconButton>
                                <IconButton onClick={()=>handleDelete(event.id)}>
                                    <DeleteOutline color='error' />
                                </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </>
             )}
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
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>New Event</Typography>
                </DialogTitle>
                <DialogContent>
                    {/* Form */}
                    <form method="post" onSubmit={handleSubmit(submit)}>
                        <Box sx={{ display:'flex',justifyContent:'space-between',gap:4 }}>
                        <TextField type="text" defaultValue={selectedItem.title} variant="standard" label="Title" {...register('title',updateMode ?'':{required:'Title is required !'})}/>
                        {errors.title && (
                            <small style={{ color:'red' }}>{errors.title}</small>
                        )}
                        <TextField type="text" defaultValue={selectedItem.description} variant="standard" label="Description" {...register('description',updateMode ?'':{required:'Description is required !'})}/>
                        {errors.description && (
                            <small style={{ color:'red' }}>{errors.description}</small>
                        )}
                        </Box>
                        <br/>
                        <Box sx={{ display:'flex',justifyContent:'space-between',gap:4 }}>
                        <TextField type="text" defaultValue={selectedItem.address} variant="standard" label="Address" {...register('address',updateMode ?'':{required:'Address is required !'})}/>
                        {errors.address && (
                            <small style={{ color:'red' }}>{errors.address}</small>
                        )}
                        <TextField type="date" defaultValue={selectedItem.date} variant="standard" label="Date" {...register('date',updateMode ?'':{required:'Date is required !'})}/>
                        {errors.date && (
                            <small style={{ color:'red' }}>{errors.date}</small>
                        )}
                        </Box>
                        <br/>
                        <Box sx={{ display:'flex',justifyContent:'space-between',gap:4 }}>
                        <TextField type="time" defaultValue={selectedItem.time} variant="standard" label="Time" {...register('time',updateMode ?'':{required:'Time is required !'})}/>
                        {errors.time && (
                            <small style={{ color:'red' }}>{errors.time}</small>
                        )}

                        <TextField type="file" onChange={handleFileChange} variant="standard" label='photo' />
                        <input type="hidden" {...register('photo',updateMode ? '':{
                            // required:'Photo is required',
                        })}/>
                        <br/>
                        {errors.photo &&
                            <small style={{ color:'red' }}>{errors.photo.message}</small>
                        }
                        </Box>
                        <br />
                        <Button type="submit" variant="contained" color="success" sx={{ float: 'right', margin: '3vh' }}>{updateMode ? 'Update':'Save'}</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default EventDialog;

