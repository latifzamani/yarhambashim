import { useEffect, useState } from 'react'
import AxiosAPI from './axios';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, X } from '@mui/icons-material';
import { useTranslation } from "react-i18next";
import LazyLoading from './LazyLoading';

function TeamMembers() {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    const { t } = useTranslation();
    const FetchDataTeam = () => {
        AxiosAPI.get('/members/show').then((data) => {
            setMembers(data.data);
            console.log(data.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);

        })
    }

    useEffect(() => {
        FetchDataTeam();
    }, []);
    return (
        <>

        <Box sx={{ marginTop: '3vh' }}>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>{t('metourteam')}</Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>{t('metourteamt')}</Typography>
        {loading ?
            (
                <LazyLoading />
            ) :
             (
            <Box sx={{ padding: '2vh' }}>
                <Grid container spacing={2} justifyContent="center">
                    {members.map((member, index) => (
                        <Grid key={index} item xs={12} sm={6} md={3}>
                            <Card sx={{ width: '30vh' }}>
                                <CardMedia component="img" image={`${import.meta.env.VITE_API_BASE_URL}/storage/${member.photo}`} sx={{ height: { xs: '20vh', sm: '30vh', md: '30vh' }, }} />
                                <CardContent>
                                    <Typography variant="h6" sx={{ textAlign: 'center' }}>{member.fullName}</Typography>
                                    <Typography variant="body1" sx={{ textAlign: 'center' }}>{member.position}</Typography>
                                    <Typography sx={{ textAlign: 'center', marginY: '1vh' }}>
                                        {member.facebook && (
                                            <Link to={member.facebook}><Instagram sx={{ color: "rgb(0,0,0)" }} /></Link>
                                        )}
                                        {member.instagram && (
                                            <Link to={member.instagram}><Facebook sx={{ color: "rgb(0,0,0)", marginX: '1vh' }} /></Link>
                                        )}
                                        {member.x && (
                                            <Link to={member.x}><X sx={{ color: "rgb(0,0,0)" }} /></Link>
                                        )}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            )}

        </Box>
        </>
    )
}

export default TeamMembers
