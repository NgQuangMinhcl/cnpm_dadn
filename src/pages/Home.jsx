import React from "react";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import AccordionDash from "../components/AccordionDash";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../Dash.css";
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import { blue } from '@mui/material/colors';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LightModeIcon from '@mui/icons-material/LightMode';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import AlarmIcon from '@mui/icons-material/Alarm';
import WindPowerIcon from '@mui/icons-material/WindPower';
import BarChart from '../charts/BarChart'
import OnOffDevice from "../components/OnOffDevice";
import GetValueDevice from "../components/GetValueDevice";


const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

export default function Home(){
    return (
        <>
            <Navbar />
            <Box height={70} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container  spacing={5}>
                        <Grid item xs={9}>
                            <Stack spacing={5}  direction="row" justifyContent="center" > 
                                <GetValueDevice 
                                    feedId="nhiet-do" 
                                    deviceName="Temperature"
                                    icon={<DeviceThermostatIcon sx={{ fontSize: 40, color: blue[50] }} />}
                                />
                                <GetValueDevice
                                    feedId="do-am" 
                                    deviceName="Humidity" 
                                    icon={<WaterDropIcon sx={{ fontSize: 40, color: blue[50] }} />}
                                />
                            </Stack>  
                        </Grid>
                        <Grid item xs={3}>
                            <Stack spacing={2} alignItems="center">
                                <OnOffDevice 
                                    feedId="bao-thuc" 
                                    deviceName="Wake Up"
                                    icon={<AlarmIcon sx={{ fontSize: 40, color: blue[50] }} />}
                                /> 
                        </Stack>      
                        </Grid>
                        <Grid item xs={9}>
                            <Stack spacing={5}  direction="row" justifyContent="center">    
                                <OnOffDevice 
                                    feedId="den-phong-khach" 
                                    deviceName="Light 1"
                                    icon={<LightModeIcon sx={{ fontSize: 40, color: blue[50] }} />}
                                />
                                <OnOffDevice 
                                    feedId="quat-phong-khach" 
                                    deviceName="Fan 1" 
                                    icon={<WindPowerIcon sx={{ fontSize: 40, color: blue[50] }} />}
                                /> 
                                <OnOffDevice 
                                    feedId="den-phong-ngu" 
                                    deviceName="Light 2" 
                                    icon={<LightModeIcon sx={{ fontSize: 40, color: blue[50] }} />}
                                />

                            </Stack>  
                        </Grid>
                        <Grid item xs={3}>
                            <Stack spacing={2} alignItems="center">
                                <OnOffDevice 
                                    feedId="good-night" 
                                    deviceName="Good Night"
                                    icon={<BedtimeIcon sx={{ fontSize: 40, color: blue[50] }} />}
                                />
                            </Stack>      
                        </Grid>   
                    </Grid>
                    <Box height={20} />
                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            <Card sx={{ height: 50 + "vh", backgroundColor:'#ede7f6'}}>
                                <CardContent>
                                    <BarChart />
                                </CardContent>   
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card sx={{ height: 50 + "vh", backgroundColor:'#ede7f6'}}>
                                <CardContent>
                                    <div style={{padding:'10px'}}>
                                        <span style={{fontWeight:'600'}}>Users</span>
                                    </div>
                                    <AccordionDash />
                                </CardContent>   
                            </Card>
                        </Grid>
                        
                    </Grid>
                </Box>
            </Box>
        </>
    )
}