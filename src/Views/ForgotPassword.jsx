import { Close } from '@mui/icons-material'
import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import AxiosAPI from './Components/axios';

function ForgotPassword({openDialog1}) {
        const {handleSubmit,register,formState:{errors}}=useForm();
        const [openDialog, setOpenDialog] = useState(openDialog1);



    const submit=(Data)=>{
            AxiosAPI.post('/user/forgotPassword',{...Data})
            .then((response)=>{
            setOpenDialog(false);
            console.log(response);

        }).catch((error)=>{
            console.log(error);
            })
    };

    const handleDialog = () => {
        setOpenDialog(!openDialog);
        };
  return (
    <Box>
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
                    <Typography sx={{ textAlign: 'center',color:'red',fontSize:'14px' }}>We will send you an E-Mail</Typography>

                </DialogTitle>
                <DialogContent>
                    {/* Form */}
                    <form method="post" onSubmit={handleSubmit(submit)}>
                        <Box sx={{ display:'flex',justifyContent:'space-between',gap:4 }}>
                        <TextField type="email"  variant="standard" label="E-Mail" {...register('email',{required:'E-Mail is required !'})}/>
                        {errors.email && (
                            <small style={{ color:'red' }}>{errors.email.message}</small>
                        )}
                        </Box>

                        <Button type="submit" variant="contained" color="success" sx={{ float: 'right', margin: '3vh' }}>Send</Button>
                    </form>
                </DialogContent>
            </Dialog>
    </Box>
  )
}

export default ForgotPassword
