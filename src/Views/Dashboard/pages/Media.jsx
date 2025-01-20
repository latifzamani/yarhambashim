import SupportersDailog from '../Dialogs/SupportersDailog';
import VideoDialog from '../Dialogs/VideoDialog';
import LinksDialog from '../Dialogs/LinksDialog';
import { Box } from '@mui/material';


function Media() {
    return (
        <Box sx={{ margin: '3vh' }}>
            {/* Videos,links,supporters */}
            {/* Videos */}
            <VideoDialog/>
            <br />
            <br />
            {/* Links  */}
            <LinksDialog/>
            <br />
            <br />
            {/* Supporters */}
            <SupportersDailog/>
            <br/>
            <br/>
            <br/>
        </Box>
    )
}

export default Media
