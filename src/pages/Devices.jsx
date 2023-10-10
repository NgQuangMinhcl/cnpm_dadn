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
import AddIcon from '@mui/icons-material/Add';

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

export default function Devices(){
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
                                <Card sx={{ minWidth: 47 + "%", height: 200 }}  className="card">
                                    <CardContent>
                                        <Stack direction="row">
                                            <Grid container >
                                                <Grid item xs={1} >
                                                    <DeviceThermostatIcon sx={{ fontSize: 40, color: blue[50]}}/>
                                                </Grid>
                                                <Grid item xs={7}>
                                                    <Typography gutterBottom variant="h5" component="div" style={{color: "white", fontSize: "30px", marginLeft:"15px"}}>
                                                        Temperature
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4} style={{marginTop:"-10px"}}>
                                                    <span style={{fontSize:"50px", color:"white", marginLeft:"30px"}}>27&#8451;</span>
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                        <Slider
                                            aria-label="Custom marks"
                                            defaultValue={20}
                                            step={1}
                                            valueLabelDisplay="auto"
                                            style={{color:"white"}}
                                        />
                                    </CardContent>   
                                </Card>
                                <Card sx={{ minWidth: 47 + "%", height: 200 }} className="card">
                                    <CardContent>
                                        <Stack direction="row">
                                            <Grid container >
                                                <Grid item xs={1}>
                                                    <WaterDropIcon sx={{ fontSize: 40, color: blue[50]}} />
                                                </Grid>
                                                <Grid item xs={7}>
                                                    <Typography gutterBottom variant="h5" component="div" style={{color: "white", fontSize: "30px", marginLeft:"15px" }}>
                                                        Humidity
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4} style={{marginTop:"-10px"}}>
                                                    <span style={{fontSize:"50px", color:"white", marginLeft:"30px"}}>71%</span>
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                        <Slider
                                            aria-label="Custom marks"
                                            defaultValue={20}
                                            step={1}
                                            valueLabelDisplay="auto"
                                            style={{color:"white"}}
                                        />
                                    </CardContent>   
                                </Card>
                            </Stack>  
                        </Grid>
                        
                        <Grid item xs={12}>
                            <Stack spacing={5}  direction="row" justifyContent="center">
                                <Card sx={{ minWidth: 30 + "%", height: 200 }} className="card">
                                    <CardContent>
                                        <Stack direction="row">
                                            <Grid container >
                                                <Grid item xs={2}>
                                                    <LightModeIcon sx={{ fontSize: 40, color: blue[50]}} />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography gutterBottom variant="h5" component="div" style={{color: "white", fontSize: "30px", marginLeft:"15px"}}>
                                                        Light
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4} style={{marginTop:"10px"}}>
                                                    <Stack direction="row" spacing={1} alignItems="center">
                                                        <Typography style={{color:"white"}}>Off</Typography>
                                                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                                                        <Typography style={{color:"white"}}>On</Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                        <Slider
                                            aria-label="Custom marks"
                                            defaultValue={20}
                                            step={1}
                                            valueLabelDisplay="auto"
                                            style={{color:"white", marginTop:"10px"}}
                                        />
                                    </CardContent>   
                                </Card>
                                <Card sx={{ minWidth: 30 + "%", height: 200 }} className="card">
                                    <CardContent>
                                        <Stack direction="row">
                                            <Grid container >
                                                <Grid item xs={2}>
                                                    <WindPowerIcon sx={{ fontSize: 40, color: blue[50]}} />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography gutterBottom variant="h5" component="div" style={{color: "white", fontSize: "30px", marginLeft:"15px"}}>
                                                        Fan
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4} style={{marginTop:"10px"}}>
                                                    <Stack direction="row" spacing={1} alignItems="center">
                                                        <Typography style={{color:"white"}}>Off</Typography>
                                                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                                                        <Typography style={{color:"white"}}>On</Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    </CardContent>   
                                </Card>
                                <Card sx={{ minWidth: 30 + "%", height: 200 }} className="card">
                                    <CardContent>
                                        <Stack direction="row">
                                            <Grid container >
                                                <Grid item xs={2}>
                                                    <LightModeIcon sx={{ fontSize: 40, color: blue[50]}} />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography gutterBottom variant="h5" component="div" style={{color: "white", fontSize: "30px", marginLeft:"15px"}}>
                                                        Other
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4} style={{marginTop:"10px"}}>
                                                    <Stack direction="row" spacing={1} alignItems="center">
                                                        <Typography style={{color:"white"}}>Off</Typography>
                                                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                                                        <Typography style={{color:"white"}}>On</Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    </CardContent>   
                                </Card>

                            </Stack>  
                        </Grid>

                        <Grid item xs={12}>
                            <Stack spacing={5}  direction="row" justifyContent="center">
                                <Card sx={{ minWidth: 30 + "%", height: 200 }} className="card">
                                    <CardContent>
                                        <Stack direction="row">
                                            <Grid container >
                                                <Grid item xs={2}>
                                                    <AlarmIcon sx={{ fontSize: 40, color: blue[50]}} />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography gutterBottom variant="h5" component="div" style={{color: "white", fontSize: "30px", marginLeft:"15px"}}>
                                                        Wake Up
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4} style={{marginTop:"10px"}}>
                                                    <Stack direction="row" spacing={1} alignItems="center">
                                                        <Typography style={{color:"white"}}>Off</Typography>
                                                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                                                        <Typography style={{color:"white"}}>On</Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                        <Slider
                                            aria-label="Custom marks"
                                            defaultValue={20}
                                            step={1}
                                            valueLabelDisplay="auto"
                                            style={{color:"white", marginTop:"10px"}}
                                        />
                                    </CardContent>   
                                </Card>
                                <Card sx={{ minWidth: 30 + "%", height: 200 }} className="card">
                                    <CardContent>
                                        <Stack direction="row">
                                            <Grid container >
                                                <Grid item xs={2}>
                                                    <BedtimeIcon sx={{ fontSize: 40, color: blue[50]}} />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography gutterBottom variant="h5" component="div" style={{color: "white", fontSize: "30px", marginLeft:"15px"}}>
                                                        Good Night
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4} style={{marginTop:"10px"}}>
                                                    <Stack direction="row" spacing={1} alignItems="center">
                                                        <Typography style={{color:"white"}}>Off</Typography>
                                                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                                                        <Typography style={{color:"white"}}>On</Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    </CardContent>   
                                </Card>
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