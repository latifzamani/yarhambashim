import { Box, Button, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form';
import AxiosWindow from '../Components/axios';

function SendMessage() {
    const {register,handleSubmit}=useForm();
    const submit=(Data)=>{
        AxiosWindow.post('/sendEmail',{...Data})
        .then((response)=>{
            console.log(response);

        }).catch((error)=>{
            console.log(error);

        });

    }
  return (
    <Box sx={{paddingX:{ xs: '0vh', sm: '10vh', md: '10vh' }}}>
    <form onSubmit={handleSubmit(submit)}>
        <Box sx={{display:'flex',justifyContent:'space-between',gap:4}}>
        <TextField type="text" {...register('fullName',{required:'Full Name is required.'})} variant="standard" label="Full Name" sx={{width:'50%'}}/>
        <TextField type="text"{...register('subject',{required:'Subject is required.'})} variant="standard" label="Subject"sx={{width:'50%'}}/>
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-between',marginY:'2vh',gap:4}}>
        <TextField type="email"{...register('email',{required:'Email is required.'})} variant="standard" label="E-Mail"sx={{width:'50%'}}/>
        <TextField type="text" {...register('phone',{required:'Phone is required.'})} variant="standard" label="Phone" sx={{width:'50%'}}/>
        </Box>
        <TextField multiline rows={6} {...register('message',{required:'Message is required.'})} type="text" variant="outlined" fullWidth label="Type your Message" />
        <Typography sx={{textAlign:'center',marginY:'3vh'}}>
        <Button type='submit' variant="contained" sx={{backgroundColor:'rgb(242,200,75)',color:'black'}}>Send Message</Button>
        </Typography>
    </form>
</Box>
  )
}

export default SendMessage
