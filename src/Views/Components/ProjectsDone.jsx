import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import image1 from '../../assets/images/23.jpeg';

function ProjectsDone() {
    const projects = [
        { img: image1, title: 'Weekly Excursions', subtitle: 'This Weekly ecvursions is the most important...', url: '/' },
        { img: image1, title: 'Weekly Excursions', subtitle: 'This Weekly ecvursions is the most important...', url: '/' },
        { img: image1, title: 'Weekly Excursions', subtitle: 'This Weekly ecvursions is the most important...', url: '/' },
      ]
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: '', position: '', marginTop: '5vh', padding: '5vh' }}>
        <Box sx={{ width: '60%', backgroundColor: '' }}>
          <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
          <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}>PROJECTS WE HAVE DONE</Typography>
          <Box sx={{ marginLeft: '12vh' }}>
            <Typography variant="h6">We are creating a place where children with special needs can thrive</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'space-around' }}>
          {projects.map((item, index) => (
            <Box key={index} sx={{ width: '30vh', padding: '3vh', height: '30vh', backgroundImage: `url(${item.img})`, borderRadius: '10%' }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="" sx={{ fontSize: '12px' }}>{item.subtitle}</Typography>
              <Button variant="contained" size="small" sx={{ backgroundColor: 'white', marginY: '5vh' }}>
                <Link to={item.url} style={{ textDecorationLine: 'none', color: 'black' }}>
                  Learn More
                </Link>
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
  )
}

export default ProjectsDone