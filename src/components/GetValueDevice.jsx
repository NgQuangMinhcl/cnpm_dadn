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
import CircularSlider from '@fseehawer/react-circular-slider';
 

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
        <CircularSlider
                label={props.deviceName}
                labelColor="#005a58"
                knobColor="#005a58"
                progressColorFrom="#00bfbd"
                progressColorTo="#009c9a"
                progressSize={24}
                appendToValue={props.deviceUnit}
                trackColor="#eeeeee"
                trackSize={24}
                max={100}
                min={0}
                dataIndex={valueDevice}
                onChange={ value => { handleChange(value); } }
            />
    )
}
export default GetValueDevice;
