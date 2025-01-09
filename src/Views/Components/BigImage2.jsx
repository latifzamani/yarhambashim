import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import image1 from '../../assets/images/23.jpeg';

function BigImage2() {
  return (
    <Box sx={{ backgroundImage:`url(${image1})`,borderRadius:'1%',padding:'10vh',backgroundSize:'cover',backgroundRepeat:'no-repeat', width: '100%', height: '40vh',marginTop:'7vh'}}>
            <Typography sx={{color:'white',fontSize:'1.5rem',textAlign:'center'}}>You can contribute to provide a place for children with special needs!</Typography>
            <Box sx={{display:'flex',gap:4,justifyContent:'center'}}>
            <Button variant="contained" size="small" sx={{ backgroundColor: 'rgb(242,200,75)', marginY: '5vh',width:'25vh' }}>
                <Link to='/' style={{ textDecorationLine: 'none', color: 'black',textTransform:'none' }}>
                  Join as a volunteer
                </Link>
              </Button><Button variant="contained" size="small" sx={{ backgroundColor: 'white', marginY: '5vh' }}>
                <Link to='/' style={{ textDecorationLine: 'none', color: 'black',textTransform:'none' }}>
                  Donate
                </Link>
              </Button>
            </Box>
      </Box>
  )
}

export default BigImage2