import React from "react";
import Sidenav from "../components/Sidenav";
import Box from '@mui/material/Box';
import Navbar from "../components/Navbar";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BarChart from '../charts/BarChart';
import AccordionDash from "../components/AccordionDash";


export default function Analytics(){
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
                            <Card sx={{ height: 500 , backgroundColor:'#ede7f6', marginBottom:'20px'}}>
                                <CardContent>
                                    <BarChart />
                                </CardContent>   
                            </Card>
                            <Card sx={{ height: 500, backgroundColor:'#ede7f6', marginBottom:'20px'}}>
                                <CardContent>
                                    <BarChart />
                                </CardContent>   
                            </Card>
                            <Card sx={{ height: 50 + "vh", backgroundColor:'#ede7f6', marginBottom:'20px'}}>
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