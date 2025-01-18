import { Close, EditOutlined } from "@mui/icons-material"
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import AxiosAPI from "../../Components/axios";

function VideoDialog() {
    const [openDialog,setOpenDialog]=useState(false);
    const [selectedItem,setSelectedItem]=useState({});
    const [videos,setVideos]=useState([]);
    const {handleSubmit,setValue}=useForm();

    const handleFileChange1= (e, field) => {
        const file = e.target.files[0];  // Get the first file from the FileList
        setValue(field, file);           // Set the file in the form state
    };
    const handleFileChange2=(e,video1)=>{
        setValue(video1,e.target.files[0]);
    }
    const handleFileChange3=(e,video1)=>{
        setValue(video1,e.target.files[0]);
    }



    const FetchData=()=>{
        AxiosAPI.get('/videos/show')
        .then((data)=>{
            console.log(data.data[0]);
            setVideos(data.data[0])
        }).catch((error)=>{
            console.log(error);
        })
    }

    const handleEdit=()=>{
        setSelectedItem(videos);
        setOpenDialog(true);
    }

    const submit=(Data)=>{
        const data=new FormData();
        data.append('video1',Data.video1);
        data.append('video2',Data.video2);
        data.append('video3',Data.video3);

        console.log(data);

            AxiosAPI.post(`/videos/${selectedItem.id}/update`,data,{
                headers:{
                    'Content-Type': 'multipart/form-data',
                }
            }).then((response)=>{
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
    <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>Videos</Typography>
            <TableContainer component={Paper}>
                {/* {JSON.stringify(selectedItem)} */}
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Home</TableCell>
                            <TableCell align='center'>Know Us</TableCell>
                            <TableCell align='center'>About Us</TableCell>
                            <TableCell align='center'>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align='center'>
                                <video src={`${import.meta.env.VITE_API_BASE_URL}/storage/${videos.video1}`} controls style={{ width: '15vh', height: '15vh', borderRadius: '10%' }} />
                            </TableCell>
                            <TableCell align='center'>
                            <video src={`${import.meta.env.VITE_API_BASE_URL}/storage/${videos.video2}`} controls style={{ width: '15vh', height: '15vh', borderRadius: '10%' }} />
                            </TableCell>
                            <TableCell align='center'>
                            <video src={`${import.meta.env.VITE_API_BASE_URL}/storage/${videos.video3}`} controls style={{ width: '15vh', height: '15vh', borderRadius: '10%' }} />
                            </TableCell>
                            <TableCell align='center'>
                                <IconButton onClick={handleEdit}><EditOutlined color='success' /></IconButton></TableCell>
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
                <TextField type="file" variant="standard" onChange={(e)=>handleFileChange1(e,'video1')} label='Home'/>
                <TextField type="file" variant="standard" onChange={(e)=>handleFileChange2(e,'video2')} label='Know Us'/>
                <TextField type="file" variant="standard" onChange={(e)=>handleFileChange3(e,'video3')} label='About Us'/>
                <Button type="submit" variant="contained" color="success" sx={{float:'right',margin:'3vh'}}>
                    {(Object.keys(selectedItem).length>0 ? 'Update':'Save')}
                </Button>
            </form>
        </DialogContent>
         </Dialog>
        </>
  )
}

export default VideoDialog
