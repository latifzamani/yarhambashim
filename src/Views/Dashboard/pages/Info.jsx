
import TeamDialog from "../Dialogs/TeamDialog";
import EventDialog from "../Dialogs/EventDialog";
import ChartsDialog from "../Dialogs/ChartsDialog";
import { Box } from "@mui/material";

function Info() {

    return (
        <Box sx={{ margin: '3vh' }}>
            {/* Team Members */}
            <TeamDialog/>
            <br />
            <br />
            {/* Events */}
            <EventDialog/>
            <br />
            <br />
            {/* Chart Percentages */}
            <ChartsDialog/>


            <br/>
            <br/>
            <br/>
        </Box>
        )
}

export default Info
