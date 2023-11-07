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
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
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
                        <Grid item xs={9} spacing={5}>
                            <Stack spacing={5}  direction="row" alignItems="center" marginLeft={7}> 
                                <GetValueDevice 
                                    feedId="nhiet-do" 
                                    deviceName="Temperature Living Room"
                                    deviceUnit="°C"
                                    
                                />
                                <GetValueDevice
                                    feedId="nhiet-do-phong-ngu" 
                                    deviceName="Temperature Bed Room"
                                    deviceUnit="°C"
                                />
                                <GetValueDevice
                                    feedId="do-am" 
                                    deviceName="Humidity Living Room" 
                                    deviceUnit="%"
                                />
                                
                                
                            </Stack> 
                            <Stack spacing={5}  direction="row" justifyContent="center" marginTop={5}>    
                                <OnOffDevice 
                                    feedId="den-phong-khach" 
                                    deviceName="Light Living Room"
                                    icon={<EmojiObjectsIcon sx={{ fontSize: 80, color: "white" }} />}
                                    backgroundColor="#ffa000"
                                />
                                <OnOffDevice 
                                    feedId="quat-phong-khach" 
                                    deviceName="Fan Living Room" 
                                    icon={<WindPowerIcon sx={{ fontSize: 70, color: "white" }} />}
                                    backgroundColor="#64dd17"
                                /> 
                                <OnOffDevice 
                                    feedId="den-phong-ngu" 
                                    deviceName="Light Bed Room" 
                                    icon={<LightModeIcon sx={{ fontSize: 70, color: "white" }} />}
                                    backgroundColor="#b39ddb"
                                />

                            </Stack>   
                        </Grid>
                        <Grid item xs={3} style={{
                            alignItems: "center"
                        }}>
                            <div style={{
                                width:"80%",
                                marginLeft: "10%"
                            }}>
                            <Stack spacing={2} alignItems="center"style={{ marginTop: 15}}>
                                <OnOffDevice 
                                    feedId="bao-thuc" 
                                    deviceName="Wake Up"
                                    icon={<AlarmIcon sx={{ fontSize: 70, color: "white" }} />}
                                    backgroundColor="#ffa000"
                                    fontSize={30}
                                    height={200}
                                    marginTop={50}
                                /> 
                            </Stack>  
                            <Stack spacing={2} alignItems="center" style={{ marginTop: 50}}>
                                <OnOffDevice 
                                    feedId="good-night" 
                                    deviceName="Good Night"
                                    icon={<BedtimeIcon sx={{ fontSize: 70, color: "white" }} />}
                                    backgroundColor="#64dd17"
                                    fontSize={30}
                                    height={200}
                                    marginTop={50}
                                />
                            </Stack>       
                            </div>
                               
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