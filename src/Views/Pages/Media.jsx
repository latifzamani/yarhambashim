import { Box, Button, Typography } from "@mui/material"
import BigImage2 from "../Components/BigImage2"
import Events from "../Components/Events"
import image1 from '../../assets/images/23.jpeg';
import { Link } from "react-router-dom";


function Media() {

    const events=[
        {img:image1,title:'Autism Care Day',date:'2024/3/3',subtitle:'Autism Care Day information shortly...'},
        {img:image1,title:'Autism Care Day',date:'2024/3/3',subtitle:'Autism Care Day information shortly...'},
        {img:image1,title:'Autism Care Day',date:'2024/3/3',subtitle:'Autism Care Day information shortly...'},
    ]
  return (
    <Box sx={{padding:'5vh'}}>
         <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: 'rgb(252,237,198)', position: '', padding: '5vh' }}>
          <Box sx={{ width: '60%', backgroundColor: '' }}>
            <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
            <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}>Top News</Typography>
            <Box sx={{ marginLeft: '12vh' }}>
              <Typography variant="h6">We provide a better place for children</Typography>
              <Typography variant="body1">We provide a better place for children this is a descriptio We provide a better place for children this is a descriptio We provide a better place for children this is a descriptio We provide a better place for children this is a descriptio We provide a better place for children</Typography>
              <Button variant="contained" sx={{ backgroundColor: 'rgb(242,200,75)', marginY: '5vh' }}>
                <Link to='/' style={{ textDecorationLine: 'none', color: 'black' }}>
                  Read More
                </Link>
              </Button>

            </Box>
          </Box>
          <Box sx={{ display:'flex',flexDirection:'column',gap:3,padding:'2vh',backgroundColor: 'white', width: '40%', height: '60vh',overflowY:'scroll',scrollbarWidth:'none'}}>
            {events.map((item,index)=>(
                <Box key={index} sx={{display:'flex',justifyContent:'space-between'}}>
                  <img src={item.img} style={{width:'40%',height:'100%',borderRadius: '2%'}}/>
                  <Box>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="p" sx={{color:'gray'}}>{item.date}</Typography>
                    <Typography variant="body1">{item.subtitle}</Typography>
                  </Box>
                </Box>
            ))}
          </Box>
        </Box>
        <BigImage2/>
        <Events/>
    </Box>
  )
}

export default Media