import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './PlayerCards.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faTag } from '@fortawesome/free-solid-svg-icons';



const PlayerCards = (props) => {
    const {image, name, age, club_name, position, price} = props.player;

    const cardStyle = {
        width: '18rem', 
        marginRight: '15px',
        marginBottom: '10px'
    };
    return (
        <Card style={cardStyle}>
            <Card.Img variant="top" src={image} className="player-image" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <small>Age: {age}</small>
                    <p>Current Club: {club_name}</p>
                    <p>Playing Positon: {position}</p>
                    <big><FontAwesomeIcon icon={faTag}/> Salary: <b>{price}</b></big>
                    </Card.Text>
                <Button onClick={()=>props.addPlayer(props.player)} variant="primary"><FontAwesomeIcon icon={faUserPlus}/> Add To Your Team</Button>
            </Card.Body>
        </Card>
    );
}

export default PlayerCards;