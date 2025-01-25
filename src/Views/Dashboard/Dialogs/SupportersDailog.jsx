import { AddOutlined, Close, DeleteOutline, EditOutlined } from "@mui/icons-material"
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import AxiosAPI from "../../Components/axios";
import LazyLoading from "../../Components/LazyLoading";

function SupportersDailog() {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedItem,setSelectedItem]=useState({});
    const [supporters,setSupporters]=useState([]);
    const [loading, setLoading] = useState(true);
    const {handleSubmit,setValue,register,formState:{errors}}=useForm();
    const handleFileChange=(e)=>{
        setValue('logo',e.target.files[0]);
    }

    const FetchData=()=>{
        setLoading(true);
        AxiosAPI.get('/supporters/show').then((data)=>{
            setSupporters(data.data);
            console.log(data.data);
            setLoading(false);
        }).catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    }
    const handleEdit=(supporter)=>{
        setSelectedItem(supporter);
        setOpenDialog(true);
    }
    const handleDelete=(id)=>{
        AxiosAPI.delete(`/supporters/${id}/delete`)
        .then((response)=>{
            console.log(response);
            FetchData();
        }).catch((error)=>{
            console.log(error);

        });
    }
    const submit=(Data)=>{
        const data=new FormData();
        data.append('logo',Data.logo);

        let result='';
        if(Object.keys(selectedItem).length>0){
            result=AxiosAPI.post(`/supporters/${selectedItem?.id}/update`,data,{
                headers:{
                    'Content-Type':'multipart/form-data',
                }
            })
        }else{
            result=AxiosAPI.post('/supporters/store',data,{
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
    return (
        <>
        {loading ?
            (
                <LazyLoading />
            ) :
             (
                <>
            <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>Supporters</Typography>
            <Button variant='outlined' onClick={handleDialog} color='success' sx={{ float: 'right', marginX: '5vh' }} startIcon={<AddOutlined />}>Supporter</Button>
            <TableContainer component={Paper} sx={{ maxHeight: '60vh', backgroundColor: '', overflowY: 'scroll', scrollbarWidth: 'thin' }}>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Logo</TableCell>
                        <TableCell align='center'>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {supporters.map((supporter, index) => (
                        <TableRow key={index}>
                            <TableCell align='center'>
                                <img src={`${import.meta.env.VITE_API_BASE_URL}/storage/${supporter.logo}`} style={{ width: '15vh', height: '15vh', borderRadius: '10%' }} />
                            </TableCell>
                            <TableCell align='center' sx={{ textOverflow: 'ellipsis', maxWidth: '15vh', overflow: 'hidden' }}>
                                <IconButton onClick={()=>handleEdit(supporter)}>
                                    <EditOutlined color='success' />
                                </IconButton>
                                <IconButton onClick={()=>handleDelete(supporter.id)}>
                                    <DeleteOutline color='error' />
                                </IconButton>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
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
                        {/* {JSON.stringify(Object.keys(selectedItem).length)} */}
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>New Supporter</Typography>
                </DialogTitle>
                <DialogContent>
                    {/* Form */}
                    <form method="post" onSubmit={handleSubmit(submit)}>
                        <TextField type="file" onChange={handleFileChange} variant="standard" label='Logo' />
                        <input type="hidden" {...register('logo',{
                            required:'Logo is required',
                        })}/>
                        <br/>
                        {errors.logo &&
                            <small style={{ color:'red' }}>{errors.logo.message}</small>
                        }
                        <br />
                        <Button type="submit" variant="contained" color="success" sx={{ float: 'right', margin: '3vh' }}>{Object.keys(selectedItem).length>0 ? 'Update':'Save'}</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default SupportersDailog;
