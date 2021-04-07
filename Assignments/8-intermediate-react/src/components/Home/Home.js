import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
}));

const Home = () => {
    const classes = useStyles();
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, [])
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <section className='top'>
                            <h2>League of Legends</h2>
                        </section>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <section className='bottom'>
                            <Container>
                                <Grid container spacing={3}>
                                    {
                                        leagues.map(lg =>

                                            <Grid item sm={12} lg={4}>
                                                <Paper className={classes.paper}>
                                                    <Leagues league={lg}></Leagues>
                                                </Paper>
                                            </Grid>

                                        )
                                    }
                                </Grid>
                            </Container>
                        </section>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;