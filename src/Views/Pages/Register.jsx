import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Container, IconButton, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import AxiosAPI from '../Components/axios';
import { useNavigate, useParams } from 'react-router-dom';
import Toastify from '../Components/Toastify';
import { useTranslation } from 'react-i18next';


function Register() {
    const [user, setUser] = useState([]);
    const { register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm({ defaultValues: { role: "normal" } });
    const [showPassword, setShowPassword] = useState(false);
    const { id } = useParams();
    const navigate=useNavigate();
    const [Stoast,setStoast]=useState(false);
    const [Ftoast,setFtoast]=useState(false);
    const [sendMode,setSendMode]=useState(false);
    const {t}=useTranslation();


    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const FetchData = () => {
        AxiosAPI.get(`/user/${id}/show`)
            .then((data) => {
                setUser(data.data);
                reset(data.data);
                console.log(data.data);
            }).catch((error) => {
                console.log(error);

            });
    }

    const onSubmit = (data) => {
        let result = '';
        if (id) {
            setSendMode(true);
            result = AxiosAPI.post(`/user/${id}/update`, { ...data });
        } else {
            setSendMode(true);
            result = AxiosAPI.post('/user/register', { ...data });

        }
        result.then((response) => {
            console.log(response);
            setStoast(true);
            setSendMode(false);
            navigate('/dashboard/users');
        }).then((error) => {
            setSendMode(false);
            setFtoast(true);
            console.log(error);
        })
        setStoast(false);
        setFtoast(false);
    }

    useEffect(() => {
        if (id) {
            FetchData();
        }
    }, [id, reset]);
    return (
        <Container sx={{ justifyItems: 'center', marginY: '10vh' }}>
            {Stoast && (<Toastify message={t('successfullydone')} alertType="success"/>)}
            {Ftoast && (<Toastify message={t('Failed')} alertType="error"/>)}

            <Typography variant='h6'>{t('userregister')}</Typography>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '50%', margin: '10px' }}>
                <TextField type='text' slotProps={{inputLabel:{shrink: true}}} defaultValue={user.name} {...register('name', { required: t('thisisrequired') })} variant='outlined' label={t('name')} />
                {errors.name && (
                    <Typography variant='p' fontSize='12px' color='red'>{errors.name.message}</Typography>
                )}
                <TextField slotProps={{inputLabel:{shrink: true}}} type='text' defaultValue={user.lastName} {...register('lastName', { required: t('thisisrequired') })} variant='outlined' label={t('lastname')} />
                {errors.lastName && (
                    <Typography variant='p' fontSize='12px' color='red'>{errors.lastName.message}</Typography>
                )}
                <TextField slotProps={{inputLabel:{shrink: true}}} type='email' defaultValue={user.email} {...register('email', { required: t('thisisrequired') })} variant='outlined' label={t('email')} />
                {errors.email && (
                    <Typography variant='p' fontSize="12px" color='red'>{errors.email.message}</Typography>
                )}


                <Select
                    {...register('role', { required: t('thisisrequired') })}
                    defaultValue="normal"
                    onChange={(e) => setValue('role', e.target.value, { shouldValidate: true })} // Trigger validation
                >
                    <MenuItem value="position" disabled>
                        Select Role
                    </MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="normal">Normal</MenuItem>
                </Select>
                {errors.role && (
                    <Typography variant="p" fontSize="12px" color="red">
                        {errors.role.message}
                    </Typography>
                )}


                <TextField
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', id?'':{
                        required: t('thisisrequired'),
                        minLength: { value: 6, message: t('passwordcheck') },
                    })}
                    variant="outlined"
                    label="Password"
                    slotProps={{
                        input:{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),}
                    }}
                />

                {errors.password && (
                    <Typography variant='p' fontSize='12px' color='red'>{errors.password.message}</Typography>
                )}
                <TextField type={showPassword ? 'text' : 'password'} {...register('password_confirmation', id?'':{ required: t('reenterpassword'), validate: (value) => value === watch('password') || t('passwordmatch') })} variant='outlined' label={t('passwordconfirmation')}
                    slotProps={{
                        input:{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )},
                    }}

                />
                {errors.password_confirmation && (
                    <Typography variant='p' fontSize='12px' color='red'>{errors.password_confirmation.message}</Typography>
                )}
                <Button type='submit' variant='outlined' sx={{ marginLeft: '60%' }}>{sendMode ? t('submitting'):(id ? t('update') : t('save'))}</Button>
            </form>

        </Container>
    )
}

export default Register;
