import { LoginOutlined, Person, Visibility, VisibilityOff } from "@mui/icons-material"
import { Box, Button, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import AxiosAPI from "../Components/axios";
import { useMainContext } from "../Components/ContextApi";
import { useEffect, useState } from "react";
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from "@emotion/react";
import ForgotPassword from "../ForgotPassword";
import Toastify from "../Components/Toastify";


// Emotion cache for RTL/LTR
const createEmotionCache = (direction) =>
    createCache({
        key: direction === 'rtl' ? 'muirtl' : 'mui',
        stylisPlugins: direction === 'rtl' ? [rtlPlugin] : [],
    });
function Login() {
    const [openDialog,setOpenDialog]=useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setToken, setCurrentUser } = useMainContext();
    const [error, setError] = useState('');
    const [timer, setTimer] = useState(null);
    const [language, setLanguage] = useState('en');
    const direction = language === 'en' ? 'ltr' : 'rtl';
    const [showPassword,setShowPassword]=useState(false);
    const [Stoast,setStoast]=useState(false);
    const [Ftoast,setFtoast]=useState(false);
    const [sendMode,setSendMode]=useState(false);

    const handleShowPassword=()=>{
        setShowPassword(!showPassword);
    }
    const onSubmit = (data) => {
        setSendMode(true);
        AxiosAPI.post('/login', { ...data })
            .then((data) => {
                console.log(data.data);
                setCurrentUser(data.data.user);
                setToken(data.data.token);
                navigate('/dashboard');
                setSendMode(false);
                setStoast(true);

            }).catch((err) => {
                setSendMode(false);
                setFtoast(true);
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
            });
            setStoast(false);
            setFtoast(false);
        console.log(error);

    }




    const startTimer = (duration = 60) => {
        const endTime = Date.now();
        localStorage.setItem("loginBanTime", endTime);
        setTimer(duration);

        const interval = setInterval(() => {
            const timeElapsed = Math.floor((Date.now() - endTime) / 1000);
            const timeLeft = Math.max(0, duration - timeElapsed);
            setTimer(timeLeft);

            if (timeLeft <= 0) {
                clearInterval(interval);
                localStorage.removeItem("loginBanTime"); // Remove ban
                setTimer(null);
            }
        }, 1000);
    };


    useEffect(() => {
        const storedTime = localStorage.getItem("loginBanTime");
        if (storedTime) {
            const timeRemaining = Math.max(0, 60 - Math.floor((Date.now() - storedTime) / 1000));
            if (timeRemaining > 0) {
                startTimer(timeRemaining);
            } else {
                localStorage.removeItem("loginBanTime"); // Remove expired ban
            }
        }
    }, []);

    useEffect(() => {
        document.body.setAttribute('dir', direction); // Update body dir attribute
    }, [direction]);
    return (
        <CacheProvider value={createEmotionCache(direction)}>
            {Stoast && (<Toastify message="Login Successfully Done !" alertType="success"/>)}
            {Ftoast && (<Toastify message="Login attempt Failed !" alertType="error"/>)}

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

                        {error && <Typography sx={{ textAlign:'center',color:'red'}}>{error}</Typography>}
                        {timer !== null && <Typography sx={{ textAlign:'center',color:'red'}}>Try again in <Typography sx={{ display:'inline',color:'black',fontSize:'1.2rem' }}>{timer}</Typography> seconds.</Typography>}

                        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', padding: '10vh' }}>
                            <TextField type="email" label="E-Mail" variant="outlined" {...register('email', { required: 'E-Mail is required' })} sx={{ marginBottom: '10px' }} />
                            {errors.email && (
                                <Typography variant="p" color="error" sx={{ fontSize: '10px', marginBottom: '10px' }}>{errors.email.message}</Typography>
                            )}

                            <TextField type={showPassword ?'text':'password'} color="error" sx={{ fontSize: '10px', marginBottom: '10px' }} label="Password" variant="outlined" {...register('password', { required: "Password is required" })}
                                slotProps={{
                                    input:{
                                    endAdornment:(
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleShowPassword}>
                                                {showPassword ? <VisibilityOff/>:<Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                    )}
                                 }}
                            />
                            {errors.password && (
                                <Typography variant="p" color="error" sx={{ fontSize: '10px', marginBottom: '10px' }}>{errors.password.message}</Typography>
                            )}
                            {timer != null ?(
                            <Button type="button" variant="contained" sx={{ width: '50%', marginLeft: '20%' }} color="success" startIcon={<LoginOutlined />}>{'Wait 1 Minute'}</Button>
                            ):(
                            <Button type="submit" disabled={timer != null} variant="contained" sx={{ width: '50%', marginLeft: '20%' }} color="success" startIcon={<LoginOutlined />}>{sendMode ? "Submitting..." :'Login'}</Button>
                            )}
                        </form>
                        <Typography align="center">
                        <Button variant="text" onClick={()=>setOpenDialog(!openDialog)} sx={{ paddingBottom: '20px' }} align="center">
                            Forgot the password ?
                        </Button>
                        </Typography>
                        </Paper>
                </Box>

                {/* Dialog */}
                {openDialog &&(
                    <ForgotPassword openDialog1={openDialog}/>
                )}
            </Box>
        </CacheProvider>
    )
}

export default Login
