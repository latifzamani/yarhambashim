import { AddOutlined, DeleteOutline, EditOutlined } from "@mui/icons-material"
import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AxiosAPI from "../../Components/axios";
import { useMainContext } from "../../Components/ContextApi";
import LazyLoading from "../../Components/LazyLoading";
import { useTranslation } from "react-i18next";
import Toastify from "../../Components/Toastify";

function Users() {
    const [users, setUsers] = useState([]);
    const { currentUser } = useMainContext();
    const [loading, setLoading] = useState(true);
    const {t}=useTranslation();
    const [Stoast,setStoast]=useState(false);
    const [Ftoast,setFtoast]=useState(false);

    const FetchData = () => {
        AxiosAPI.get('/user/show')
            .then((data) => {
                setUsers(data.data);
                console.log(data.data);
                setLoading(false);
            }).catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }

    const handleDelete = (id) => {
        AxiosAPI.get(`/user/${id}/delete`)
            .then((response) => {
                console.log(response);
                setStoast(true);
                FetchData();
            }).catch((error) => {
                console.log(error);
                setFtoast(true);
            });
            setStoast(false);
            setFtoast(false);
    }

    useEffect(() => {
        FetchData();
    }, []);
    let user = [];
    user = users.filter(user => user.email === currentUser.email)[0];
    console.log(user);

    return (
        <>
            {Stoast && (<Toastify message={t('successfullydone')} alertType="success"/>)}
            {Ftoast && (<Toastify message={t('Failed')} alertType="error"/>)}

            {loading ?
                (
                    <LazyLoading />
                ) : (

                    <Box sx={{ margin: '3vh' }}>
                        <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>{t('users')}/{t('accounts')}</Typography>
                        {currentUser.role === 'admin' && (
                            <Link to='/dashboard/register'>
                                <Button variant="outlined" color='success' sx={{ float: 'right', marginX: '5vh' }} startIcon={<AddOutlined />}>{t('user')}</Button>
                            </Link>
                        )}
                        <TableContainer component={Paper} sx={{ maxHeight: '60vh', overflowY: 'scroll', scrollbarWidth: 'thin' }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">{t('name')}</TableCell>
                                        <TableCell align="center">{t('lastname')}</TableCell>
                                        <TableCell align="center">{t('email')}</TableCell>
                                        <TableCell align="center">{t('role')}</TableCell>
                                        <TableCell align="center">{t('emailverified')}</TableCell>
                                        <TableCell align="center">{t('action')}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {currentUser.role === 'normal' && (
                                        <TableRow key={user?.id}>
                                            <TableCell align="center">{user?.name}</TableCell>
                                            <TableCell align="center">{user?.lastName}</TableCell>
                                            <TableCell align="center">{user?.email}</TableCell>
                                            <TableCell align="center">{user?.role}</TableCell>
                                            <TableCell align="center">{user?.email_verified_at}</TableCell>
                                            <TableCell align="center">
                                                <Link to={`/dashboard/${user?.id}/editUser`}>
                                                    <EditOutlined color="success" />
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    )}

                                    {currentUser.role === 'admin' && users.map((user) => (
                                        <TableRow key={user?.id}>
                                            <TableCell align="center">{user?.name}</TableCell>
                                            <TableCell align="center">{user?.lastName}</TableCell>
                                            <TableCell align="center">{user?.email}</TableCell>
                                            <TableCell align="center">{user?.role}</TableCell>
                                            <TableCell align="center">{user?.email_verified_at}</TableCell>
                                            <TableCell align="center">
                                                <Link to={`/dashboard/${user?.id}/editUser`}>
                                                    <EditOutlined color="success" />
                                                </Link>||
                                                {currentUser.email !== user?.email && (
                                                    <IconButton>
                                                        <DeleteOutline color="error" onClick={() => handleDelete(user?.id)} />
                                                    </IconButton>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}


                                </TableBody>
                            </Table>

                        </TableContainer>
                    </Box>
                )}
        </>
)}

export default Users
