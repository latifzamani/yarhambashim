

import { Close, EditOutlined } from "@mui/icons-material"
import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import AxiosAPI from "../../Components/axios";
import LazyLoading from "../../Components/LazyLoading";
import Toastify from "../../Components/Toastify";
import { useTranslation } from "react-i18next";

function LinksDialog() {
    const [openDialog,setOpenDialog]=useState(false);
    const [selectedItem,setSelectedItem]=useState({});
    const [loading, setLoading] = useState(true);
    const [links,setLinks]=useState([]);
    const {handleSubmit,register}=useForm();
    const [Stoast,setStoast]=useState(false);
    const [Ftoast,setFtoast]=useState(false);
    const [sendMode,setSendMode]=useState(false);
    const {t}=useTranslation();



    const FetchData=()=>{
        setLoading(true);
        AxiosAPI.get('/links/show')
        .then((data)=>{
            console.log(data.data[0]);
            setLinks(data.data[0])
            setLoading(false);
        }).catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    }

    const handleEdit=()=>{
        setSelectedItem(links);
        setOpenDialog(true);
    }

    const submit=(Data)=>{

        console.log(Data);
        setSendMode(true);
            AxiosAPI.post(`/links/${selectedItem.id}/update`,{...Data})
            .then((response)=>{
            setStoast(true);
            setSendMode(false);
            console.log(response);
            FetchData();
            setOpenDialog(false);
        }).catch((error)=>{
            setSendMode(false);
            setFtoast(true);
            console.log(error);
        })
        setStoast(false);
        setFtoast(false);

    }

    const handleDialog=()=>{
        setOpenDialog(!openDialog);
    }

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
    <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>{t('links')}</Typography>
    {Stoast && (<Toastify message="Successfully Done !" alertType="success"/>)}
            {Ftoast && (<Toastify message="Failed !" alertType="error"/>)}

            <TableContainer component={Paper} sx={{ scrollbarWidth: 'thin' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>{t('facebook')}</TableCell>
                            <TableCell align='center'>{t('instagram')}</TableCell>
                            <TableCell align='center'>{t('telegram')}</TableCell>
                            <TableCell align='center'>{t('x')}</TableCell>
                            <TableCell align='center'>{t('linkedin')}</TableCell>
                            <TableCell align='center'>{t('youtube')}</TableCell>
                            <TableCell align='center'>{t('whatsapp')}</TableCell>
                            <TableCell align='center'>{t('address')}</TableCell>
                            <TableCell align='center'>{t('phone')}</TableCell>
                            <TableCell align='center'>{t('email')}</TableCell>
                            <TableCell align='center'>{t('action')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align='center' sx={{ textOverflow: 'ellipsis', maxWidth: '15vh', overflow: 'hidden' }}>{links.facebook}</TableCell>
                            <TableCell align='center' sx={{ textOverflow: 'ellipsis', maxWidth: '15vh', overflow: 'hidden' }}>{links.instagram}</TableCell>
                            <TableCell align='center' sx={{ textOverflow: 'ellipsis', maxWidth: '15vh', overflow: 'hidden' }}>{links.telegram}</TableCell>
                            <TableCell align='center' sx={{ textOverflow: 'ellipsis', maxWidth: '15vh', overflow: 'hidden' }}>{links.x}</TableCell>
                            <TableCell align='center' sx={{ textOverflow: 'ellipsis', maxWidth: '15vh', overflow: 'hidden' }}>{links.linkedin}</TableCell>
                            <TableCell align='center' sx={{ textOverflow: 'ellipsis', maxWidth: '15vh', overflow: 'hidden' }}>{links.youtube}</TableCell>
                            <TableCell align='center' sx={{ textOverflow: 'ellipsis', maxWidth: '15vh', overflow: 'hidden' }}>{links.whatsapp}</TableCell>
                            <TableCell align='center' sx={{ textOverflow: 'ellipsis', maxWidth: '15vh', overflow: 'hidden' }}>{links.address}</TableCell>
                            <TableCell align='center' sx={{ textOverflow: 'ellipsis', maxWidth: '15vh', overflow: 'hidden' }}>{links.phone}</TableCell>
                            <TableCell align='center' sx={{ textOverflow: 'ellipsis', maxWidth: '15vh', overflow: 'hidden' }}>{links.email}</TableCell>
                            <TableCell align='center' sx={{ textOverflow: 'ellipsis', maxWidth: '15vh', overflow: 'hidden' }}>
                                <IconButton onClick={handleEdit}><EditOutlined color='success' /></IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            </>
             )}
            {/* Dialog */}
         <Dialog
        sx={{ marginBottom:{xs:'40%',sm:'0%',md:'0%'},padding:'0' }}
        open={openDialog}
        onClose={handleDialog}
        >
        <DialogContentText>
            <IconButton onClick={handleDialog} sx={{ float:'right',padding :'3vh'}}>
                <Close sx={{color:'red'}}/>
            </IconButton>
        </DialogContentText>
        <DialogTitle>
            <Typography variant="h6" sx={{ textAlign:'center' }}>{t('links')}</Typography>
        </DialogTitle>
        <DialogContent >
            {/* Form */}
            <form method="post" onSubmit={handleSubmit(submit)}>
                <Box sx={{display:'flex',justifyContent:'space-between', flexDirection: { xs: 'column', sm: 'row', md: 'row' },gap:4}}>
                <TextField type="text" defaultValue={selectedItem.facebook} variant="standard" {...register('facebook')} label={t('facebook')}/>
                <TextField type="text" defaultValue={selectedItem.instagram} variant="standard" {...register('instagram')} label={t('instagram')}/>
                </Box>
                <br/>
                <Box sx={{display:'flex',justifyContent:'space-between', flexDirection: { xs: 'column', sm: 'row', md: 'row' },gap:4}}>
                <TextField type="text" defaultValue={selectedItem.telegram} variant="standard"{...register('telegram')} label={t('telegram')}/>
                <TextField type="text" defaultValue={selectedItem.x} variant="standard"{...register('x')} label={t('x')}/>
                </Box>
                <br/>
                <Box sx={{display:'flex',justifyContent:'space-between', flexDirection: { xs: 'column', sm: 'row', md: 'row' },gap:4}}>
                <TextField type="text" defaultValue={selectedItem.linkedin} variant="standard"{...register('linkedin')} label={t('linkedin')}/>
                <TextField type="text" defaultValue={selectedItem.youtube} variant="standard"{...register('youtube')} label={t('youtube')}/>
                </Box>
                <br/>
                <Box sx={{display:'flex',justifyContent:'space-between', flexDirection: { xs: 'column', sm: 'row', md: 'row' },gap:4}}>
                <TextField type="text" defaultValue={selectedItem.whatsapp} variant="standard"{...register('whatsapp')} label={t('whatsapp')}/>
                <TextField type="text" defaultValue={selectedItem.address} variant="standard"{...register('address')} label={t('address')}/>
                </Box>
                <br/>
                <Box sx={{display:'flex',justifyContent:'space-between',gap:4}}>
                <TextField type="text" defaultValue={selectedItem.phone} variant="standard"{...register('phone')} label={t('phone')}/>
                <TextField type="text" defaultValue={selectedItem.email} variant="standard" {...register('email')}label={t('email')}/>
                </Box>
                <Button type="submit" variant="contained" color="success" sx={{float:'right',margin:'3vh'}}>
                    {sendMode ? "Submitting..." :(Object.keys(selectedItem).length>0 ? 'Update':'Save')}
                </Button>
            </form>
        </DialogContent>
         </Dialog>
        </>
  )
}

export default LinksDialog
