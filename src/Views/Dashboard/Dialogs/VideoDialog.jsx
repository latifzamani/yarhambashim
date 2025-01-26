import { Close, EditOutlined } from "@mui/icons-material"
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import AxiosAPI from "../../Components/axios";
import LazyLoading from "../../Components/LazyLoading";
import Toastify from "../../Components/Toastify";
import { useTranslation } from "react-i18next";

function VideoDialog() {
    const [openDialog,setOpenDialog]=useState(false);
    const [selectedItem,setSelectedItem]=useState({});
    const [videos,setVideos]=useState([]);
    const {handleSubmit,setValue}=useForm();
    const [loading, setLoading] = useState(true);
    const [Stoast,setStoast]=useState(false);
    const [Ftoast,setFtoast]=useState(false);
    const [sendMode,setSendMode]=useState(false);
    const {t}=useTranslation();

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
        setLoading(true);
        AxiosAPI.get('/videos/show')
        .then((data)=>{
            console.log(data.data[0]);
            setVideos(data.data[0])
            setLoading(false);
        }).catch((error)=>{
            console.log(error);
            setLoading(false);
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
            setSendMode(true);
            AxiosAPI.post(`/videos/${selectedItem.id}/update`,data,{
                headers:{
                    'Content-Type': 'multipart/form-data',
                }
            }).then((response)=>{
            console.log(response);
            FetchData();
            setStoast(true);
            setSendMode(false);
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
    <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>{t('videos')}</Typography>
            {Stoast && (<Toastify message="Successfully Done !" alertType="success"/>)}
            {Ftoast && (<Toastify message="Failed !" alertType="error"/>)}

            <TableContainer component={Paper}>
                {/* {JSON.stringify(selectedItem)} */}
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>{t('home')}</TableCell>
                            <TableCell align='center'>{t('knowaboutus')}</TableCell>
                            <TableCell align='center'>{t('aboutus')}</TableCell>
                            <TableCell align='center'>{t('action')}</TableCell>
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
            <Typography variant="h6" sx={{ textAlign:'center' }}>{t('videos')}</Typography>
        </DialogTitle>
        <DialogContent>
            {/* Form */}
            <form method="post" onSubmit={handleSubmit(submit)}>
                <TextField type="file" variant="standard" onChange={(e)=>handleFileChange1(e,'video1')} label={t('home')}/>
                <TextField type="file" variant="standard" onChange={(e)=>handleFileChange2(e,'video2')} label={t('knowaboutus')}/>
                <TextField type="file" variant="standard" onChange={(e)=>handleFileChange3(e,'video3')} label={t('aboutus')}/>
                <Button type="submit" variant="contained" color="success" sx={{float:'right',margin:'3vh'}}>
                    {sendMode ? "Submitting..." :(Object.keys(selectedItem).length>0 ? 'Update':'Save')}
                </Button>
            </form>
        </DialogContent>
         </Dialog>
        </>
  )
}

export default VideoDialog
