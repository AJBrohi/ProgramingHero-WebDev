import React from 'react';
import car from '../../images/car.png';
import bus from '../../images/bus.png';
import train from '../../images/train.png';
import bike from '../../images/bike.png';
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';



const transports = [
    { name: "Bike", photo: bike, },
    { name: "Car", photo: car },
    { name: "Bus", photo: bus },
    { name: "Train", photo: train },
];


const useStyles = makeStyles({
    root: {
        marginTop: '2rem',
        minHeight: 'calc(100vh - 200px)',
        display: 'flex',
        alignItems: 'center',
        '& a': {
            textDecoration: 'none'
        },
        '& .MuiCard-root' : {
            background:'salmon',
            color:'#fff'
        }
    },
    media: {
        padding: '20px 0',
        height: 150,
        width: 'auto',
        margin: '0 auto'
    },
});

const Home = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing="4">
                {
                    transports.map(transport => (
                        <Grid item sm={12} md={6} lg={3}>
                            <Link to={`/destination/${transport.name}`}>
                                <Card key={transport.name} >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            className={classes.media}
                                            src={transport.photo}
                                            title={transport.name}
                                        />
                                        <CardContent>
                                            <Typography align="center" gutterBottom variant="h5" component="h2">
                                                {transport.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default Home;