import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import image from '../../../assets/images/23.jpeg';
import { Link } from "react-router-dom";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";

function Dashboard() {
    const projects=[
        {title:'Children View',subtitle:'Children are the kind',
            Paragraph1:'This is a long paragraph on this...',Paragraph2:'This is a long paragraph on this...',
            Paragraph3:'This is a long paragraph on this...',Paragraph4:'This is a long paragraph on this...',
            photo1:image,photo2:image,

        }
    ]
  return (
    <Box sx={{margin:'3vh'}}>
        <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>Projects</Typography>
            <TableContainer component={Paper} sx={{ maxHeight: '60vh', overflowY: 'scroll', scrollbarWidth: 'thin' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Subtitle</TableCell>
                            <TableCell align="center">Paragraph1</TableCell>
                            <TableCell align="center">Paragraph2</TableCell>
                            <TableCell align="center">Paragraph3</TableCell>
                            <TableCell align="center">Paragraph4</TableCell>
                            <TableCell align="center">Photo1</TableCell>
                            <TableCell align="center">Photo2</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projects.map((project, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{project.title}</TableCell>
                                <TableCell align="center">{project.subtitle}</TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10vh', textOverflow: 'ellipsis', overflow: 'hidden' }}>{project.Paragraph1}</TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10vh', textOverflow: 'ellipsis', overflow: 'hidden' }}>{project.Paragraph2}</TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10vh', textOverflow: 'ellipsis', overflow: 'hidden' }}>{project.Paragraph3}</TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10vh', textOverflow: 'ellipsis', overflow: 'hidden' }}>{project.Paragraph4}</TableCell>
                                <TableCell align="center">
                                    <img src={project.photo1} style={{ width: '15vh', height: '15vh', borderRadius: '10%' }} />
                                </TableCell>
                                <TableCell align="center">
                                    <img src={project.photo1} style={{ width: '15vh', height: '15vh', borderRadius: '10%' }} />
                                </TableCell>
                                <TableCell align='center'>
                                    <Link to='#'><EditOutlined color='success' /></Link>||
                                    <Link to='#'><DeleteOutline color='error' /></Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    </Box>
  )
}

export default Dashboard
