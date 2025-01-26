
import { AddOutlined, Close, DeleteOutline, EditOutlined } from "@mui/icons-material"
import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import AxiosAPI from "../../Components/axios";
import LazyLoading from "../../Components/LazyLoading";
import Toastify from "../../Components/Toastify";
import { useTranslation } from "react-i18next";

function ChartsDialog() {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedItem,setSelectedItem]=useState({});
    const [loading, setLoading] = useState(true);
    const [chartData,setChartData]=useState([]);
    const {handleSubmit,register,formState:{errors}}=useForm();
    const [Stoast,setStoast]=useState(false);
    const [Ftoast,setFtoast]=useState(false);
    const [sendMode,setSendMode]=useState(false);
    const {t}=useTranslation();

    const FetchData=()=>{
        AxiosAPI.get('/chart/show').then((data)=>{
            setChartData(data.data);
            console.log(data.data);
            setLoading(false);
        }).catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    }
    const handleEdit=(event)=>{
        setSelectedItem(event);
        setOpenDialog(true);
    }
    const handleDelete=(id)=>{
        AxiosAPI.delete(`/chart/${id}/delete`)
        .then((response)=>{
            console.log(response);
            FetchData();
        }).catch((error)=>{
            console.log(error);

        });
    }
    const submit=(Data)=>{
        const data=new FormData();
        data.append('value',Data.value);
        data.append('label',Data.label);
        let result='';
        if(Object.keys(selectedItem).length>0){
            setSendMode(true);
            result=AxiosAPI.post(`/chart/${selectedItem?.id}/update`,data)
        }else{
            setSendMode(true);
            result=AxiosAPI.post('/chart/store',data)
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
            });
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
            <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>{t('chart')}/{t('percentage')}</Typography>
            {Stoast && (<Toastify message="Successfully Done !" alertType="success"/>)}
            {Ftoast && (<Toastify message="Failed !" alertType="error"/>)}

            <Button variant='outlined' onClick={handleDialog} color='success' sx={{ float: 'right', marginX: '5vh' }} startIcon={<AddOutlined />}>{t('percentage')}</Button>
            <TableContainer component={Paper} sx={{ maxHeight: '60vh', overflowY: 'scroll', scrollbarWidth: 'thin' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">{t('value')}</TableCell>
                            <TableCell align="center">{t('label')}</TableCell>
                            <TableCell align="center">{t('action')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {chartData.map((percentage, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{percentage.value}</TableCell>
                                <TableCell align="center">{percentage.label}</TableCell>
                                <TableCell align='center'>
                                <IconButton onClick={()=>handleEdit(percentage)}>
                                    <EditOutlined color='success' />
                                </IconButton>
                                <IconButton onClick={()=>handleDelete(percentage.id)}>
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
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>{t('chart')}/{t('percentage')}</Typography>
                </DialogTitle>
                <DialogContent>
                    {/* Form */}
                    <form method="post" onSubmit={handleSubmit(submit)}>
                        <Box sx={{ display:'flex',justifyContent:'space-between',gap:4 }}>
                        <TextField type="text" defaultValue={selectedItem.value} variant="standard" label={t('value')} {...register('value',updateMode ?'':{required:'Value is required !'})}/>
                        {errors.value && (
                            <small style={{ color:'red' }}>{errors.value.message}</small>
                        )}
                        <TextField type="text" defaultValue={selectedItem.label} variant="standard" label={t('label')} {...register('label',updateMode ?'':{required:'Label is required !'})}/>
                        {errors.label && (
                            <small style={{ color:'red' }}>{errors.label.message}</small>
                        )}
                        </Box>

                        <Button type="submit" variant="contained" color="success" sx={{ float: 'right', margin: '3vh' }}>{sendMode ? "Submitting...":(updateMode ? 'Update':'Save')}</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ChartsDialog;

