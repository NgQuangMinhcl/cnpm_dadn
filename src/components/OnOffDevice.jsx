import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import axios from 'axios';
import { getDatabase, ref, onChildAdded } from "firebase/database";
import { API_URL } from "../constants";


const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 50,
    height: 25,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 24,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(25px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 22,
        height: 22,
        borderRadius: 11,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 25 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));


const OnOffDevice = (props) => {

    const [deviceState, setDeviceState] = useState(false);

    useEffect(() => {
        axios.get(`${API_URL}/${props.feedId}`)
            .then(result => {
                setDeviceState(result.data === props.onValue ? true : false)
            })
    }, [])


    useEffect(() => {
        // Set up a listener to listen for changes in a specific Firebase database node
        // console.log('subcribe to ', props.feedId)
        const databaseRef = ref(getDatabase(), props.feedId)
        onChildAdded(databaseRef, (snapshot) => {
            const newValue = snapshot.val()
            console.log("new value", newValue)
            setDeviceState(newValue === props.onValue ? true : false)
        })
    }, []);

    const changeLightStatus = async (feedId, newStatus) => {
        const newData = newStatus ? props.onValue : props.offValue
        setDeviceState(newStatus)
        await axios.post(`${API_URL}/cambien/${feedId}/${newData}`)

    }
    return (
        
        <Card sx={{ width: "100%", height: props.height ? props.height: 140, borderRadius: 8, background:props.backgroundColor}}  >
            <CardContent style={{ padding: 0, marginTop:props.marginTop?props.marginTop: 25, marginLeft: 10 }}>
                <Stack >
                    <Grid container direction="row">
                        <Grid item xs={3}>
                            {props.icon}
                        </Grid>
                        <Grid item xs={9}>
                            <Typography gutterBottom variant="h5" component="div" style={{ color: "#4a148c", fontSize: props.fontSize ? props.fontSize : "23px", marginLeft: "15px", fontWeight:"bold" }}>
                                {props.deviceName}
                            </Typography>
                            <Stack direction="row" spacing={1} alignItems="center" style={{marginTop:25, marginLeft:20}}>
                                <Typography style={{ color: "#212121", fontWeight:"bold"}}>OFF</Typography>
                                <AntSwitch checked={deviceState} inputProps={{ 'aria-label': 'ant design' }} onChange={(e, checked) => changeLightStatus(props.feedId, checked)} />
                                <Typography style={{ color: "#212121", fontWeight:"bold" }}>ON</Typography>
                            </Stack>
                        </Grid>
                        
                    </Grid>
                    
                </Stack>
            </CardContent>
        </Card>
    )
}

export default OnOffDevice;