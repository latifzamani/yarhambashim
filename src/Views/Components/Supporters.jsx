import { Box, Typography } from "@mui/material"
import image1 from '../../assets/images/23.jpeg';

function Supporters() {
    const supporters=[image1,image1,image1,image1,];

  return (
    <>
    <Box sx={{display:'flex',justifyContent:'start'}}>
          <Typography variant="p" sx={{display:'inline'}}>OUR SUPPORTERS</Typography>
          <Box sx={{display:'',width:'80%',height:'0.5vh',marginTop:'3vh',marginLeft:'3vh',backgroundColor:'black'}}></Box>  
        </Box>
        <Box sx={{display:'flex',marginTop:'3vh',justifyContent:'space-around'}}>
            {supporters.map((item,index)=>(
              <img key={index} src={item} style={{width:'20vh',height:'10vh',borderRadius:'10%'}}/>
            ))
            }
        </Box>
        </>
  )
}

export default Supporters