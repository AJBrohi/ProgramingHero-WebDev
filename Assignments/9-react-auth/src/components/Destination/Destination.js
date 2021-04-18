import { Avatar, Button, CardActions, Container, Grid, IconButton, List, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
// import Map from '../Map/Map';
import PicknDrop from '../PicknDrop/PicknDrop';
import { transportsData } from './fakeData';
import { useParams } from 'react-router';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PeopleIcon from '@material-ui/icons/People';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@material-ui/lab';
import moment from 'moment';
import Map from '../Map/Map';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: '#707070',
        color: '#fff',
        '& .MuiListItemIcon-root': {
            color: '#fff'
        },
        alignItems: 'flex-start',
    },
    item: {
        '& .MuiAvatar-img': {
            height: "auto"
        },
        '& .MuiAvatar-square': {
            width: 80,
            height: 80
        },
        '& .MuiCardActions-root': {
            backgroundColor: '#a198984f',
            margin: '20px 0',
            borderRadius: '4px'
        },
    },
    column: {
        paddingRight: "1rem",
        [theme.breakpoints.down('sm')]: {
            padding: '0',
        },
    }
}));

const Destination = () => {
    document.body.style.cssText = `background:#fff;`;

    const { transportType } = useParams();
    const transportCategory = transportsData.filter(transport => transport.name === transportType);
    const classes = useStyles()

    const [destinationInfo, setDestinationInfo] = useState({});
    const [isPicked, setIsPicked] = useState(false);
    
    return (
        <Container style={{ marginTop: '2rem' }}>
            <Grid container>
                <Grid item sm={12} md={6} className={classes.column}>
                    {isPicked ?
                        <Container style={{ backgroundColor:'lightgrey', borderRadius:'10px' }}>
                            <Timeline className={classes.root} >
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>{destinationInfo.pick}</TimelineContent>
                                </TimelineItem>
                                <TimelineItem style={{ minHeight: "40px" }}>
                                    <TimelineSeparator>
                                        <TimelineDot />
                                    </TimelineSeparator>
                                    <TimelineContent>{destinationInfo.drop}</TimelineContent>
                                </TimelineItem>
                                <Typography style={{margin:"0 auto"}} align="center">{`${moment(destinationInfo.date).format('dddd')}, ${moment(destinationInfo.date).format('LL')}`}</Typography>
                            </Timeline>

                            <List component="ul" aria-label="contacts" className={classes.item}>
                                {
                                    transportCategory.map(transport => (
                                        <CardActions key={transport.id}>
                                            <Avatar alt={transport.name} src={transport.image} variant="square" />
                                            <Button size="small" color="primary" style={{ textTransform: 'capitalize' }}>
                                                {transport.name}
                                            </Button>
                                            <IconButton size="small" color="primary">
                                                <PeopleIcon />
                                                {transport.seats}
                                            </IconButton>
                                            <IconButton size="small" color="secondary" style={{ float:'right' }}>
                                                <AttachMoneyIcon />
                                                {transport.price}
                                            </IconButton>
                                        </CardActions>
                                    ))
                                }
                            </List>
                        </Container>
                        :
                        <PicknDrop 
                        setDestinationInfo={setDestinationInfo} 
                        setIsPicked={setIsPicked} />}
                </Grid>
                <Grid item sm={12} md={6} lg={6}>
                    <Map></Map>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Destination;