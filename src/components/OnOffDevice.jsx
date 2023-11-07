import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../Dash.css";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import axios from 'axios';
import { getDatabase, ref, onChildAdded } from "firebase/database";


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


const OnOffDevice = (props) => {

    const [deviceState, setDeviceState] = useState(false);

    useEffect(() => {
        axios.get(`http://127.0.0.1:5001/${props.feedId}`)
            .then(result => {
                setDeviceState(result.data === "ON" ? true : false)
            })
    }, [])


    useEffect(() => {
        // Set up a listener to listen for changes in a specific Firebase database node
        // console.log('subcribe to ', props.feedId)
        const databaseRef = ref(getDatabase(), props.feedId)
        onChildAdded(databaseRef, (snapshot) => {
            const newValue = snapshot.val()
            console.log("new value", newValue)
            setDeviceState(newValue === "ON" ? true : false)
        })
    }, []);

    const changeLightStatus = async (feedId, newStatus) => {
        const newData = newStatus ? "ON" : "OFF"
        setDeviceState(newStatus)
        await axios.post(`http://127.0.0.1:5001/cambien/${feedId}/${newData}`)

    }
    return (
        <Card sx={{ minWidth: 30 + "%", height: 140 }} className="card">
            <CardContent>
                <Stack direction="row">
                    <Grid container >
                        <Grid item xs={2}>
                            {props.icon}
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom variant="h5" component="div" style={{ color: "white", fontSize: "30px", marginLeft: "15px" }}>
                                {props.deviceName}
                            </Typography>
                        </Grid>
                        <Grid item xs={4} style={{ marginTop: "10px" }}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Typography style={{ color: "white" }}>Off</Typography>
                                <AntSwitch checked={deviceState} inputProps={{ 'aria-label': 'ant design' }} onChange={(e, checked) => changeLightStatus(props.feedId, checked)} />
                                <Typography style={{ color: "white" }}>On</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default OnOffDevice;