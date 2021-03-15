import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';

import './App.css';
import Players from './components/Players/Players';
import Selected from './components/Selected/Selected';

// const newPlayerList = [...playerList, player];
//         setPlayerList(newPlayerList);
function App() {
  const [playerList, setPlayerList] = useState([]);

  const handleAddPlayer = (player) => {
    const newPlayerList = [...playerList, player];
    setPlayerList(newPlayerList);

    // tried heart and soul but cant make it possible to not add same player twice.
    // for (let i = 0; i < playerList.length; i++) {
    //   let checkSame = playerList[i];
    //   if (checkSame === player) {
        // console.log(checkSame);
    //     playerList.filter((playerNa, index) => {return playerList.indexOf(playerNa)===index;})
    //   }
    // }
  }
  return (
    <div>
      <h2 className="centering border-bottom">UEFA Champions League Player Bidding</h2>
      <Row className="mt-5">
        <Col>
          <Players handle={handleAddPlayer}></Players>
        </Col>
        <Col>
          <Selected player={playerList}></Selected>
        </Col>
      </Row>
    </div>
  );
}

export default App;
