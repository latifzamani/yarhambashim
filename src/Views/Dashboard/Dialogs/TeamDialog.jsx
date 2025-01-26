
import { AddOutlined, Close, DeleteOutline, EditOutlined } from "@mui/icons-material"
import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import AxiosAPI from "../../Components/axios";
import LazyLoading from "../../Components/LazyLoading";
import Toastify from "../../Components/Toastify";
import { useTranslation } from "react-i18next";

function TeamDialog() {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedItem,setSelectedItem]=useState({});
    const [loading, setLoading] = useState(true);
    const [members,setMembers]=useState([]);
    const {handleSubmit,setValue,register,formState:{errors}}=useForm();
    const [Stoast,setStoast]=useState(false);
    const [Ftoast,setFtoast]=useState(false);
    const [sendMode,setSendMode]=useState(false);
    const {t}=useTranslation();



    const handleFileChange=(e)=>{
        setValue('photo',e.target.files[0]);
    }

    const FetchData=()=>{
        AxiosAPI.get('/members/show').then((data)=>{
            setMembers(data.data);
            console.log(data.data);
            setLoading(false);

        }).catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    }
    const handleEdit=(member)=>{
        setSelectedItem(member);
        setOpenDialog(true);
    }
    const handleDelete=(id)=>{
        AxiosAPI.delete(`/members/${id}/delete`)
        .then((response)=>{
            console.log(response);
            FetchData();
        }).catch((error)=>{
            console.log(error);

        });
    }
    const submit=(Data)=>{
        const data=new FormData();
        data.append('fullName',Data.fullName);
        data.append('position',Data.position);
        data.append('facebook',Data.facebook);
        data.append('instagram',Data.instagram);
        data.append('x',Data.x);
        data.append('photo',Data.photo);

        let result='';
        if(Object.keys(selectedItem).length>0){
            setSendMode(true);
            result=AxiosAPI.post(`/members/${selectedItem?.id}/update`,data,{
                headers:{
                    'Content-Type':'multipart/form-data',
                }
            })
        }else{
            setSendMode(true);
            result=AxiosAPI.post('/members/store',data,{
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

    let updateMode=Object.keys(selectedItem).length>0;
    return (
        <>
        {loading ?
            (
                <LazyLoading />
            ) :
             (
                <>
            <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>{t('team')} {t('members')}</Typography>
            {Stoast && (<Toastify message="Successfully Done !" alertType="success"/>)}
            {Ftoast && (<Toastify message="Failed !" alertType="error"/>)}
            <Button variant='outlined' onClick={handleDialog} color='success' sx={{ float: 'right', marginX: '5vh' }} startIcon={<AddOutlined />}>{t('member')}</Button>
            <TableContainer component={Paper} sx={{ maxHeight: '60vh', overflowY: 'scroll', scrollbarWidth: 'thin' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">{t('fullname')}</TableCell>
                            <TableCell align="center">{t('position')}</TableCell>
                            <TableCell align="center">{t('photo')}</TableCell>
                            <TableCell align="center">{t('facebook')}</TableCell>
                            <TableCell align="center">{t('instagram')}</TableCell>
                            <TableCell align="center">{t('x')}</TableCell>
                            <TableCell align="center">{t('action')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {members.map((member, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{member.fullName}</TableCell>
                                <TableCell align="center">{member.position}</TableCell>
                                <TableCell align="center">
                                    <img src={`${import.meta.env.VITE_API_BASE_URL}/storage/${member.photo}`} style={{ width: '15vh', height: '15vh', borderRadius: '10%' }} />
                                </TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10vh', textOverflow: 'ellipsis', overflow: 'hidden' }}>{member.facebook}</TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10vh', textOverflow: 'ellipsis', overflow: 'hidden' }}>{member.instagram}</TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10vh', textOverflow: 'ellipsis', overflow: 'hidden' }}>{member.x}</TableCell>
                                <TableCell align='center'>
                                <IconButton onClick={()=>handleEdit(member)}>
                                    <EditOutlined color='success' />
                                </IconButton>
                                <IconButton onClick={()=>handleDelete(member.id)}>
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
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>{t('team')} {t('member')}</Typography>
                </DialogTitle>
                <DialogContent>
                    {/* Form */}
                    <form method="post" onSubmit={handleSubmit(submit)}>
                        <Box sx={{ display:'flex',justifyContent:'space-between',gap:4 }}>
                        <TextField type="text" defaultValue={selectedItem.fullName} variant="standard" label={t('fullname')} {...register('fullName',updateMode ?'':{required:'Full Name is required !'})}/>
                        {errors.fullName && (
                            <small style={{ color:'red' }}>{errors.fullName.message}</small>
                        )}
                        <TextField type="text" defaultValue={selectedItem.position} variant="standard" label={t('position')} {...register('position',updateMode ?'':{required:'Position is required !'})}/>
                        {errors.position && (
                            <small style={{ color:'red' }}>{errors.position.message}</small>
                        )}
                        </Box>
                        <Box sx={{ display:'flex',justifyContent:'space-between',gap:4 }}>
                        <TextField type="text" defaultValue={selectedItem.facebook} variant="standard" label={t('facebook')} {...register('facebook')}/>
                        {errors.facebook && (
                            <small style={{ color:'red' }}>{errors.facebook.message}</small>
                        )}
                        <TextField type="text" defaultValue={selectedItem.instagram} variant="standard" label={t('instagram')} {...register('instagram')}/>
                        {errors.instagram && (
                            <small style={{ color:'red' }}>{errors.instagram.message}</small>
                        )}
                        </Box>
                        <Box sx={{ display:'flex',justifyContent:'space-between',gap:4 }}>
                        <TextField type="text" defaultValue={selectedItem.x} variant="standard" label={t('x')} {...register('x')}/>
                        {errors.x && (
                            <small style={{ color:'red' }}>{errors.x.message}</small>
                        )}

                        <TextField type="file" onChange={handleFileChange} variant="standard" label={t('photo')} />
                        <input type="hidden" {...register('photo',updateMode ? '':{
                            // required:'Photo is required',
                        })}/>
                        <br/>
                        {errors.photo &&
                            <small style={{ color:'red' }}>{errors.photo.message}</small>
                        }
                        </Box>
                        <br />
                        <Button type="submit" variant="contained" color="success" sx={{ float: 'right', margin: '3vh' }}>{sendMode ? "Submitting...":(updateMode ? 'Update':'Save')}</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default TeamDialog;

