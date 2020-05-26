import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import './components/ChoiceCard/ChoiceCard';
import ChoiceCard from './components/ChoiceCard/ChoiceCard';
import GameButton from './components/GameButton/GameButton';
import { SwitchTransition, CSSTransition, TransitionGroup } from "react-transition-group"
import Button from '@material-ui/core/Button';
import AlertDialog from './components/AlertDialog/AlertDialog';

function App() {

  const [myChoice, setMyChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userWin, setUserWin] = useState(null);
  const [history, setHistory] = useState([]);
  const [started, setStarted] = useState(false);
  const [computerFlawless, setComputerFlawless] = useState(false);
  const [youFlawless, setYouFlawless] = useState(false);
  const divRef = useRef(null);

  const scrollToBottom = () => {
    console.log("scrollToBottom");
    divRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }

  const startGame = () => {
    setHistory([])
    setStarted(!started)
    setYouFlawless(false)
    setComputerFlawless(false);
  }
  useEffect(() => {
    scrollToBottom();

    if (history.length === 3) {
      if (history[0].winner === "You" && history[1].winner === "You" && history[2].winner === "You") {
        setYouFlawless(true)
      } else if (history[0].winner === "Computer" && history[1].winner === "Computer" && history[2].winner === "Computer") {
        setComputerFlawless(true)
      } 
    }
  }, [history])

  const onClick = (choice) => {
    let computer = Math.floor(Math.random() * 3);

    setMyChoice(choice);
    setComputerChoice(computer);

    if (choice === computer) {
      setUserWin(null)
    } else if (choice === 0) {
      if (computer === 1) {
        setHistory(history => [...history, { id: Date.now(), winner: "Computer" }])
        setUserWin(false)
      } else {
        setHistory(history => [...history, { id: Date.now(), winner: "You" }])
        setUserWin(true)
      }
    } else if (choice === 1) {
      if (computer === 2) {
        setHistory(history => [...history, { id: Date.now(), winner: "Computer" }])
        setUserWin(false)
      } else {
        setHistory(history => [...history, { id: Date.now(), winner: "You" }])
        setUserWin(true)
      }
    } else if (choice === 2) {
      if (computer === 0) {
        setHistory(history => [...history, { id: Date.now(), winner: "Computer" }])
        setUserWin(false)
      } else {
        setHistory(history => [...history, { id: Date.now(), winner: "You" }])
        setUserWin(true)
      }
    }
  };

  return (
    <div className="App">
      <div className="App-container">
        <div className="App-history-container">
          <div className="App-history-header">History </div>
          <div className="App-history-list">
            <TransitionGroup>
              {
                history.map(item => {
                  return (<CSSTransition
                    key={item.id}
                    timeout={500}
                    classNames="item">
                    <div>{`${item.winner} won`}</div>
                  </CSSTransition>);
                })
              }
            </TransitionGroup>
          </div>
          <div ref={divRef} />
        </div>
        
        <SwitchTransition>
          <CSSTransition
            key={myChoice}
            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
            classNames='fade'>
            <ChoiceCard choice={myChoice} winner={userWin} name="YOU" />
          </CSSTransition>
        </SwitchTransition>

        <div className="App-options-container">
          <GameButton choice={0} onClick={onClick} disabled={!started} />
          <GameButton choice={1} onClick={onClick} disabled={!started} />
          <GameButton choice={2} onClick={onClick} disabled={!started} />
          <Button variant="outlined" color="primary" onClick={() => startGame()}>
            {started ? "Reset" : "Start"}
          </Button>
        </div>
        
        <SwitchTransition>
          <CSSTransition
            key={computerChoice}
            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
            classNames='fade'>
            <ChoiceCard choice={computerChoice} winner={userWin == null ? null : !userWin} name="COMPUTER" />
          </CSSTransition>
        </SwitchTransition>
        
      </div>
      <AlertDialog open={computerFlawless} title="Flawless victory" content="Computer won easily"></AlertDialog>
      <AlertDialog open={youFlawless} title="Flawless victory" content="You won easily"></AlertDialog>
    </div>
  );
}

export default App;
