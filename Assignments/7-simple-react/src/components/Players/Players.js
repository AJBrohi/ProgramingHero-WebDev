import React, { useState, useEffect } from 'react';
import './Players.css';
import playerData from '../../FakeData/playerData.json';

import PlayerCards from '../../components/PlayerCards/PlayerCards';

const Players = (props) => {
    const [players, setPlayers] = useState('[]');
    useEffect(() => {
        setPlayers(playerData);
    }, []);
    return (
        <div>
            <h2 className="centering">Players List</h2>
            <div className="player-cards">
                {
                    playerData.map(pd=>
                        <PlayerCards
                        player={pd}
                        addPlayer={props.handle}
                        key={pd.id}>
                        </PlayerCards>
                    )
                }
            </div>

        </div>
    )
}

export default Players;