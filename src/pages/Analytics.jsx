import React, { useState } from "react";
import Sidenav from "../components/Sidenav";
import Box from '@mui/material/Box';
import Navbar from "../components/Navbar";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BarChart from '../charts/BarChart';
import HistoryChart from '../charts/HistoryChart';
import AccordionDash from "../components/AccordionDash";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';



export default function Analytics() {
    const [value, setValue] = useState(dayjs());
    // console.log('valueDate: ',value);
    return (
        <>
            <Navbar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Box height={20} />
                    <Grid container spacing={2}>
                        <Grid item xs={9} spacing={2}>
                            <Card sx={{ height: 500, backgroundColor: '#ede7f6', marginBottom: '20px' }}>
                                <CardContent>
                                    
                                    <HistoryChart feedId={"nhiet-do"} targetDate={value} nameChart={'Temperature'} />
                                </CardContent>
                            </Card>
                            <Card sx={{ height: 500, backgroundColor: '#ede7f6', marginBottom: '20px' }}>
                                <CardContent>
                                    <HistoryChart feedId={"do-am"} targetDate={value} nameChart={'Humidity'}/>
                                </CardContent>
                            </Card>
                            <Card sx={{ height: 50 + "vh", backgroundColor: '#ede7f6', marginBottom: '20px' }}>
                                <CardContent>
                                    <BarChart />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} spacing={2}>
                            <Card sx={{ height: 50 + "vh", backgroundColor: '#ede7f6', marginBottom: '20px' }}>
                                <CardContent>
                                    <div style={{ padding: '10px' }}>
                                        <span style={{ fontWeight: '600' }}>Calendar</span>
                                    </div>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                                            <DemoItem>
                                                <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                                            </DemoItem>
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </CardContent>
                            </Card>
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