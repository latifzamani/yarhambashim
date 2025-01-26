import { AddOutlined, DeleteOutline, EditOutlined } from "@mui/icons-material"
import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AxiosAPI from "../../Components/axios";
import { useMainContext } from "../../Components/ContextApi";
import LazyLoading from "../../Components/LazyLoading";

function Users() {
    const [users, setUsers] = useState([]);
    const { currentUser } = useMainContext();
    const [loading, setLoading] = useState(true);


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
                FetchData();
            }).catch((error) => {
                console.log(error);

            });
    }

    useEffect(() => {
        FetchData();
    }, []);
    let user = [];
    user = users.filter(user => user.email === currentUser.email)[0];
    console.log(user);

    return (
        <>
            {loading ?
                (
                    <LazyLoading />
                ) : (

                    <Box sx={{ margin: '3vh' }}>
                        <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>User Accounts</Typography>
                        {currentUser.role === 'admin' && (
                            <Link to='/dashboard/register'>
                                <Button variant="outlined" color='success' sx={{ float: 'right', marginX: '5vh' }} startIcon={<AddOutlined />}>User</Button>
                            </Link>
                        )}
                        <TableContainer component={Paper} sx={{ maxHeight: '60vh', overflowY: 'scroll', scrollbarWidth: 'thin' }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Name</TableCell>
                                        <TableCell align="center">Last Name</TableCell>
                                        <TableCell align="center">E-Mail</TableCell>
                                        <TableCell align="center">Role</TableCell>
                                        <TableCell align="center">E-Mail Verified</TableCell>
                                        <TableCell align="center">Action</TableCell>
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
