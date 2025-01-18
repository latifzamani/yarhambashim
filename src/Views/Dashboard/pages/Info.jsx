import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import image from '../../../assets/images/23.jpeg';
import { Link } from "react-router-dom";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";

function Info() {
    const members = [
        { name: 'Ahmad Karimi', position: 'CEO', photo: image, facebook: 'www.facebook.com/ahmadKarimi/34234', instagram: 'www.facebook.com/ahmadKarimi/34234', x: 'www.facebook.com/ahmadKarimi/34234' },
        { name: 'Ahmad Karimi', position: 'CEO', photo: image, facebook: 'www.facebook.com/ahmadKarimi/34234', instagram: 'www.facebook.com/ahmadKarimi/34234', x: 'www.facebook.com/ahmadKarimi/34234' },
        { name: 'Ahmad Karimi', position: 'CEO', photo: image, facebook: 'www.facebook.com/ahmadKarimi/34234', instagram: 'www.facebook.com/ahmadKarimi/34234', x: 'www.facebook.com/ahmadKarimi/34234' },
        { name: 'Ahmad Karimi', position: 'CEO', photo: image, facebook: 'www.facebook.com/ahmadKarimi/34234', instagram: 'www.facebook.com/ahmadKarimi/34234', x: 'www.facebook.com/ahmadKarimi/34234' },
    ]
    const events = [
        { title: 'A Day with children', description: 'This is a good day for our children...', photo: image, address: 'Shahr-e-new, kabul,Afg', date: '2025/1/1', time: '02:20 PM' },
        { title: 'A Day with children', description: 'This is a good day for our children...', photo: image, address: 'Shahr-e-new, kabul,Afg', date: '2025/1/1', time: '02:20 PM' },
        { title: 'A Day with children', description: 'This is a good day for our children...', photo: image, address: 'Shahr-e-new, kabul,Afg', date: '2025/1/1', time: '02:20 PM' },
    ]
    const percentages = [
        { value: '10', label: 'Kabul' },
        { value: '40', label: 'Mazar' },
        { value: '30', label: 'Herat' },
        { value: '20', label: 'Zabul' },
    ]
    return (
        <Box sx={{ margin: '3vh' }}>
            {/* Team,charts,Events */}
            {/* Team Members */}
            <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>Team Members</Typography>
            <TableContainer component={Paper} sx={{ maxHeight: '60vh', overflowY: 'scroll', scrollbarWidth: 'thin' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Full Name</TableCell>
                            <TableCell align="center">Position</TableCell>
                            <TableCell align="center">Photo</TableCell>
                            <TableCell align="center">FB</TableCell>
                            <TableCell align="center">Instagram</TableCell>
                            <TableCell align="center">X</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {members.map((member, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{member.name}</TableCell>
                                <TableCell align="center">{member.position}</TableCell>
                                <TableCell align="center">
                                    <img src={member.photo} style={{ width: '15vh', height: '15vh', borderRadius: '10%' }} />
                                </TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10vh', textOverflow: 'ellipsis', overflow: 'hidden' }}>{member.facebook}</TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10vh', textOverflow: 'ellipsis', overflow: 'hidden' }}>{member.instagram}</TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10vh', textOverflow: 'ellipsis', overflow: 'hidden' }}>{member.x}</TableCell>
                                <TableCell align='center'>
                                    <Link to='#'><EditOutlined color='success' /></Link>||
                                    <Link to='#'><DeleteOutline color='error' /></Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <br />
            {/* Events */}
            <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>Events</Typography>
            <TableContainer component={Paper} sx={{ maxHeight: '60vh', overflowY: 'scroll', scrollbarWidth: 'thin' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Photo</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Time</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {events.map((event, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{event.title}</TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10vh', textOverflow: 'ellipsis', overflow: 'hidden' }}>{event.description}</TableCell>
                                <TableCell align="center">
                                    <img src={event.photo} style={{ width: '15vh', height: '15vh', borderRadius: '10%' }} />
                                </TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10vh', textOverflow: 'ellipsis', overflow: 'hidden' }}>{event.address}</TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10vh', textOverflow: 'ellipsis', overflow: 'hidden' }}>{event.date}</TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10vh', textOverflow: 'ellipsis', overflow: 'hidden' }}>{event.time}</TableCell>
                                <TableCell align='center'>
                                    <Link to='#'><EditOutlined color='success' /></Link>||
                                    <Link to='#'><DeleteOutline color='error' /></Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <br />
            {/* Chart Percentages */}
            <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>Chart Percentages</Typography>
            <TableContainer component={Paper} sx={{ maxHeight: '40vh', backgroundColor: '', overflowY: 'scroll', scrollbarWidth: 'thin' }}>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Value</TableCell>
                        <TableCell align='center'>Label</TableCell>
                        <TableCell align='center'>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {percentages.map((percentage, index) => (
                        <TableRow key={index}>
                            <TableCell align='center'>{percentage.value}</TableCell>
                            <TableCell align='center'>{percentage.label}</TableCell>
                            <TableCell align='center' sx={{ textOverflow: 'ellipsis', maxWidth: '15vh', overflow: 'hidden' }}>
                                <Link to='#'><EditOutlined color='success' /></Link>||
                                <Link to='#'><DeleteOutline color='error' /></Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </TableContainer>



        </Box>)
}

export default Info
