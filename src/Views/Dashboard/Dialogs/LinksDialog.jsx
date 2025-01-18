

import { Close, EditOutlined } from "@mui/icons-material"
import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import AxiosAPI from "../../Components/axios";

function LinksDialog() {
    const [openDialog,setOpenDialog]=useState(false);
    const [selectedItem,setSelectedItem]=useState({});
    const [links,setLinks]=useState([]);
    const {handleSubmit,register}=useForm();




    const FetchData=()=>{
        AxiosAPI.get('/links/show')
        .then((data)=>{
            console.log(data.data[0]);
            setLinks(data.data[0])
        }).catch((error)=>{
            console.log(error);
        })
    }

    const handleEdit=()=>{
        setSelectedItem(links);
        setOpenDialog(true);
    }

    const submit=(Data)=>{

        console.log(Data);

            AxiosAPI.post(`/links/${selectedItem.id}/update`,{...Data})
            .then((response)=>{
            console.log(response);
            FetchData();
            setOpenDialog(false);
        }).catch((error)=>{
            console.log(error);
        })


    }

    const handleDialog=()=>{
        setOpenDialog(!openDialog);
    }

    useEffect(()=>{
        FetchData();
    },[])





  return (
    <>
    <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>Links</Typography>
            <TableContainer component={Paper} sx={{ scrollbarWidth: 'thin' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>FaceBook</TableCell>
                            <TableCell align='center'>Instagram</TableCell>
                            <TableCell align='center'>Telegram</TableCell>
                            <TableCell align='center'>X</TableCell>
                            <TableCell align='center'>LinkedIn</TableCell>
                            <TableCell align='center'>Youtube</TableCell>
                            <TableCell align='center'>Whatsapp</TableCell>
                            <TableCell align='center'>Address</TableCell>
                            <TableCell align='center'>Phone</TableCell>
                            <TableCell align='center'>E-Mail</TableCell>
                            <TableCell align='center'>Action</TableCell>
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
            <Typography variant="h6" sx={{ textAlign:'center' }}>Video Form</Typography>
        </DialogTitle>
        <DialogContent>
            {/* Form */}
            <form method="post" onSubmit={handleSubmit(submit)}>
                <Box sx={{display:'flex',justifyContent:'space-between',gap:4}}>
                <TextField type="text" defaultValue={selectedItem.facebook} variant="standard" {...register('facebook')} label='Facebook'/>
                <TextField type="text" defaultValue={selectedItem.instagram} variant="standard" {...register('instagram')} label='Instagram'/>
                </Box>
                <br/>
                <Box sx={{display:'flex',justifyContent:'space-between',gap:4}}>
                <TextField type="text" defaultValue={selectedItem.telegram} variant="standard"{...register('telegram')} label='Telegram'/>
                <TextField type="text" defaultValue={selectedItem.x} variant="standard"{...register('x')} label='X'/>
                </Box>
                <br/>
                <Box sx={{display:'flex',justifyContent:'space-between',gap:4}}>
                <TextField type="text" defaultValue={selectedItem.linkedin} variant="standard"{...register('linkedin')} label='Linkedin'/>
                <TextField type="text" defaultValue={selectedItem.youtube} variant="standard"{...register('youtube')} label='Youtube'/>
                </Box>
                <br/>
                <Box sx={{display:'flex',justifyContent:'space-between',gap:4}}>
                <TextField type="text" defaultValue={selectedItem.whatsapp} variant="standard"{...register('whatsapp')} label='Whatsapp'/>
                <TextField type="text" defaultValue={selectedItem.address} variant="standard"{...register('address')} label='Address'/>
                </Box>
                <br/>
                <Box sx={{display:'flex',justifyContent:'space-between',gap:4}}>
                <TextField type="text" defaultValue={selectedItem.phone} variant="standard"{...register('phone')} label='Phone'/>
                <TextField type="text" defaultValue={selectedItem.email} variant="standard" {...register('email')}label='E-mail'/>
                </Box>
                <Button type="submit" variant="contained" color="success" sx={{float:'right',margin:'3vh'}}>
                    {(Object.keys(selectedItem).length>0 ? 'Update':'Save')}
                </Button>
            </form>
        </DialogContent>
         </Dialog>
        </>
  )
}

export default LinksDialog
