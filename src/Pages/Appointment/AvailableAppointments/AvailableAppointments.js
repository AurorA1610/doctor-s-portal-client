import { Alert, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import SingleAppointment from '../SingleAppointment/SingleAppointment';

const availableAppointments = [
    {
        id: 1,
        name: "Teeth Orthodontics",
        time: "8.00 AM - 9.00 AM",
        spaces: 10
    },
    {
        id: 2,
        name: "Cosmetics Dentistry",
        time: "10.05 AM - 11.30 AM",
        spaces: 10
    },
    {
        id: 3,
        name: "Teeth Cleaning",
        time: "5.00 PM - 6.30 PM",
        spaces: 10
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: "7.00 AM - 8.30 AM",
        spaces: 10
    },
    {
        id: 5,
        name: "Teeth Orthodontics",
        time: "8.00 AM - 9.00 AM",
        spaces: 10
    },
    {
        id: 6,
        name: "Teeth Orthodontics",
        time: "8.00 AM - 9.00 AM",
        spaces: 10
    }
];


const AvailableAppointments = ({ date }) => {

    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <Container>
            <Typography variant="h4" sx={ { color: 'info.main', mb: 3 } }>
               Available Appointments on {date.toDateString()}
            </Typography>
            { bookingSuccess && <Alert severity="success">Apponintment Booked Successfully</Alert> }
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        availableAppointments.map(
                            singleAppointment => 
                                <SingleAppointment
                                    date={ date }
                                    key={ singleAppointment.id }
                                    singleAppointment={ singleAppointment}
                                    setBookingSuccess={ setBookingSuccess }
                                ></SingleAppointment>
                        )
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default AvailableAppointments;