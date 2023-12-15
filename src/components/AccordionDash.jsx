import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionDash() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data from the API
    axios.get('https://auth-server-navy.vercel.app/api/date')
      .then(response => {
        if (response.data.success) {
          setUserData(response.data.data);
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  // Get unique usernames
  const uniqueUsernames = [...new Set(userData.map(user => user.user_name))];

  return (
    <div>
      {uniqueUsernames.map(username => {
        const userHistory = userData.filter(user => user.user_name === username);

        // Find the last login time
        const lastLoginTime = userHistory.length > 0
          ? userHistory.reduce((maxDate, user) => (new Date(user.date) > new Date(maxDate) ? user.date : maxDate), userHistory[0].date)
          : '';

        return (
          <Accordion key={username}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-${username}-content`}
              id={`panel-${username}-header`}
            >
              <Typography>{username}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Last Login: {lastLoginTime}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
