import React from 'react';
import Button from '@material-ui/core/Button';
import { choiceNames } from './../../constants/Constant';
import './GameButton.css';
const GameButton = (props) => {
    return (<div className="app-button">
        <Button className="app-button" variant="contained" color="primary" onClick={() => props.onClick(props.choice)} disabled={props.disabled}>
            {choiceNames[props.choice]}
        </Button>
    </div>);
}

export default GameButton;