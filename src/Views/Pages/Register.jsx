import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Container, IconButton, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material';
import {useState } from 'react'
import { useForm } from 'react-hook-form';
import AxiosAPI from '../Components/axios';


function Register() {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({defaultValues:{role:"CEO"}});
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onSubmit = (data) => {
        AxiosAPI.post('/user/register',{...data})
        .then((response)=>{
            console.log(response);
        }).then((error)=>{
            console.log(error);
        })
    }
    return (
        <Container sx={{ justifyItems: 'center' }}>
            <Typography variant='h6'>Register Form</Typography>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '50%', margin: '10px' }}>
                <TextField type='text' {...register('name', { required: 'Name is required' })} variant='outlined' label="Name" />
                {errors.name && (
                    <Typography variant='p' fontSize='12px' color='red'>{errors.name.message}</Typography>
                )}
                <TextField type='text' {...register('lastName', { required: 'LastName is required' })} variant='outlined' label="LastName" />
                {errors.lastName && (
                    <Typography variant='p' fontSize='12px' color='red'>{errors.lastName.message}</Typography>
                )}
                <TextField type='email' {...register('email', { required: 'E-Mail is required' })} variant='outlined' label="E-Mail" />
                {errors.email && (
                    <Typography variant='p' fontSize="12px" color='red'>{errors.email.message}</Typography>
                )}


                <Select
                    {...register('role', { required: 'Position is required' })}
                    defaultValue="position"
                    onChange={(e) => setValue('role', e.target.value, { shouldValidate: true })} // Trigger validation
                >
                    <MenuItem value="position" disabled>
                        Select Position
                    </MenuItem>
                    <MenuItem value="CEO">CEO</MenuItem>
                    <MenuItem value="manager">Manager</MenuItem>
                    <MenuItem value="teacher">Teacher</MenuItem>
                </Select>
                {errors.role && (
                    <Typography variant="p" fontSize="12px" color="red">
                        {errors.role.message}
                    </Typography>
                )}


                <TextField
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', {
                        required: 'Password is required',
                        minLength: { value: 6, message: 'Password must be at least 6 characters' },
                    })}
                    variant="outlined"
                    label="Password"
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

                {errors.password && (
                    <Typography variant='p' fontSize='12px' color='red'>{errors.password.message}</Typography>
                )}
                <TextField type={showPassword ? 'text':'password'} {...register('password_confirmation', { required: 'Re-Enter your password', validate: (value) => value === watch('password') || "Password don't match" })} variant='outlined' label="Confirm Password"
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
                <Button type='submit' variant='outlined' sx={{ marginLeft: '60%' }}>Register</Button>
            </form>

        </Container>
    )
}

export default Register;