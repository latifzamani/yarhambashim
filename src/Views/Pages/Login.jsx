import { LoginOutlined, Person } from "@mui/icons-material"
import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import AxiosAPI from "../Components/axios";
import { useMainContext } from "../Components/ContextApi";
import { useEffect, useState } from "react";
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from "@emotion/react";


// Emotion cache for RTL/LTR
const createEmotionCache = (direction) =>
    createCache({
        key: direction === 'rtl' ? 'muirtl' : 'mui',
        stylisPlugins: direction === 'rtl' ? [rtlPlugin] : [],
    });
function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setToken, setCurrentUser } = useMainContext();
    const [error, setError] = useState('');
    const [timer, setTimer] = useState(null);
    const [language, setLanguage] = useState('en');
    const direction = language === 'en' ? 'ltr' : 'rtl';

    const onSubmit = (data) => {

        AxiosAPI.post('/login', { ...data })
            .then((data) => {
                console.log(data.data);
                setCurrentUser(data.data.user);
                setToken(data.data.token);
                navigate('/dashboard');

            }).catch((err) => {
                // console.log(err);
                if (err.status === 429) {
                    setError(err.message);
                    startTimer();
                } else if (err.status === 401) {
                    setError(err.message);
                }
                else if (err.status === 422) {
                    setError(err.message);
                } else {
                    setError('An unexpected error occurred.');
                }
            })
        console.log(error);

    }


    const startTimer = () => {
        let timeLeft = 60; // 1 minute
        setTimer(timeLeft);

        const interval = setInterval(() => {
            timeLeft -= 1;
            setTimer(timeLeft);

            if (timeLeft <= 0) {
                clearInterval(interval);
                setTimer(null); // Reset timer
            }
        }, 1000);
    };
    useEffect(() => {
        document.body.setAttribute('dir', direction); // Update body dir attribute
    }, [direction]);
    return (
        <CacheProvider value={createEmotionCache(direction)}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
                <Box sx={{ backgroundImage: 'url(../../src/assets/images/23.jpeg)', width: { xs: '100%', sm: '100%', md: '50%' }, height: { xs: '40vh', sm: '40vh', md: '100vh' }, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: 'center' }}>
                    <Typography variant="h4" sx={{ backgroundImage: 'linear-gradient(rgb(229,219,219,0.4),rgb(229,219,219,0.5))' }} align="center" marginTop={'50px'}>
                        YarHamBashim
                    </Typography>
                    <Typography variant="h4" sx={{ backgroundImage: 'linear-gradient(rgb(229,219,219,0.4),rgb(229,219,219,0.5))' }} align="center" marginTop={'50px'}>
                        Welcome !
                    </Typography>
                    <Typography variant="h5" align="center" marginTop={'50px'}>
                    </Typography>

                </Box>
                <Box sx={{ backgroundImage: '', width: { xs: '100%', sm: '100%', md: '50%' }, height: { xs: '40vh', sm: '40vh', md: '100vh' } }}>
                    <Paper sx={{ backgroundColor: 'white', margin: '2vh' }}>
                        <Typography variant="h4" align="center" sx={{ marginTop: { xs: '10%', sm: '10%', md: '30%' }, paddingTop: '10px' }}>
                            <Person fontSize="large" sx={{ margin: '12px' }} />
                            User Login
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', padding: '10vh' }}>
                            <TextField type="email" label="E-Mail" variant="outlined" {...register('email', { required: 'E-Mail is required' })} sx={{ marginBottom: '10px' }} />
                            {errors.email && (
                                <Typography variant="p" color="error" sx={{ fontSize: '10px', marginBottom: '10px' }}>{errors.email.message}</Typography>
                            )}

                            <TextField type="password" color="error" sx={{ fontSize: '10px', marginBottom: '10px' }} label="Password" variant="outlined" {...register('password', { required: "Password is required" })} />
                            {errors.password && (
                                <Typography variant="p" color="error" sx={{ fontSize: '10px', marginBottom: '10px' }}>{errors.password.message}</Typography>
                            )}
                            <Button type="submit" disabled={timer != null} variant="contained" sx={{ width: '50%', marginLeft: '20%' }} color="success" startIcon={<LoginOutlined />}>Login</Button>
                        </form>
                        <Typography variant="h6" sx={{ paddingBottom: '20px' }} align="center">
                            Forgot the password ?
                        </Typography>
                        {error && <div className="error">{error}</div>}
                        {timer !== null && <div>Try again in {timer} seconds.</div>}
                    </Paper>
                </Box>
            </Box>
        </CacheProvider>
    )
}

export default Login
