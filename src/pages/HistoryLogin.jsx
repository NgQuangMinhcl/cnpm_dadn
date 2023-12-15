import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

// function createData(username,date, time) {
//     return { username, date, time };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0),
//     createData('Ice cream sandwich', 237, 9.0),
//     createData('Eclair', 262, 16.0),
//     createData('Cupcake', 305, 3.7),
//     createData('Gingerbread', 356, 16.0),
// ];

export default function HistoryLogin() {
    const [historyData, setHistoryData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://auth-server-navy.vercel.app/api/date');
                setHistoryData(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <Navbar />
            <Box height={70} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Typography gutterBottom variant="h3" component="div" color="Black" textAlign="center">
                        History Login
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>User</StyledTableCell>
                                    <StyledTableCell align="right">Date</StyledTableCell>
                                    <StyledTableCell align="right">Time</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {historyData.map((row) => (
                                <StyledTableRow key={row._id}>
                                    <StyledTableCell component="th" scope="row">{row.user_name}</StyledTableCell>
                                    <StyledTableCell align="right">{new Date(row.date).toLocaleDateString()}</StyledTableCell>
                                    <StyledTableCell align="right">{new Date(row.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</StyledTableCell>
                                </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>

        </>
    
    );
}