import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { AppBar, Box, Button, CssBaseline, Drawer, IconButton, List, Menu, MenuItem , MenuList, Select, Toolbar, Typography } from "@mui/material"
import { Navigate, Link as RouterLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CacheProvider } from '@emotion/react';
import i18n from '../../i18n';
import { Dashboard, Home, HomeOutlined, Info, InfoOutlined, Logout, MenuBook, MenuOutlined, PeopleOutline, PhotoCamera, PhotoCameraOutlined, SecurityOutlined, WorkOutline } from '@mui/icons-material';
import { icon } from 'leaflet';
import AxiosAPI from '../Components/axios';
import { useMainContext } from '../Components/ContextApi';


const drawerWidth = 240;
// Emotion cache for RTL/LTR
const createEmotionCache = (direction) =>
    createCache({
        key: direction === 'rtl' ? 'muirtl' : 'mui',
        stylisPlugins: direction === 'rtl' ? [rtlPlugin] : [],
    });

const navitems = [
    { url: '/', name: 'WebSite',icon:<HomeOutlined/>},
    { url: '/dashboard', name: 'Projects',icon:<WorkOutline/> },
    { url: '/dashboard/media', name: 'Media',icon:<PhotoCameraOutlined/> },
    { url: '/dashboard/info', name: 'Info',icon:<InfoOutlined/> },
    { url: '/dashboard/users', name: 'Users',icon:<PeopleOutline/> },
]

function DashboardLayoutMain({ children, window }) {
    const [language, setLanguage] = useState('en');
    const [openDrawer, setOpenDrawer] = useState(false);
    const direction = language === 'en' ? 'ltr' : 'rtl';
    const {setToken,setCurrentUser,currentUser}=useMainContext();
    const navigate=useNavigate();

    const handleDrawerToggle = () => {
        setOpenDrawer(!openDrawer);
    }
    const handleLogout=()=>{
        if(!localStorage.getItem('YHTOKEN')){
            navigate('/login');
        }
        AxiosAPI.get('/logout').then((res)=>{
            console.log(res);
            navigate('/login');
            localStorage.removeItem('YHTOKEN');
            setCurrentUser(null);
            setToken(null);
        }).catch((error)=>{
            console.log(error);
        })
    }
    const handleEmailVerify=()=>{
        AxiosAPI.get('/emailverify').then((res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error);
        })


    }
    useEffect(() => {
        document.body.setAttribute('dir', direction); // Update body dir attribute
    }, [direction]);
    useEffect(()=>{
        if(!localStorage.getItem('YHTOKEN')){
            navigate('/login');
        }
        AxiosAPI.get('/user/auth/show')
        .then((data)=>{
            setCurrentUser(data.data);
            console.log(data);

        }).catch((error)=>{
            console.log(error);

        })
    },[]);
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <CacheProvider value={createEmotionCache(direction)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <CssBaseline />
                {/* AppBar */}
                <AppBar component="nav" sx={{ width: '100%',backgroundColor:'white' }}>
                    <Toolbar sx={{ paddingX: '16px' }}>
                        <IconButton  edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 ,color:'black'}}>
                            <MenuOutlined variant='' sx={{color:'black',backgroundColor:''}}/>
                        </IconButton>
                        <Box sx={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                        <Typography variant="h6" sx={{color:'black'}}>
                            Dashboard
                        </Typography>
                        <Typography variant="p" sx={{color:'gray'}}>
                            {currentUser.name}_{currentUser.lastName}
                        </Typography>
                        {/* Language */}
                        <Select value={language} size='small' onChange={(e) => { setLanguage(e.target.value); i18n.changeLanguage(e.target.value) }}>
                            <MenuItem value='en'>English</MenuItem>
                            <MenuItem value='fa'>Persian</MenuItem>
                            <MenuItem value="pa">Pashto</MenuItem>
                        </Select>
                        </Box>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        container={container} variant="temporary"
                        open={openDrawer} onClose={handleDrawerToggle}
                        ModalProps={{ keepMounted: true }}
                        sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
                    >
                        {/* Content of the Drawer */}
                        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', direction }}>
                            <Typography variant="h6" sx={{ my: 2 }}>YarHamBashim</Typography>
                            <hr />
                            <List sx={{ textDecorationLine: 'none', color: 'black' }}>
                            <Box sx={{ display:'flex',flexDirection:'column',alignItems:'flex-start',paddingX:'5vh',backgroundColor:'' }}>
                                {navitems.map((item, index) => (
                                    <RouterLink key={index} to={item.url}>
                                        <Button variant="text" startIcon={item.icon} sx={{ width: '100%' }}>{item.name}</Button>
                                    </RouterLink>
                                ))}
                                {!currentUser.email_verified_at &&(
                                <Button variant="text" startIcon={<SecurityOutlined/>} onClick={handleEmailVerify} sx={{ width: '100%',justifyContent:'start' }}>VerifyEmail</Button>
                                )}
                                <Button variant="text" startIcon={<Logout/>} onClick={handleLogout} sx={{ width: '100%',justifyContent:'start' }}>Logout</Button>
                            </Box>
                            </List>
                        </Box>
                    </Drawer>
                </nav>
                <Box component="main">
                    <Toolbar />
                    {!currentUser.email_verified_at && (
                        <Box sx={{ marginY:'5vh' }}>
                            <Typography variant='h6' sx={{ color:'red', textAlign:'center' }}>Your E-Mail Is Not Verified</Typography>
                            <Typography sx={{ color:'red',fontSize:'12px', textAlign:'center' }}>Please verify for full access</Typography>
                            <Typography sx={{ color:'red',fontSize:'12px', textAlign:'center' }}>1:Click on VERIFYEMAIL button</Typography>
                            <Typography sx={{ color:'red',fontSize:'12px', textAlign:'center' }}>2:An E-Mail will be sended to your E-Mail address</Typography>
                            <Typography sx={{ color:'red',fontSize:'12px', textAlign:'center' }}>3:Check your E-Mail and get verified</Typography>
                        </Box>
                    )}
                    {children}
                </Box>
            </Box>
        </CacheProvider>
    )
}

export default DashboardLayoutMain
