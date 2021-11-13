import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const SingleAppointment = ({ singleAppointment, date, setBookingSuccess }) => {
    const { id, name, time, spaces } = singleAppointment;

    
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={ { py: 5 } }>
                    <Typography variant="h5" gutterBottom component="div" sx={ { color: 'info.main', fontWeight: 600 } }>{ name }</Typography>
                    <Typography variant="h6" gutterBottom component="div">{ time }</Typography>
                    <Typography variant="caption" gutterBottom display="block">{ spaces } SPACES AVAILABLE</Typography>
                    <Button onClick={ handleBookingOpen } variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid> 
            <BookingModal
                date={ date }
                booking={ singleAppointment }
                openBooking={ openBooking }
                handleBookingClose={ handleBookingClose }
                setBookingSuccess={ setBookingSuccess }
            ></BookingModal>
        </>
    );
};

export default SingleAppointment;