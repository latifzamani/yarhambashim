import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Container, IconButton, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import AxiosAPI from '../Components/axios';
import { useNavigate, useParams } from 'react-router-dom';


function Register() {
    const [user, setUser] = useState([]);
    const { register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm({ defaultValues: { role: "normal" } });
    const [showPassword, setShowPassword] = useState(false);
    const { id } = useParams();
    const navigate=useNavigate();

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
            result = AxiosAPI.post(`/user/${id}/update`, { ...data });
        } else {
            result = AxiosAPI.post('/user/register', { ...data });

        }
        result.then((response) => {
            console.log(response);
            navigate('/dashboard/users');
        }).then((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        if (id) {
            FetchData();
        }
    }, [id, reset]);
    return (
        <Container sx={{ justifyItems: 'center', marginY: '10vh' }}>
            <Typography variant='h6'>User Register</Typography>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '50%', margin: '10px' }}>
                <TextField type='text' slotProps={{inputLabel:{shrink: true}}} defaultValue={user.name} {...register('name', { required: 'Name is required' })} variant='outlined' label="Name" />
                {errors.name && (
                    <Typography variant='p' fontSize='12px' color='red'>{errors.name.message}</Typography>
                )}
                <TextField slotProps={{inputLabel:{shrink: true}}} type='text' defaultValue={user.lastName} {...register('lastName', { required: 'LastName is required' })} variant='outlined' label="LastName" />
                {errors.lastName && (
                    <Typography variant='p' fontSize='12px' color='red'>{errors.lastName.message}</Typography>
                )}
                <TextField slotProps={{inputLabel:{shrink: true}}} type='email' defaultValue={user.email} {...register('email', { required: 'E-Mail is required' })} variant='outlined' label="E-Mail" />
                {errors.email && (
                    <Typography variant='p' fontSize="12px" color='red'>{errors.email.message}</Typography>
                )}


                <Select
                    {...register('role', { required: 'Position is required' })}
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
                        required: 'Password is required',
                        minLength: { value: 6, message: 'Password must be at least 6 characters' },
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
                <TextField type={showPassword ? 'text' : 'password'} {...register('password_confirmation', id?'':{ required: 'Re-Enter your password', validate: (value) => value === watch('password') || "Password don't match" })} variant='outlined' label="Confirm Password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}

                />
                {errors.password_confirmation && (
                    <Typography variant='p' fontSize='12px' color='red'>{errors.password_confirmation.message}</Typography>
                )}
                <Button type='submit' variant='outlined' sx={{ marginLeft: '60%' }}>{id ? 'Update' : 'Register'}</Button>
            </form>

        </Container>
    )
}

export default Register;
