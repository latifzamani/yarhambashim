import { Box, Button, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form';
import AxiosWindow from '../Components/axios';
import { useState } from 'react';
import Toastify from './Toastify';
import { useTranslation } from 'react-i18next';

function SendMessage() {
    const {register,handleSubmit,reset}=useForm();
    const [Stoast,setStoast]=useState(false);
    const [Ftoast,setFtoast]=useState(false);
    const [sendMode,setSendMode]=useState(false);
    const {t}=useTranslation();
    const submit=(Data)=>{
        setSendMode(true)
        AxiosWindow.post('/sendEmail',{...Data})
        .then((response)=>{
            console.log(response);
            setStoast(true);
            setSendMode(false);
            reset();
        }).catch((error)=>{
            console.log(error);
            setFtoast(true);
            setSendMode(false);
        });
        setFtoast(false);
        setStoast(false);
    }
  return (
    <Box sx={{paddingX:{ xs: '0vh', sm: '10vh', md: '10vh' }}}>
         {Stoast && (<Toastify message="Email Sended Successfully" alertType="success"/>)}
         {Ftoast && (<Toastify message="Sending Email Failed" alertType="error"/>)}
    <form onSubmit={handleSubmit(submit)}>
        <Box sx={{display:'flex',justifyContent:'space-between',gap:4}}>
        <TextField type="text" {...register('fullName',{required:'Full Name is required.'})} variant="standard" label={t('fullname')} sx={{width:'50%'}}/>
        <TextField type="text"{...register('subject',{required:'Subject is required.'})} variant="standard" label={t('subject')} sx={{width:'50%'}}/>
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-between',marginY:'2vh',gap:4}}>
        <TextField type="email"{...register('email',{required:'Email is required.'})} variant="standard" label={t('email')}sx={{width:'50%'}}/>
        <TextField type="text" {...register('phone',{required:'Phone is required.'})} variant="standard" label={t('phone')} sx={{width:'50%'}}/>
        </Box>
        <TextField multiline rows={6} {...register('message',{required:'Message is required.'})} type="text" variant="outlined" fullWidth label={t('message')} />
        <Typography sx={{textAlign:'center',marginY:'3vh'}}>
        <Button type='submit' variant="contained" sx={{backgroundColor:'rgb(242,200,75)',color:'black'}}>{sendMode?'Sending...':t('sendmessage')}</Button>
        </Typography>
    </form>
</Box>
  )
}

export default SendMessage
