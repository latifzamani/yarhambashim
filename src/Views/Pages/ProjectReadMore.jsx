import { Box, Button, Typography } from "@mui/material"
import image1 from '../../assets/images/23.jpeg';
import { GraphicEqOutlined, MonetizationOn, MonetizationOnOutlined, PendingActions, PeopleAltOutlined } from "@mui/icons-material";
import ProjectsDone from "../Components/ProjectsDone";
import BigImage2 from "../Components/BigImage2";

function ProjectReadMore() {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 4, width: '100%', height: 'auto', backgroundColor: '', position: '', paddingX: { xs: '5vh', sm: '10vh', md: '40vh' }, paddingY: '5vh' }}>
                <Box sx={{ width: '100%', backgroundColor: '' }}>
                    <Typography variant="h6" sx={{ display: 'inline' }}>__________</Typography>
                    <Typography variant="body1" sx={{ display: 'inline', marginX: '2vh', backgroundColor: '' }}> OUR PROJECTS</Typography>
                    <Box sx={{ marginLeft: '12vh' }}>
                        <Typography variant="h6">Mission Smile 1k: Outdoor charity outreach</Typography>
                        <Typography variant="body1">Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus
                            scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere
                            molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae.
                            Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.


                            Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus.
                            Ut amet, cras volutpat dui. A bibendum viverra eu cras.

                            Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque
                            tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc
                            pellentesque mauris et pulvinar eget.


                            Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus libero rutrum vitae nisl, cursus in sed. Egestas
                            mi ultricies et consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl pharetra. Tincidunt leo aenean dui,
                            varius metus, vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel nunc purus feugiat
                            purus tincidunt neque. Massa ultricies faucibus pellentesque risus duis est.</Typography>


                    </Box>
                </Box>
                <Box sx={{ backgroundColor: '', width: '100%', height: '40vh', paddingX: { xs: '', sm: '10vh', md: '20vh' } }}>
                    <img src={image1} style={{ width: '100%', height: '100%', borderRadius: '2%' }} />
                </Box>
            </Box>
            <Box sx={{ backgroundColor: 'rgb(252,237,198)', paddingY: '8vh',paddingX: { xs: '', sm: '10vh', md: '20vh' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}>
                    <Box sx={{ width: '50%' }}>
                        <PendingActions />
                        <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>20+ orphanage visit in 2 months</Typography>
                        <Typography sx={{ marginX: '6vh' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique.
                        </Typography>
                    </Box>
                    <Box sx={{ width: '50%' }}>
                        <MonetizationOnOutlined />
                        <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>230 People Have donated</Typography>
                        <Typography sx={{ marginX: '6vh' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique.
                        </Typography>
                    </Box>
                </Box>
                <br/>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}>
                    <Box sx={{ width: '50%' }}>
                        <PeopleAltOutlined />
                        <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>30+ people joined </Typography>
                        <Typography sx={{ marginX: '6vh' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique.
                        </Typography>
                    </Box>
                    <Box sx={{ width: '50%' }}>
                        <GraphicEqOutlined />
                        <Typography variant="h6" sx={{ display: 'inline', marginX: '2vh' }}>1.2m Raised for this initiate</Typography>
                        <Typography sx={{ marginX: '6vh' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {/* Projects Done */}
            <ProjectsDone/>
            {/* Donation Image */}
            <Box sx={{marginX:'10vh',marginBottom:'5vh'}}>
            <BigImage2/>
            </Box>
        </>
    )
}

export default ProjectReadMore