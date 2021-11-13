import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const appointmentBG = {
    background: "url('https://i.ibb.co/dJq6FnK/appointment-bg.png') no-repeat",
    backgroundSize: "100% 100%",
    marginTop: 175,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBanner = () => {
    return (
        <Box style={ appointmentBG } sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={ { width: 400, marginTop: -110 } } src="https://i.ibb.co/nnBDtj5/doctor.png" alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={ { display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center'} }>
                    <Box>
                        <Typography variant="h6" sx={ { mb: 5 } } style={ { color: '#5CE7ED' } }>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={ { color: 'white'} }>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={ { my: 5 } } style={ { color: 'white', fontSize: 14, fontWeight: 300 } }>
                            lorem ipsum dolor sit amet, consectetur loremlorem ipsum dolorlorem
                            loremlorem
                        </Typography>
                        <Button variant="contained" style={ { backgroundColor: '#5CE7ED' } }>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;