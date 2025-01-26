import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import AxiosAPI from "../../Components/axios";
import { useNavigate, useParams } from "react-router-dom";
import Toastify from "../../Components/Toastify";

function AddProject() {
    const { handleSubmit, register,reset, setValue, formState: { errors } } = useForm();
    const [project, setProject] = useState([]);
    const [Stoast,setStoast]=useState(false);
    const [Ftoast,setFtoast]=useState(false);
    const [sendMode,setSendMode]=useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleFileChange1 = (e) => {
        setValue('photo1', e.target.files[0]);
    }
    const handleFileChange2 = (e) => {
        setValue('photo2', e.target.files[0]);
    }

    const FetchData = () => {
        AxiosAPI.get(`/projects/${id}/show`).then((data) => {
            setProject(data.data);
                reset(data.data);
            console.log(data.data);

        }).catch((error) => {
            console.log(error);

        })
    }

    const submit = (Data) => {
        const data = new FormData();
        data.append('title', Data.title);
        data.append('subtitle', Data.subtitle);
        data.append('paragraph1', Data.paragraph1);
        data.append('paragraph2', Data.paragraph2);
        data.append('paragraph3', Data.paragraph3);
        data.append('paragraph4', Data.paragraph4);
        data.append('date', Data.date);
        data.append('photo1', Data.photo1);
        data.append('photo2', Data.photo2);

        let result = [];
        if (id) {
            setSendMode(true);
            result = AxiosAPI.post(`/projects/${id}/update`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
        } else {
            setSendMode(true);
            result = AxiosAPI.post('/projects/store', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
        }

        result.then(() => {
            setStoast(true);
            setSendMode(false);
            navigate('/dashboard');
        }).catch((error) => {
            console.log(error);
            setSendMode(false);
            setFtoast(true);
        })
        setStoast(false);
        setFtoast(false);
    };



    useEffect(() => {
        if (id) {
            FetchData();
        }
    }, []);
    return (
        <Box sx={{ margin: '3vh' }}>
            {Stoast && (<Toastify message="Successfully Done !" alertType="success"/>)}
            {Ftoast && (<Toastify message="Failed !" alertType="error"/>)}

            {/* Form */}
            <Paper sx={{ padding: { xs: '2vh', sm: '10vh', md: '10vh' },marginBottom: { xs: '10vh', sm: '0vh', md: '0vh' } }}>
                <Typography variant="h6" sx={{ marginBottom: '4vh' }}>{id ? 'Update Project' : 'New Project'}</Typography>
                <form method="post" onSubmit={handleSubmit(submit)}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row', md: 'row' }, gap: 4 }}>
                        <TextField type="text" slotProps={{inputLabel:{shrink: true}}} defaultValue={project.title} variant="standard" label="Title" {...register('title', id ? '' : { required: 'Title is required !' })} />
                        {errors.title && (
                            <small style={{ color: 'red' }}>{errors.title.message}</small>
                        )}
                        <TextField type="text"slotProps={{inputLabel:{shrink: true}}} defaultValue={project.subtitle} variant="standard" label="Subtitle" {...register('subtitle', id ? '' : { required: 'Subtitle is required !' })} />
                        {errors.subtitle && (
                            <small style={{ color: 'red' }}>{errors.subtitle.message}</small>
                        )}
                    </Box>
                    <br />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', gap: 4 }}>
                        <TextField type="text"slotProps={{inputLabel:{shrink: true}}} multiline rows={8} defaultValue={project.paragraph1} variant="outlined" label="Paragraph1" {...register('paragraph1', id ? '' : { required: 'Paragraph1 is required !' })} />
                        {errors.paragraph1 && (
                            <small style={{ color: 'red' }}>{errors.paragraph1.message}</small>
                        )}
                        <TextField type="text"slotProps={{inputLabel:{shrink: true}}} multiline rows={8} defaultValue={project.paragraph2} variant="outlined" label="Paragraph2" {...register('paragraph2', id ? '' : { required: 'Paragraph2 is required !' })} />
                        {errors.paragraph2 && (
                            <small style={{ color: 'red' }}>{errors.paragraph2.message}</small>
                        )}
                    </Box>
                    <br />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', gap: 4 }}>
                        <TextField type="text"slotProps={{inputLabel:{shrink: true}}} multiline rows={8} defaultValue={project.paragraph3} variant="outlined" label="Paragraph3" {...register('paragraph3', id ? '' : { required: 'Paragraph3 is required !' })} />
                        {errors.paragraph3 && (
                            <small style={{ color: 'red' }}>{errors.paragraph3.message}</small>
                        )}
                        <TextField type="text"slotProps={{inputLabel:{shrink: true}}} multiline rows={8} defaultValue={project.paragraph4} variant="outlined" label="Paragraph4" {...register('paragraph4', id ? '' : { required: 'Paragraph4 is required !' })} />
                        {errors.paragraph4 && (
                            <small style={{ color: 'red' }}>{errors.paragraph4.message}</small>
                        )}
                    </Box>
                    <br />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row', md: 'row' }, gap: 4 }}>
                        <TextField type="file" onChange={handleFileChange1} variant="standard" label='Photo1' />
                        <input type="hidden" {...register('photo1', id ? '' : {
                            required: 'Photo is required',
                        })} />
                        <br />
                        {errors.photo1 &&
                            <small style={{ color: 'red' }}>{errors.photo1?.message}</small>
                        }
                        <TextField type="file" onChange={handleFileChange2} variant="standard" label='Photo2' />
                        <input type="hidden" {...register('photo2', id ? '' : {
                            required: 'Photo is required',
                        })} />
                        <br />
                        {errors.photo2 &&
                            <small style={{ color: 'red' }}>{errors.photo2?.message}</small>
                        }
                    </Box>
                    <br />
                    <TextField type="date" slotProps={{inputLabel:{shrink: true}}} defaultValue={project.date} variant="standard" label="Date" {...register('date', id ? '' : { required: 'Date is required !' })} />
                    {errors.date && (
                        <small style={{ color: 'red' }}>{errors.date.message}</small>
                    )}
                    <br />
                    <Button type="submit" variant="contained" color="success" sx={{ float: 'right', margin: '3vh' }}>{sendMode ? "Submitting..." :(id ? 'Update' : 'Save')}</Button>
                    <br />
                    <br />
                </form>
            </Paper>
        </Box>
    )
}

export default AddProject
