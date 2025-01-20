import { Box, Container, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import {Link as RouterLink } from 'react-router-dom';
import AxiosAPI from "./axios";

function Footer() {
    const [links,setLinks]=useState([]);
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
              <Typography variant='h5' sx={{ fontSize: { xs: '1rem', sm: '2rem', md: '2rem' } }}>YarHamBashim</Typography>
            </Box>
            <Box >
              <RouterLink to='/' style={{ color: 'white', textDecorationLine: 'none' }}>
                <Typography variant='h5' underline='none' sx={{ fontSize: { textDecorationSkipInk: 'none', xs: '1rem', sm: '1.5rem', md: '1.5rem' } }}>
                  Home
                </Typography>
              </RouterLink>
              <RouterLink to='/aboutUs' style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>About us</Typography></RouterLink>
              <RouterLink to='/aboutUs' style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>Team</Typography></RouterLink>
              <RouterLink to='/whatwd' style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>What we do</Typography></RouterLink>
              <RouterLink to='/contact' style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>Contact</Typography></RouterLink>
            </Box>
            <Box>
              <RouterLink  style={{ color: 'white', textDecorationLine: 'none' }}> <Typography variant='h5' sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem' } }}>More</Typography></RouterLink>
              <RouterLink to='/' style={{ color: 'gray', textDecorationLine: 'none' }}> <Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>Projects</Typography></RouterLink>
              <RouterLink to='/' style={{ color: 'gray', textDecorationLine: 'none' }}> <Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>Events</Typography></RouterLink>
              <RouterLink to='/' style={{ color: 'gray', textDecorationLine: 'none' }}> <Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>Donate</Typography></RouterLink>
            </Box>
            <Box>
              <RouterLink style={{ color: 'white', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem' } }}>Connect</Typography></RouterLink>
              {links.facebook && (
                  <RouterLink to={links.facebook} style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>Facebook</Typography></RouterLink>
                )}
                {links.instagram && (
                    <RouterLink to={links.instagram} style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>Instagram</Typography></RouterLink>
                )}
                {links.x && (
                    <RouterLink to={links.x} style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>X</Typography></RouterLink>
                )}
                {links.linkedin && (
                     <RouterLink to={links.linkedin} style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>LinkedIn</Typography></RouterLink>
                 )}
                 {links.youtube && (
                    <RouterLink to={links.youtube} style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>YouTube</Typography></RouterLink>
                 )}
                {links.whatsapp && (
                      <RouterLink to={links.whatsapp} style={{ color: 'gray', textDecorationLine: 'none' }}><Typography variant='h5' sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' } }}>Whatsapp</Typography></RouterLink>
                )}
            </Box>
          </Container>
          <Typography align='center' variant='body2' sx={{ margin: { xs: '6vh', sm: '2vh', md: '2vh' } }}>
            ©{new Date().getFullYear()} YarHamBashim. All rights reserved.
          </Typography>
        </Box>
  )
}

export default Footer
