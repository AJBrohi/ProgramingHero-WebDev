import React from 'react';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Leagues.css'
import { useHistory } from 'react-router';

const Leagues = (props) => {
    const { strLeague, strSport, idLeague } = props.league;

    const history = useHistory();
    const showLeague = lid => {
        const url = `league/${lid}`;
        history.push(url);
    }
    
    return (
        <div className="card">
            <h2>League Name: {strLeague}</h2>
            <br />
            <p>Sports Type: {strSport}</p>
            <br/>
            <br/>
            <Button variant="contained" color="primary" onClick={() => showLeague(idLeague)}>
                Explore &nbsp; &nbsp; <FontAwesomeIcon icon={faArrowRight} />
            </Button>
        </div>
    );
};

export default Leagues;