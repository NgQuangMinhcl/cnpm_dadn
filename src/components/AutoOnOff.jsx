import React, { useState, useEffect } from "react";
import axios from 'axios';
import { getDatabase, ref, onChildAdded } from "firebase/database";
import { useDebounce } from "../debouce";
import CircularSlider from '@fseehawer/react-circular-slider';
import { API_URL } from "../constants";
import Button from '@mui/material/Button';


const AutoOnOff = (props) => {
    const [valueDevice, setValueDevice] = useState(27);
    const debouncedValue = useDebounce(valueDevice, 500);
    const [isCancelled, setIsCancelled] = useState(false);
    // const [shouldUpdateDatabase, setShouldUpdateDatabase] = useState(false);

    const handleChange = async (newValue) => {
        setValueDevice(newValue);
    };

    useEffect(() => {
        let data = -99;
        axios.get(props.url)
        .then(res => {
            data = res.data[props.apiKeyResultData]
        })
        .catch(ex =>{
            console.log(ex)
        })
        .finally(() => {
            setValueDevice(data < 0 ? 0 : data)
            setIsCancelled(data < 0 ? true : false);
        })    
        
    }, [])


    const cancel =() =>{
        axios.post(props.url, {
            [props.dataKey]: -99
        })
        setValueDevice(0)
        setIsCancelled(true);
    }

    const activate = () => {
        axios.post(props.url, {
            [props.dataKey]: valueDevice
        })
        setIsCancelled(false)

    }

    return (
        <>
            <CircularSlider
                label={isCancelled ? `${props.deviceName} - Disabled` : `${props.deviceName} - Activated`}
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
            <Button onClick={() => activate()}  variant="contained" color="success" style={{width: '80px', height: '40px' }} sx={{ marginLeft: "auto", marginRight:"75px" }} >Activate</Button>
            <Button onClick={() => cancel()} variant="contained" color="success" style={{width: '80px', height: '40px' }} sx={{ marginLeft: "auto", marginRight:"75px" }} >Cancel</Button>
        </>
        
    )
}
export default AutoOnOff;
