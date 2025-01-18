
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Home, InfoOutlined, Menu, MenuOutlined, MessageOutlined, People, PhotoAlbumOutlined } from '@mui/icons-material';
import { AppBar, Box, Button, Container, CssBaseline, Drawer, IconButton, List, MenuItem, Select, Tab, Tabs, TextField, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';
import rtlPlugin from 'stylis-plugin-rtl';
import i18n from '../../i18n';

const drawerWidth = 240;
// Emotion cache for RTL or LTR
const createEmotionCache = (direction) =>
  createCache({
    key: direction === 'rtl' ? 'muirtl' : 'mui',
    stylisPlugins: direction === 'rtl' ? [rtlPlugin] : [],
  });

const navItems = [
  { url: '/', name: 'Home',icon:<Home/> },
  { url: '/aboutUs', name: 'About Us',icon:<InfoOutlined/> },
  { url: '/whatwd', name: 'What We Do',icon:<People/> },
  { url: '/media', name: 'Media',icon:<PhotoAlbumOutlined/> },
  { url: '/contact', name: 'Contact',icon:<MessageOutlined/> },
  { url: '/dashboard', name: 'Dashboard',icon:<MenuOutlined/> },
]


function Layout({ children, window }) {
  const [language, setLanguage] = useState('en');
  const [openDrawer, setOpenDrawer] = useState(false);
  const direction = language === 'en' ? 'ltr' : 'rtl';
  const [tabvalue, setTabvalue] = useState();

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
            <Typography variant='h6' component="div" sx={{ display: { xs: 'none', sm: 'block', md: 'block' }, color: 'black' }}>
              YarHamBashim
            </Typography>
            {/* Tabs */}
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
              <Tabs value={tabvalue} onChange={handleTabs} centered sx={{}}>
                {navItems.map((item, index) => (
                  <RouterLink to={item.url} key={index} style={{}}>
                    <Tab key={index} sx={{ color: 'black', textTransform: 'none' }} label={item.name} />
                  </RouterLink>
                ))}
              </Tabs>
            </Box>
            {/* Donat */}
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Link to='/donation'>
                <Button variant='contained' sx={{ backgroundColor: 'green' }}>
                  Donat
                </Button>
              </Link>
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
                {navItems.map((item, index) => (
                  <RouterLink key={index} to={item.url}>
                    <Button variant='text' startIcon={item.icon} sx={{ width: '100%', }}>{item.name}</Button>
                  </RouterLink>
                ))}
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
        <Box component="footer" sx={{ backgroundColor: 'black', color: 'white', py: 2, mt: 'auto', marginBottom: { xs: '20vh', sm: '0', md: '0' } }}>
          <Container maxWidth='lg' sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', flexDirection: 'row', paddingTop: '16px' }}>
            <Box>
              <Typography variant='h5' sx={{ fontSize: { xs: '1rem', sm: '2rem', md: '2rem' } }}>YarHamBashim</Typography>
            </Box>
            <Box >
              <RouterLink to='/' style={{ color: 'white', textDecorationLine: 'none' }}>
                <Typography variant='h5' underline='none' sx={{ fontSize: { textDecorationSkipInk: 'none', xs: '1rem', sm: '1.5rem', md: '1.5rem' } }}>
                  Home
                </Typography>
              </RouterLink>
              <RouterLink to='/' style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>About</Typography></RouterLink>
              <RouterLink to='/' style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>Team</Typography></RouterLink>
              <RouterLink to='/' style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>What we do</Typography></RouterLink>
              <RouterLink to='/' style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>Contact</Typography></RouterLink>
            </Box>
            <Box>
              <RouterLink to='/' style={{ color: 'white', textDecorationLine: 'none' }}> <Typography variant='h5' sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem' } }}>More</Typography></RouterLink>
              <RouterLink to='/' style={{ color: 'gray', textDecorationLine: 'none' }}> <Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>About</Typography></RouterLink>
              <RouterLink to='/' style={{ color: 'gray', textDecorationLine: 'none' }}> <Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>Team</Typography></RouterLink>
              <RouterLink to='/' style={{ color: 'gray', textDecorationLine: 'none' }}> <Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>What we do</Typography></RouterLink>
              <RouterLink to='/' style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>Contact</Typography></RouterLink>
            </Box>
            <Box>
              <RouterLink to='/' style={{ color: 'white', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem' } }}>Connect</Typography></RouterLink>
              <RouterLink to='/' style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>About</Typography></RouterLink>
              <RouterLink to='/' style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>Team</Typography></RouterLink>
              <RouterLink to='/' style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>What we do</Typography></RouterLink>
              <RouterLink to='/' style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>Contact</Typography></RouterLink>
            </Box>
          </Container>
          <Typography align='center' variant='body2' sx={{ margin: { xs: '6vh', sm: '2vh', md: '2vh' } }}>
            ©{new Date().getFullYear()} YarHamBashim. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </CacheProvider>
  );
}
export default Layout;
