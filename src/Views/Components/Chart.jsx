import { Box, Typography } from "@mui/material"
import { PieChart } from "@mui/x-charts";
import AxiosAPI from "./axios";
import { useEffect, useState } from "react";

function Chart() {
    const [percentage,setPercentage]=useState([]);
    const FetchData=()=>{
        AxiosAPI.get('/chart/show').then((data)=>{
            setPercentage(data.data);
            console.log(data.data);

        }).catch((error)=>{
            console.log(error);

        })
    }
    const valueFormatter = (item) => `${item.value}%`;

    let Data=percentage.map((percent,index)=>(
        { id: index, value:Number(percent.value) , label: percent.label}
      ));
    useEffect(()=>{
        FetchData();
    },[]);
    console.log(Data);

  return (
    <Box sx={{ backgroundColor: 'black', display: 'flex',flexDirection:{ xs:'column',sm:'row',md:'row'}, justifyContent: 'space-between', gap: 4, height: '50vh', paddingX: { xs:'2vh',sm:'10vh',md:'10vh'}, paddingY: '4vh', marginTop: '7vh' }}>
    <Box>
      <Typography sx={{ color: 'white', fontSize: '20px' }}>How we spend your donation</Typography>
      <Typography sx={{ color: 'white', fontSize: '14px' }}>This description about How we spend your donation and how to solve it ...</Typography>
    </Box>
    <Box sx={{ backgroundColor: '', }}>
      <PieChart
        series={[
          {
            data:Data
            ,
            highlightScope: { fade: 'global', highlight: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            valueFormatter,
          }
        ]}
        width={400} height={300}
        slotProps={{
          legend: {
            hidden: false, position: { vertical: 'middle', horizontal: 'left' },
            direction: 'column',
            padding: 1,
            itemMarkHeight: 22,
            markGap: -40,
            labelStyle: {
              fontSize: 15,
              fill: 'white',
            },
          }  // Using slotProps to hide the legend
        }}
        p
      />
    </Box>

  </Box>
  )
}

export default Chart
