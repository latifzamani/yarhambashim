import { Box, Container, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import {Link as RouterLink } from 'react-router-dom';
import AxiosAPI from "./axios";
import { useTranslation } from "react-i18next";

function Footer() {
    const [links,setLinks]=useState([]);
    const {t}=useTranslation();
    const FetchData=()=>{
        AxiosAPI.get('/links/show').then((data)=>{
            setLinks(data.data[0]);
            console.log(data.data[0]);

        }).catch((error)=>{
            console.log(error);

        })
    }

    useEffect(()=>{
        FetchData();
    },[]);
  return (
    <Box component="footer" sx={{ backgroundColor: 'black', color: 'white', py: 2, mt: 'auto', marginBottom: { xs: '20vh', sm: '0', md: '0' } }}>
          <Container maxWidth='lg' sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', flexDirection: 'row', paddingTop: '16px' }}>
            <Box>
              <Typography variant='h5' sx={{ fontSize: { xs: '1rem', sm: '2rem', md: '2rem' } }}>{t('letsbefriend')}</Typography>
            </Box>
            <Box >
              <RouterLink to='/' style={{ color: 'white', textDecorationLine: 'none' }}>
                <Typography variant='h5' underline='none' sx={{ fontSize: { textDecorationSkipInk: 'none', xs: '1rem', sm: '1.5rem', md: '1.5rem' } }}>
                  {t('home')}
                </Typography>
              </RouterLink>
              <RouterLink to='/aboutUs' style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>{t('aboutus')}</Typography></RouterLink>
              <RouterLink to='/aboutUs' style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>{t('team')}</Typography></RouterLink>
              <RouterLink to='/whatwd' style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>{t('whatwedo')}</Typography></RouterLink>
              <RouterLink to='/contact' style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>{t('contact')}</Typography></RouterLink>
            </Box>
            <Box>
              <RouterLink  style={{ color: 'white', textDecorationLine: 'none' }}> <Typography variant='h5' sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem' } }}>{t('more')}</Typography></RouterLink>
              <RouterLink to='/' style={{ color: 'gray', textDecorationLine: 'none' }}> <Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>{t('projects')}</Typography></RouterLink>
              <RouterLink to='/' style={{ color: 'gray', textDecorationLine: 'none' }}> <Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>{t('events')}</Typography></RouterLink>
              <RouterLink to='/' style={{ color: 'gray', textDecorationLine: 'none' }}> <Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>{t('donation')}</Typography></RouterLink>
            </Box>
            <Box>
              <RouterLink style={{ color: 'white', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem' } }}>{t('connect')}</Typography></RouterLink>
              {links.facebook && (
                  <RouterLink to={links.facebook} style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>{t('facebook')}</Typography></RouterLink>
                )}
                {links.instagram && (
                    <RouterLink to={links.instagram} style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>{t('instagram')}</Typography></RouterLink>
                )}
                {links.x && (
                    <RouterLink to={links.x} style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>{t('x')}</Typography></RouterLink>
                )}
                {links.linkedin && (
                     <RouterLink to={links.linkedin} style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>{t('linkedin')}</Typography></RouterLink>
                 )}
                 {links.youtube && (
                    <RouterLink to={links.youtube} style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>{t('youtube')}</Typography></RouterLink>
                 )}
                {links.whatsapp && (
                      <RouterLink to={links.whatsapp} style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>{t('whatsapp')}</Typography></RouterLink>
                )}
            </Box>
          </Container>
          <Typography align='center' variant='body2' sx={{ margin: { xs: '6vh', sm: '2vh', md: '2vh' } }}>
            ©{new Date().getFullYear()} {t('letsbefriend')}. {t('allrightsreserved')}
          </Typography>
        </Box>
  )
}

export default Footer
