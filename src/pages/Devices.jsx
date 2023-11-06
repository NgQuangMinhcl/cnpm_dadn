import React from "react";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../Dash.css";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import { blue } from '@mui/material/colors';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LightModeIcon from '@mui/icons-material/LightMode';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import AlarmIcon from '@mui/icons-material/Alarm';
import WindPowerIcon from '@mui/icons-material/WindPower';
import AddIcon from '@mui/icons-material/Add';
import OnOffDevice from "../components/OnOffDevice";
import GetValueDevice from "../components/GetValueDevice";


const Devices = () => {
   
    return (
        <>
            <Navbar />
            <Box height={70} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container  spacing={5}>
                        <Grid item xs={12}>
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
                        
                        <Grid item xs={12}>
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

                        <Grid item xs={12}>
                            <Stack spacing={5}  direction="row" justifyContent="center">
                                <OnOffDevice 
                                    feedId="bao-thuc" 
                                    deviceName="Wake Up"
                                    icon={<AlarmIcon sx={{ fontSize: 40, color: blue[50] }} />}
                                /> 
                                <OnOffDevice 
                                    feedId="good-night" 
                                    deviceName="Good Night"
                                    icon={<BedtimeIcon sx={{ fontSize: 40, color: blue[50] }} />}
                                />
                                <Card sx={{ minWidth: 30 + "%", height: 200, backgroundColor:'#b39ddb'}} >
                                    <CardContent>
                                        <Stack direction="row">
                                            <Grid container >
                                                <Grid item xs={2}>
                                                    <AddIcon sx={{ fontSize: 40, color: blue[50]}} />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography gutterBottom variant="h5" component="div" style={{color: "white", fontSize: "30px", marginLeft:"15px"}}>
                                                        Add Device
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    </CardContent>   
                                </Card>

                            </Stack>  
                        </Grid>
                        
                    </Grid>
                        
                </Box>
            </Box>
        </>
    )
}

export default Devices;