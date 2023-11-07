import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../Dash.css";
import Slider from '@mui/material/Slider';
import axios from 'axios';
import { getDatabase, ref, onChildAdded } from "firebase/database";
import { useDebounce } from "../debouce";

const GetValueDevice = (props) => {
    const [valueDevice, setValueDevice] = useState(27);
    const debouncedValue = useDebounce(valueDevice, 500);
    const [shouldUpdateDatabase, setShouldUpdateDatabase] = useState(false);

    const handleChange = async (newValue) => {
        setShouldUpdateDatabase(true)
        setValueDevice(newValue);

    };

    useEffect(() => {
        axios.get(`http://127.0.0.1:5001/${props.feedId}`)
            .then(result => {
                setValueDevice(Number(result.data))
            })
    }, [])

    useEffect(() => {
        // Set up a listener to listen for changes in a specific Firebase database node
        // console.log('subcribe to ', props.feedId)
        const databaseRef = ref(getDatabase(), props.feedId)
        onChildAdded(databaseRef, (snapshot) => {
            setShouldUpdateDatabase(false)
            const newValue = snapshot.val()
            console.log("new value", newValue)
            setValueDevice(Number(newValue))
        })
    }, []);


    // Fetch API (optional)
    useEffect(() => {
        // Do fetch here...
        // Triggers when "debouncedValue" changes
        if (shouldUpdateDatabase) {
            axios.post(`http://127.0.0.1:5001/cambien/${props.feedId}/${valueDevice}`)
                .then(() => {
                    console.log(props.feedId, "updated")
                })
                .catch(err => {
                    console.error(props.feedId, err)
                })
        }

    }, [debouncedValue])

    return (
       
        <Card sx={{ minWidth: 47 + "%", height: 140 }} className="card">
            <CardContent>
                <Stack direction="row">
                    <Grid container >
                        <Grid item xs={1} >
                            {props.icon}
                        </Grid>
                        <Grid item xs={7}>
                            <Typography gutterBottom variant="h5" component="div" style={{ color: "white", fontSize: "30px", marginLeft: "15px" }}>
                                {props.deviceName}
                            </Typography>
                        </Grid>
                        <Grid item xs={4} style={{ marginTop: "-10px" }}>
                            {props.deviceName === "Temperature" ? (
                                <span style={{ fontSize: "50px", color: "white", marginLeft: "30px" }}>{valueDevice}&#8451;</span>
                            ) : (
                                props.deviceName === "Humidity" ? (
                                    <span style={{ fontSize: "50px", color: "white", marginLeft: "30px" }}>{valueDevice} %</span>
                                ) : null
                            )}
                        </Grid>
                    </Grid>
                </Stack>
                <Slider
                    aria-label="Custom marks"
                    value={valueDevice}
                    step={1}
                    valueLabelDisplay="auto"
                    onChange={(e, newValue) => handleChange(newValue)}
                    style={{ color: "white" }}

                    className="custom-slider"
                />

            </CardContent>
        </Card>
    )
}
export default GetValueDevice;
