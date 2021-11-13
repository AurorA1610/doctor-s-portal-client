import { Container, Grid } from '@mui/material';
import React from 'react';
import Calender from '../../Shared/Calender/Calender';

const AppointmentHeader = ({ date, setDate }) => {
    return (
        <Container sx={ {  my: 5 } }>
            <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid xs={12} md={6}>
                    <img style={ { width: '100%' } } src="https://i.ibb.co/FBGy10v/chair.png" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;