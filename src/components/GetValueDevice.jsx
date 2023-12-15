import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import axios from 'axios';
import { getDatabase, ref, onChildAdded } from "firebase/database";
import { useDebounce } from "../debouce";
import CircularSlider from '@fseehawer/react-circular-slider';
import { API_URL } from "../constants";
 

const GetValueDevice = (props) => {
    const [valueDevice, setValueDevice] = useState(27);
    const debouncedValue = useDebounce(valueDevice, 500);
    const [shouldUpdateDatabase, setShouldUpdateDatabase] = useState(false);

    const handleChange = async (newValue) => {
        setShouldUpdateDatabase(true)
        setValueDevice(newValue);

    };

    useEffect(() => {
        axios.get(`${API_URL}/${props.feedId}`)
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
            axios.post(`${API_URL}/cambien/${props.feedId}/${valueDevice}`)
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
                labelColor="#dd2c00"
                knobColor="#dd2c00"
                progressColorFrom="#e65100"
                progressColorTo="#e65100"
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
