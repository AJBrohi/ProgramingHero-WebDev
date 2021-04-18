import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import './LeagueDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import male from '../../image/male.png';
import female from '../../image/female.png';

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

const LeagueDetail = () => {
    const classes = useStyles();
    const { lid } = useParams();
    const [leagueDetail, setLeagueDetail] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${lid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagueDetail(data.leagues[0]))
    }, [lid])

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>

                    <section className='top'>
                        <img src={leagueDetail.strBadge} alt="" />
                    </section>

                </Grid>
                <Grid item lg={12}>

                    <section className="bottom">
                        <Container>
                            <section className='bottom-first-half'>
                                <Grid container spacing={3}>
                                    <Grid item lg={5} sm={12} >
                                        <div className="left">
                                            <h2>{leagueDetail.strLeague}</h2>
                                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {leagueDetail.dateFirstEvent}</p>
                                            <p><FontAwesomeIcon icon={faFlag} /> Country: {leagueDetail.strCountry}</p>
                                            <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {leagueDetail.strSport}</p>
                                            <p><FontAwesomeIcon icon={faMars} /> Gender: {leagueDetail.strGender}</p>
                                        </div>
                                    </Grid>

                                    <Grid item lg={7} sm={12} >
                                        <div className="right">
                                            {
                                                leagueDetail.strGender === 'Male' ? <img src={male} alt=""/> : <img src={female} alt=""/>
                                            }
                                        </div>
                                    </Grid>
                                </Grid>
                            </section>

                            <section className="bottom-second-half">
                                {leagueDetail.strDescriptionEN}
                            </section>

                            <Grid item lg={12}>
                                <div className="footer">
                                    <a href={leagueDetail.strFacebook}><FontAwesomeIcon icon={faFacebook} color="red" /></a>
                                    <a href={leagueDetail.strTwitter}><FontAwesomeIcon icon={faTwitter} color="red" /></a>
                                    <a href={leagueDetail.strYoutube}><FontAwesomeIcon icon={faYoutube} color="red" /></a>
                                </div>
                            </Grid>

                        </Container>
                    </section>

                </Grid>
            </Grid>
        </div>
    );
};

export default LeagueDetail;




// , , , , , , leagueDetail.str, leagueDetail.str