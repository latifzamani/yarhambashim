import { DateRange, LocationOn } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import image1 from '../../assets/images/23.jpeg';
import Events from "../Components/Events";

function EventReadMore() {
    return (
        <>
            <Box sx={{ backgroundColor: 'rgb(252,237,198)', paddingX: '5vh', paddingY: '10vh' }}>
                <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: '3vh' }}>A day with our wonderful children</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                    <Typography variant="body1" sx={{ textAlign: 'center', display: '', fontSize: '12px', marginRight: '2vh', }}>
                        <LocationOn fontSize="small" />Opp Opolo round about, Yenagoa, Bayelsa, Nigeria
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', display: '', fontSize: '12px' }}>
                        <DateRange fontSize="small" />April 13, 2022 8:30 AM
                    </Typography>
                </Box>

            </Box>
            <Box sx={{ paddingX: '20vh', paddingY: '10vh' }}>
                <Typography variant="h6">About</Typography>
                <Typography variant="body1">
                    Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean
                    rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut
                    est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla
                    quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.


                    Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus
                    dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.

                    Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit
                    scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero
                    egestas porttitor nunc pellentesque mauris et pulvinar eget.
                </Typography>
                <Box sx={{ backgroundColor: '',marginY:'3vh', width: '100%', height: '40vh', }}>
                    <img src={image1} style={{ width: '60%',float:'right', height: '40vh', borderRadius: '2%' }} />
                </Box>
                {/* Events */}
                <Events/>
            </Box>
        </>
    )
}

export default EventReadMore