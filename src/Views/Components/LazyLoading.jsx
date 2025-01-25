
import { Box, } from '@mui/material';
import {BarsFade,} from 'react-svg-spinners';

function LazyLoading() {
  return (
    <>
    <Box sx={{marginTop:'20vh',display:'flex',justifyContent:'center'}}>
            <BarsFade color='black' width="40px" height="40px"/>
    </Box>
    </>
  )
}

export default LazyLoading
