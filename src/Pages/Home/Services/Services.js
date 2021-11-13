import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';

const services = [
    { 
        name: 'Fluoride treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: 'https://i.ibb.co/2MRrnSZ/fluoride.png'
    },
    { 
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: 'https://i.ibb.co/1XwRGrN/cavity.png'
    },
    { 
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: 'https://i.ibb.co/N36xrd4/whitening.png'
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={ { fontWeight: 500, m: 2 } } style={ { color: '#5CE7ED' } } variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={ { fontWeight: 600, m: 5 } } variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(
                            service => 
                                <Service
                                    key={service.name}
                                    service={service}
                                ></Service>
                        )
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;