import React, { useState, useEffect } from "react";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import AccordionDash from "../components/AccordionDash";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import WindPowerIcon from '@mui/icons-material/WindPower';
import OnOffDevice from "../components/OnOffDevice";
import GetValueDevice from "../components/GetValueDevice";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import HistoryChart from '../charts/HistoryChart';
import dayjs from "dayjs";



export default function Home() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(dayjs());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, [])

    return (
        <>
            <Navbar />
            <Box height={70} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }} backgroundColor="#212121">
                    <Grid container spacing={5} margin={0} marginBottom={'40px'}>
                        <Grid item xs={3} spacing={5}>
                            <Card variant="outlined" sx={{ height: "100%", width: "100%", borderRadius: 8, background:"#4fc3f7"}}>
                                <CardContent sx={{ padding:"5px",paddingLeft:"20px", paddingTop:"30px", textAlign: { xs: "center", md: "start" } }}>
                                    <Typography fontFamily="fantasy" gutterBottom variant="h2" component="div" color="#212121" >
                                        Hello!          Have a good day!
                                    </Typography>
                                    <Typography gutterBottom variant="h3" component="div" color="#e65100" textAlign="center">
                                        {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div" color="#e65100" textAlign="center">
                                        {currentTime.toDateString()}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={9} spacing={5}>
                            <Stack spacing={5} direction="row" alignItems="center" marginLeft={7}>
                                <GetValueDevice
                                    feedId="cambien1"
                                    deviceName="Temperature"
                                    deviceUnit="°C"

                                />
                                <GetValueDevice
                                    feedId="cambien2"
                                    deviceName="Humidity"
                                    deviceUnit="%"
                                />
                                <GetValueDevice
                                    feedId='cambien3'
                                    deviceName="Brightness"
                                    deviceUnit="%"
                                />
                            </Stack>
                            <Stack spacing={5} direction="row" justifyContent="center" marginTop={5} width={"95%"}>
                                <OnOffDevice
                                    onValue="3"
                                    offValue="4"
                                    feedId="led"
                                    deviceName="Light"
                                    icon={<EmojiObjectsIcon sx={{ fontSize: 80, color: "#212121" }} />}
                                    backgroundColor="#ffa000"
                                />
                                <OnOffDevice
                                    onValue="1"
                                    offValue="2"
                                    feedId="fan"
                                    deviceName="Fan"
                                    icon={<WindPowerIcon sx={{ fontSize: 70, color: "#212121" }} />}
                                    backgroundColor="#64dd17"
                                />
                                <OnOffDevice
                                    onValue="5"
                                    offValue="6"
                                    feedId="door"
                                    deviceName="Door"
                                    icon={<MeetingRoomIcon sx={{ fontSize: 70, color: "#212121" }} />}
                                    backgroundColor="#b39ddb"
                                />

                            </Stack>
                        </Grid>
                    </Grid>
                    <Box height={20} />
                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                        <Card sx={{ height: 500, backgroundColor: '#ede7f6', marginBottom: '20px' }}>
                            <CardContent>
                                <HistoryChart feedId={"cambien1"} targetDate={currentDate} nameChart={'Temperature'} />
                            </CardContent>
                        </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card sx={{ height: 50 + "vh", backgroundColor: '#ede7f6' }}>
                                <CardContent>
                                    <div style={{ padding: '10px' }}>
                                        <span style={{ fontWeight: '600' }}>Users</span>
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