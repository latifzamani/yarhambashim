import { Box, Button, Tab, Typography } from "@mui/material"
import image1 from '../../assets/images/23.jpeg';
import { Link } from "react-router-dom";
import BigImage2 from "../Components/BigImage2";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";

// import TabContext from '@mui/lab';
function Donation() {

    const [tabValue, setTabValue] = useState(1);
    const handleTabValue = (e, newValue) => {
        setTabValue(newValue);
    }
    return (
        <>
            <Box sx={{ padding: '0vh' }}>
                <Box sx={{ display: 'flex', flexDirection:{xs:'column',sm:'row',md:'row'}, justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: 'rgb(252,237,198)', position: '', padding: '5vh' }}>
                    <Box sx={{ width: {xs:'100%',sm:'60%',md:'60%'}, backgroundColor: '' }}>
                        <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
                        <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}> DONATE</Typography>
                        <Box sx={{ marginLeft:{xs:'2vh',sm:'12vh',md:'12vh'} }}>
                            <Typography variant="h6">Making a donation for our children</Typography>
                            <Typography variant="body1">We provide a better place for children this is a descriptio  better place for children this is a descriptio We provide a better place for children this is a </Typography>
                            <Link to=''>
                                <Button variant="contained" sx={{ backgroundColor: 'rgb(242,200,15)', textDecorationLine: 'none', color: 'black', marginTop: '5vh' }}>
                                    Donate now
                                </Button>
                            </Link>

                        </Box>
                    </Box>
                    <Box sx={{ backgroundColor: '', width: {xs:'100%',sm:'40%',md:'40%'}, height: {xs:'30vh',sm:'60vh',md:'60vh'}, }}>
                        <img src={image1} style={{ width: '100%', height: '100%', borderRadius: '2%' }} />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ padding: '5vh' }}>
                <Box sx={{ display: 'flex',flexDirection:{xs:'column',sm:'row',md:'row'}, justifyContent: 'space-between', gap: 12,paddingX:{xs:'0vh',sm:'10vh',md:'10vh'} }}>
                    <Box sx={{ width: {xs:'100%',sm:'50%',md:'50%'} }}>
                        <Typography variant="h6">How you can contribute to caring for our kids</Typography>
                        <Typography variant="body1">This is a describtion on How you can contribute to caring for our kids describtion on How you describtion on How you can contribute to caring for our can contribute to caring for our</Typography>
                    </Box>
                    <Box sx={{ width: {xs:'100%',sm:'50%',md:'50%'} }}>
                        <TabContext value={tabValue}>
                            <Box >
                                <TabList onChange={handleTabValue}>
                                    <Tab label="Overview" value={1} />
                                    <Tab label="Impact" value={2} />
                                    <Tab label="What you get" value={3} />
                                </TabList>
                            </Box>
                            <TabPanel value={1} sx={{backgroundColor:''}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                                eros elemenstae tum tristique. Duierat. 
                            </TabPanel>
                            <TabPanel value={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                            eros elementum tristique. Duis cursus, mi
                            </TabPanel>
                            <TabPanel value={3}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                            eros elementum tristique.
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Box>
                <br />
                <hr />
                <br />
                <Box sx={{ display: 'flex',flexDirection:{xs:'column',sm:'row',md:'row'}, justifyContent: 'space-between', gap: 5,paddingX:{xs:'3vh',sm:'10vh',md:'10vh'} }}>
                    <Typography variant="h6" sx={{ width: {xs:'100%',sm:'33%',md:'33%'} }}>How we use your donation</Typography>
                    <Typography variant="body1" sx={{ width: {xs:'100%',sm:'33%',md:'33%'}}}>This is a describtion on how you use the donation describtion ondonation describtion on how you use thedescribtion how you use thedescribtion on how you use the</Typography>
                    <Typography variant="body1" sx={{ width: {xs:'100%',sm:'33%',md:'33%'} }}>This is a describtion on how you use the donation describtion  how you use thedescribtion on how you use the</Typography>
                </Box>
                <BigImage2 />
            </Box>
        </>
    )
}

export default Donation