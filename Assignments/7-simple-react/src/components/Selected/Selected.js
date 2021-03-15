import React from 'react';
import './Selected.css';
// import PlayerTable from '../PlayerTable/PlayerTable';

const Selected = (props) => {
    const players = props.player;
    const total = players.reduce((totalSalary, playersArray) => totalSalary + parseInt(playersArray.price), 0);
    return (
        <div className="selected">
            <div className="ml-3 centering">
                <h2>Selected Players</h2>
                <h5>Total Selected Players: {players.length}</h5>
                
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            players.map(player =>
                                <>
                                    <tr>
                                        <td>{player.name}</td>
                                        <td>€{player.price}</td>
                                    </tr>
                                </>
                            )
                        }
                    </tbody>
                </table>
                <h4>Total Salary: €{total}</h4>
            </div>
        </div>
    )
}

export default Selected;