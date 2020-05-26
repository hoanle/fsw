import React from 'react';
import Button from '@material-ui/core/Button';
import {choiceNames} from './../../constants/Constant';

const GameButton = (props) => {
    return (<Button variant="contained" color="primary" onClick={() => props.onClick(props.choice)} disabled={props.disabled}>
        {choiceNames[props.choice]}
        </Button>);
}

export default GameButton;