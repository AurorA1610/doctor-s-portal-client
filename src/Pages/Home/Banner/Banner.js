import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';


const bannerBG = {
    background: "url('https://i.ibb.co/rGdNxCn/bg.png')"
};

const verticalCenter = {
    display: "flex",
    alignItems: "center",
    height: 400
}

const Banner = () => {
    return (
        <Container style={ bannerBG } sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={ { ...verticalCenter, textAlign: 'left' } } xs={ 12 } md={ 6 }>
                    <Box>
                        <Typography variant="h3" >
                            Your New Smile <br /> Starts Here
                        </Typography>
                        <Typography variant="h6" sx={ { fontSize: 13, color: 'gray', fontWeight: 300, my: 5 } }>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique nisi non tortor consectetur, hendrerit vestibulum purus vulputate. Donec vitae diam molestie, euismod magna sed, sagittis ex. Cras condimentum quam eu fringilla aliquam. Nam euismod pretium magna.
                        </Typography>
                        <Button variant="contained" style={ { backgroundColor: '#5CE7ED' } }>
                            GET APPOINTMENT
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={ 12 } md={ 6 } style={ verticalCenter }>
                    <img style={ { width: '350px', height: ''} } src="https://i.ibb.co/FBGy10v/chair.png" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;