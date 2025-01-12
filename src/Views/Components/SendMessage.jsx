import { Box, Button, TextField, Typography } from '@mui/material'

function SendMessage() {
  return (
    <Box sx={{paddingX:'10vh'}}>
    <form>
        <Box sx={{display:'flex',justifyContent:'space-between',gap:4}}>
        <TextField type="text" variant="standard" label="First Name" sx={{width:'50%'}}/>
        <TextField type="text" variant="standard" label="Last Name" sx={{width:'50%'}}/>
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-between',marginY:'2vh',gap:4}}>
        <TextField type="email" variant="standard" label="E-Mail"sx={{width:'50%'}}/>
        <TextField type="text" variant="standard" label="Subject"sx={{width:'50%'}}/>
        </Box>
        <TextField multiline rows={6} type="text" variant="outlined" fullWidth label="Type your Message" />
        <Typography sx={{textAlign:'center',marginY:'3vh'}}>
        <Button variant="contained" sx={{backgroundColor:'rgb(242,200,75)',color:'black'}}>Send Message</Button>
        </Typography>
    </form>
</Box>
  )
}

export default SendMessage