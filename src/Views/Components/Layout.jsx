
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Home, InfoOutlined, Menu, MenuOutlined, MessageOutlined, People, PhotoAlbumOutlined } from '@mui/icons-material';
import { AppBar, Box, Button, Container, CssBaseline, Drawer, IconButton, List, MenuItem, Select, Tab, Tabs, TextField, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';
import rtlPlugin from 'stylis-plugin-rtl';
import i18n from '../../i18n';
import Footer from './Footer';
import { useMainContext } from './ContextApi';
import { useTranslation } from 'react-i18next';

const drawerWidth = 240;
// Emotion cache for RTL or LTR
const createEmotionCache = (direction) =>
    createCache({
        key: direction === 'rtl' ? 'muirtl' : 'mui',
        stylisPlugins: direction === 'rtl' ? [rtlPlugin] : [],
    });


    function Layout({ children, window }) {
        const {t}=useTranslation();


        const navItems = [
            { url: '/', name: `${t('home')}`,icon:<Home/> },
            { url: '/aboutUs', name: `${t('aboutus')}`,icon:<InfoOutlined/> },
            { url: '/whatwd', name: `${t('whatwedo')}`,icon:<People/> },
            { url: '/media', name: `${t('home')}`,icon:<PhotoAlbumOutlined/> },
            { url: '/contact', name: `${t('contact')}`,icon:<MessageOutlined/> },
        ]

  const [language, setLanguage] = useState('en');
  const [openDrawer, setOpenDrawer] = useState(false);
  const direction = language === 'en' ? 'ltr' : 'rtl';
  const [tabvalue, setTabvalue] = useState();
  const {currentUser}=useMainContext();

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  }

  const handleTabs = (e, newValue) => {
    setTabvalue(newValue);
  }

  useEffect(() => {
    document.body.setAttribute('dir', direction); // Update body dir attribute
  }, [direction]);

  const container = window !== undefined ? () => window().document.body : undefined;
  let token=localStorage.getItem('YHTOKEN');
  return (
    <CacheProvider value={createEmotionCache(direction)}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        {/* Appbar */}
        <AppBar component="nav" sx={{ width: '100%', backgroundColor: 'white', }}>
          <Toolbar sx={{ justifyContent: 'space-between', paddingX: '16px' }}>
            <IconButton color="default" edge='start' onClick={handleDrawerToggle} sx={{ mr: 2, display: { md: 'none' } }}>
              <Menu />
            </IconButton>
            {token ? (
                <Typography variant='h6' component="div" sx={{ display: { xs: 'none', sm: 'block', md: 'block' }, color: 'black' }}>
                YarHamBashim
              </Typography>
            ):(
            <Link to='/login'>
            <Typography variant='h6' component="div" sx={{ display: { xs: 'none', sm: 'block', md: 'block' }, color: 'black' }}>
              YarHamBashim
            </Typography>
            </Link>
            )}
            {/* Tabs */}
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
              <Tabs value={tabvalue} onChange={handleTabs} centered sx={{}}>
                {navItems.map((item, index) => (
                  <RouterLink to={item.url} key={index} style={{}}>
                    <Tab key={index} sx={{ color: 'black', textTransform: 'none' }} label={item.name} />
                  </RouterLink>
                ))}
                {token && (
                <RouterLink to='/dashboard' style={{}}>
                    <Tab sx={{ color: 'black', textTransform: 'none' }} label={t('dashboard')} />
                </RouterLink>
                )}
              </Tabs>
            </Box>
            {/* Donat */}
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Link to='/donation'>
                <Button variant='contained' sx={{ backgroundColor: 'green' }}>
                  {t('donation')}
                </Button>
              </Link>
              {/* Language */}
              <Select value={language} size='small' onChange={(e) => { setLanguage(e.target.value); i18n.changeLanguage(e.target.value) }}>
                <MenuItem value='en'>English</MenuItem>
                <MenuItem value='fa'>فارسی</MenuItem>
                <MenuItem value="pa">پښتو</MenuItem>
              </Select>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container} variant='temporary'
            open={openDrawer} onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{ display: { xs: 'block', sm: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
          >
            {/* Content of the Drawer */}
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', direction }}>
              <Typography variant='h6' sx={{ my: 2 }}>YarHamBashim</Typography>
              <hr />
              <List sx={{ textDecorationLine: 'none', color: 'black' }}>
                <Box sx={{ display:'flex',flexDirection:'column',alignItems:'flex-start',paddingX:'5vh',backgroundColor:'' }}>
                {navItems.map((item, index) => (
                  <RouterLink key={index} to={item.url}>
                    <Button variant='text' startIcon={item.icon} sx={{ width: '100%', }}>{item.name}</Button>
                  </RouterLink>
                ))}
                {token && (
                  <RouterLink  to='/dashboard'>
                    <Button variant='text' startIcon={<MenuOutlined/>} sx={{ width: '100%', }}>{t('dashboard')}</Button>
                  </RouterLink>
                )}
                </Box>
              </List>
            </Box>
          </Drawer>
        </nav>
        {/* MainContent */}
        <Box component="main">
          <Toolbar />
          {children}
        </Box>
        {/* Footer */}
        <Footer/>
      </Box>
    </CacheProvider>
  );
}
export default Layout;
