import { AddOutlined, Close, DeleteOutline, EditOutlined } from "@mui/icons-material"
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import AxiosAPI from "../../Components/axios";
import LazyLoading from "../../Components/LazyLoading";
import Toastify from "../../Components/Toastify";
import { useTranslation } from "react-i18next";

function SupportersDailog() {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedItem,setSelectedItem]=useState({});
    const [supporters,setSupporters]=useState([]);
    const [loading, setLoading] = useState(true);
    const {handleSubmit,setValue,register,formState:{errors}}=useForm();
    const [Stoast,setStoast]=useState(false);
    const [Ftoast,setFtoast]=useState(false);
    const [sendMode,setSendMode]=useState(false);
    const {t}=useTranslation();





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
            setStoast(true);
            FetchData();
        }).catch((error)=>{
            console.log(error);
            setFtoast(true);
        });
        setStoast(false);
        setFtoast(false);
    }
    const submit=(Data)=>{
        const data=new FormData();
        data.append('logo',Data.logo);

        let result='';
        if(Object.keys(selectedItem).length>0){
            setSendMode(true);
            result=AxiosAPI.post(`/supporters/${selectedItem?.id}/update`,data,{
                headers:{
                    'Content-Type':'multipart/form-data',
                }
            })
        }else{
            setSendMode(true);
            result=AxiosAPI.post('/supporters/store',data,{
                headers:{
                    'Content-Type':'multipart/form-data',
                }
            })
        }

        result.then(()=>{
            setOpenDialog(false);
            FetchData();
            setStoast(true);
            setSendMode(false);
        }).catch((error)=>{
            setSendMode(false);
            setFtoast(true);
            console.log(error);
            })
            setStoast(false);
            setFtoast(false);
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
            <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>{t('supporters')}</Typography>
            {Stoast && (<Toastify message={t('successfullydone')} alertType="success"/>)}
            {Ftoast && (<Toastify message={t('Failed')} alertType="error"/>)}

            <Button variant='outlined' onClick={handleDialog} color='success' sx={{ float: 'right', marginX: '5vh' }} startIcon={<AddOutlined />}>{t('supporter')}</Button>
            <TableContainer component={Paper} sx={{ maxHeight: '60vh', backgroundColor: '', overflowY: 'scroll', scrollbarWidth: 'thin' }}>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>{t('logo')}</TableCell>
                        <TableCell align='center'>{t('action')}</TableCell>
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
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>{t('supporters')}</Typography>
                </DialogTitle>
                <DialogContent>
                    {/* Form */}
                    <form method="post" onSubmit={handleSubmit(submit)}>
                        <TextField type="file" onChange={handleFileChange} variant="standard" label={t('logo')} />
                        <input type="hidden" {...register('logo',{
                            required:'Logo is required',
                        })}/>
                        <br/>
                        {errors.logo &&
                            <small style={{ color:'red' }}>{errors.logo.message}</small>
                        }
                        <br />
                        <Button type="submit" variant="contained" color="success" sx={{ float: 'right', margin: '3vh' }}>{sendMode ? t('submitting'):(Object.keys(selectedItem).length>0 ? t('update') : t('save'))}</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default SupportersDailog;
