import { Facebook, Instagram, X } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Mapview from "../Components/Mapview";



function ContactUs() {
    return (
        <Box sx={{ padding: '5vh', marginBottom: '0vh', height: '150vh', backgroundColor: '' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: '', gap: 1, width: '100%', height: '100vh', backgroundColor: '', position: '', marginTop: '0vh', marginBottom: '0vh' }}>
                {/* Part 1 */}
                <Box sx={{ display: 'flex', padding: '5vh', marginBottom: '10vh', flexDirection: 'row', justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: 'rgb(251,236,198)', position: '', marginTop: '0vh' }}>
                    <Box sx={{ width: '80%', backgroundColor: '' }}>
                        <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
                        <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}> KNOW ABOUT US</Typography>
                        <Box sx={{ marginLeft: '12vh', display: '', justifyContent: 'space-between', gap: 4, marginTop: '3vh' }}>
                            <Typography variant="h6">We provide a better place for children</Typography>
                            <Typography variant="body1">We provide a better place for children this is a descriptio We provide a better place for children this is a descriptio We provide a better place for children this is a descriptio We provide a better place for children this is a descriptio We provide a better place for children</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="h6">{`Let's talk`}</Typography>
                        <Typography variant="body1" sx={{ display: 'inline', }}>0773738889</Typography>
                        <Typography variant="body1" sx={{ display: 'inline', paddingX: '3vh' }}>hello@gmail.com</Typography>
                        <hr />
                        <Typography variant="h6">{`Head Office`}</Typography>
                        <Typography variant="body1" sx={{ display: 'inline', }}>Shahr-e-now ,kabul , Afghanistan</Typography>
                        <Typography sx={{ textAlign: 'center', marginY: '5vh' }}>
                            <Link to={'/'}><Instagram sx={{ color: "rgb(0,0,0)" }} /></Link>
                            <Link to={'/'}><Facebook sx={{ color: "rgb(0,0,0)", marginX: '1vh' }} /></Link>
                            <Link to={'/'}><X sx={{ color: "rgb(0,0,0)" }} /></Link>
                        </Typography>
                    </Box>
                </Box>
                {/* Send Message */}
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
                {/* Map View */}
            </Box>
                <Box sx={{backgroundColor:'',height:'40vh'}}>
                <Mapview/>
                </Box>
        </Box>
    )
}
export default ContactUs;