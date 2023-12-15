import React, { useState, useEffect } from "react";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import AutoOnOff from "../components/AutoOnOff";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import dayjs from 'dayjs';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from "axios";
import Button from '@mui/material/Button';

export default function Setting() {
    const [timeOn, setTimeOn] = useState(dayjs('2022-04-17T15:30'));
    const [timeOff, setTimeOff] = useState(dayjs('2022-04-17T15:30'));
    useEffect(() => {
        console.log("call api")
        loadOnTimeAndOffTime();
    }, [])

    const loadOnTimeAndOffTime = async () => {
        const [onAPIResult, offAPIResult] = await Promise.all(
            [
                axios.get('https://auth-nodejs.fly.dev/api/auto/timeon'),
                axios.get('https://auth-nodejs.fly.dev/api/auto/timeoff')
            ]
        );
        const timeOnRes = onAPIResult.data.time;
        const timeOffRes = offAPIResult.data.time;
        const timeOnMinAndHour = extractMinandHour(timeOnRes);
        const timeOffMinAndHour = extractMinandHour(timeOffRes);
        console.log(timeOnMinAndHour)
        setTimeOn(dayjs().hour(timeOnMinAndHour.hour).minute(timeOnMinAndHour.min))
        setTimeOff(dayjs().hour(timeOffMinAndHour.hour).minute(timeOffMinAndHour.min))
    }

    const extractMinandHour = (data) => {
        try {
            const stringData = data.split(' ');
            return {
                hour: stringData[1],
                min: stringData[0]
            }
        } catch {
            return {
                min: 0,
                hour: 0
            }
        }
    }

    const padWithZero = (number) => {
        return number < 10 ? `0${number}` : `${number}`;
    };


    const updateTimeOnAPI = (hour, min) => {
        axios.post(
            'https://auth-nodejs.fly.dev/api/auto/timeon',
            {
                "minute": min,
                "hour": hour
            }
        );
    }

    const updateTimeOn = (timeOnNewValue) => {
        try {
            // const hour = timeOnNewValue.hour();
            // const min = timeOnNewValue.minute();
            // const fullHour = padWithZero(Number(hour));
            // const fullMin = padWithZero(Number(min));
            // console.log(fullHour, fullMin)
            // updateTimeOnAPI(fullHour, fullMin)
            setTimeOn(timeOnNewValue);
        } catch (e) {
            console.log(e)
        }
    }

    const activateOn = () =>{
        const hour = timeOn.hour();
        const min = timeOn.minute();
        const fullHour = padWithZero(Number(hour));
        const fullMin = padWithZero(Number(min));
        console.log(fullHour, fullMin)
        updateTimeOnAPI(fullHour, fullMin)
    }

    const updateTimeOffAPI = (hour, min) => {
        axios.post(
            'https://auth-nodejs.fly.dev/api/auto/timeoff',
            {
                "minute": min,
                "hour": hour
            }
        );
    }

    const updateTimeOff = (timeOffNewValue) => {
        try {
            // const hour = timeOffNewValue.hour();
            // const min = timeOffNewValue.minute();
            // const fullHour = padWithZero(Number(hour));
            // const fullMin = padWithZero(Number(min));
            // console.log(fullHour, fullMin)
            // updateTimeOffAPI(fullHour, fullMin)
            setTimeOff(timeOffNewValue);
        } catch (e) {
            console.log(e)
        }
    }

    const activateOff = () =>{
        const hour = timeOff.hour();
        const min = timeOff.minute();
        const fullHour = padWithZero(Number(hour));
        const fullMin = padWithZero(Number(min));
        console.log(fullHour, fullMin)
        updateTimeOffAPI(fullHour, fullMin)
    }

    return (
        <>
            <Navbar />
            <Box height={70} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={5} marginTop={7}>
                        <Stack spacing={5} direction="row" alignItems="center" marginLeft={7}>
                            <Grid item xs={3} spacing={5}>
                                <AutoOnOff
                                    feedId="cambien1"
                                    deviceName="Fan On"
                                    deviceUnit="°C"
                                    dataKey="temp"
                                    url="https://auth-nodejs.fly.dev/api/auto/fanon"
                                    apiKeyResultData="tempOn"
                                />
                            </Grid>
                            <Grid item xs={3} spacing={5}>
                                <AutoOnOff
                                    feedId="cambien1"
                                    deviceName="Fan Off"
                                    deviceUnit="°C"
                                    dataKey="temp"
                                    url="https://auth-nodejs.fly.dev/api/auto/fanoff"
                                    apiKeyResultData="tempOff"
                                />
                            </Grid>
                            <Grid item xs={3} spacing={5}>
                                <AutoOnOff
                                    feedId='cambien3'
                                    deviceName="Light On"
                                    deviceUnit="%"
                                    dataKey="light"
                                    url="https://auth-nodejs.fly.dev/api/auto/lighton"
                                    apiKeyResultData="Light_On"
                                />
                            </Grid>
                            <Grid item xs={3} spacing={5}>
                                <AutoOnOff
                                    feedId='cambien3'
                                    deviceName="Light Off"
                                    deviceUnit="%"
                                    dataKey="light"
                                    url="https://auth-nodejs.fly.dev/api/auto/lightoff"
                                    apiKeyResultData="light_off"
                                />
                            </Grid>

                        </Stack>
                    </Grid>
                    <Grid item xs={3} style={{alignItems: "center"}}>
                            <div style={{width: "30%",marginLeft: "100px", marginTop:"100px"}}>
                                <Card sx={{ width: "100%", height: "100%", borderRadius: 8, backgroundColor: "#64dd17" }}  >
                                    <CardContent style={{ padding: 0, margin: 25}}>
                                        <Stack >
                                            <Grid container direction="row">
                                                <Grid item xs={12}>
                                                    <Typography gutterBottom variant="h5" component="div" style={{ color: "white", fontSize: "23px", marginLeft: "15px" }}>
                                                        Set on/off time
                                                    </Typography>
                                                    <Grid container direction="row" style={{ alignItems: 'center' }}>
                                                        <Grid item xs={4}>
                                                            <Typography gutterBottom variant="h5" component="div" style={{ color: "white", fontSize: "20px", marginLeft: "15px", marginBottom: '0px' }}>
                                                                ON TIME
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                                                <DemoContainer components={['TimeField', 'TimeField', 'TimeField']}>
                                                                    <TimeField
                                                                        label=""
                                                                        value={timeOn}
                                                                        onChange={(newValue) => updateTimeOn(newValue)}
                                                                        format="HH:mm"
                                                                        style={{ minWidth: '20px', width: '80px' }}
                                                                    />
                                                                </DemoContainer>
                                                            </LocalizationProvider>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Button onClick={() => activateOn()} variant="contained" color="success" style={{width: '80px', height: '40px' }} sx={{ marginLeft: "auto", marginRight:"75px" }} >Activate</Button>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container direction="row" style={{ alignItems: 'center' }}>
                                                        <Grid item xs={4}>
                                                            <Typography gutterBottom variant="h5" component="div" style={{ color: "white", fontSize: "20px", marginLeft: "15px", marginBottom: '0px' }}>
                                                                OFF TIME
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                                                <DemoContainer components={['TimeField', 'TimeField', 'TimeField']}>
                                                                    <TimeField
                                                                        label=""
                                                                        value={timeOff}
                                                                        onChange={(newValue) => updateTimeOff(newValue)}
                                                                        format="HH:mm"
                                                                        style={{ minWidth: '20px', width: '80px' }}
                                                                    />
                                                                </DemoContainer>
                                                            </LocalizationProvider>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Button onClick={() => activateOff()} variant="contained" color="success" style={{width: '80px', height: '40px' }} sx={{ marginLeft: "auto", marginRight:"75px" }} >Activate</Button>
                                                        </Grid>
                                                    </Grid>


                                                    {/* <Stack direction="row" spacing={1} alignItems="center" style={{ margin: 25 }}>
                                                        <Typography style={{ color: "white" }}>OFF</Typography>
                                                        <AntSwitch inputProps={{ 'aria-label': 'ant design' }} />
                                                        <Typography style={{ color: "white" }}>ON</Typography>
                                                    </Stack> */}
                                                </Grid>

                                            </Grid>

                                        </Stack>
                                    </CardContent>
                                </Card>
                            </div>

                        </Grid>
                </Box>
            </Box>
        </>
    )
}