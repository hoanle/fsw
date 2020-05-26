import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/ChoiceCard/ChoiceCard';
import ChoiceCard from './components/ChoiceCard/ChoiceCard';
import GameButton from './components/GameButton/GameButton';
import Zoom from 'react-reveal/Zoom';
import { SwitchTransition, CSSTransition } from "react-transition-group"

function App() {

  const [myChoice, setMyChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userWin, setUserWin] = useState(null);

  const onClick = (choice) => {
    console.log("choice " + choice);
    let computer = Math.floor(Math.random() * 3);

    console.log("computerChoice " + computerChoice);
    setMyChoice(choice);
    setComputerChoice(computer);

    if (choice == computer) {
      setUserWin(null)
    } else if (choice == 0) {
      if (computer == 1) {
        setUserWin(false)
      } else {
        setUserWin(true)
      }
    } else if (choice == 1) {
      if (computer == 2) {
        setUserWin(false)
      } else {
        setUserWin(true)
      }
    } else if (choice == 2) {
      if (computer == 0) {
        setUserWin(false)
      } else {
        setUserWin(true)
      }
    }
  };

  return (
    <div className="App">
      <div className="App-container">
        <Zoom>
          <SwitchTransition>
            <CSSTransition
              key={myChoice}
              addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
              classNames='fade'>
              <ChoiceCard choice={myChoice} winner={userWin} name="YOU" />
            </CSSTransition>
          </SwitchTransition>

        </Zoom>

        <div className="App-options-container">
          <GameButton choice={0} onClick={onClick} />
          <GameButton choice={1} onClick={onClick} />
          <GameButton choice={2} onClick={onClick} />
        </div>
        <Zoom>
          <SwitchTransition>
            <CSSTransition
              key={computerChoice}
              addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
              classNames='fade'>
              <ChoiceCard choice={computerChoice} winner={userWin == null ? null : !userWin} name="COMPUTER" />
            </CSSTransition>
          </SwitchTransition>
        </Zoom>

      </div>
    </div>
  );
}

export default App;
