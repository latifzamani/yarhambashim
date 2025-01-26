import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import image1 from '../../assets/images/y2.jpg';
import { useState } from "react";
import SendMessage from "./SendMessage";
import { Close } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

function BigImage2() {
  const [openDialog,setOpenDialog]=useState(false);
    const {t}=useTranslation();

  const handleDailog=()=>{
    setOpenDialog(!openDialog);
  }
  return (
    <Box sx={{ backgroundImage: `url(${image1})`, borderRadius: '1%', padding: { xs:'2vh',sm:'10vh',md:'10vh'}, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: '40vh', marginTop: '7vh' }}>
      <Typography sx={{ color: 'white',backdropFilter: 'blur(20px)',padding:'1vh', fontSize: '1.5rem', textAlign: 'center' }}>{t('bigimagetitle')}</Typography>
      <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
        <Button onClick={handleDailog} variant="contained" size="small" sx={{ backgroundColor: 'rgb(242,200,75)', color: 'black', marginY: '5vh', width: '25vh' }}>
          {t('joinasavolunteer')}
        </Button>
        <Button variant="contained" size="small" sx={{ backgroundColor: 'white', marginY: '5vh' }}>
          <Link to={`${import.meta.env.VITE_API_FRONT_URL}/donation`} style={{ textDecorationLine: 'none', color: 'black', textTransform: 'none' }}>
            {t('donation')}
          </Link>
        </Button>
      </Box>
      {/* Dialog */}
      <Dialog
        sx={{marginBottom:{xs:'40%',sm:'0%',md:'0%'},padding:'0'}}
        open={openDialog}
        onClose={handleDailog}
      >
        <DialogContentText>
          <IconButton onClick={handleDailog} sx={{float:'right',padding:'3vh'}}>
            <Close sx={{color:'red'}}/>
          </IconButton>
        </DialogContentText>
        <DialogTitle>
          <Typography variant="h6" sx={{textAlign:'center'}}>{t('joinasavolunteer')}</Typography>
          <Typography variant="body1" sx={{textAlign:'center'}}>{t('joinasavolunteerdes')}</Typography>
        </DialogTitle>
        <DialogContent>
          {/* Sending Message Component */}
            <SendMessage/>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default BigImage2
