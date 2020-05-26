import React from 'react';
import './ChoiceCard.css';
import { choices } from './../../constants/Constant';

const ChoiceCard = (props) => {
    let color = props.winner ? "red" : "blue"
    let image = <img src={choices[props.choice]} className="ChoiceCard-img" />;
    let text = props.winner == null ? "" : (props.winner ? "WON" : "LOST");
    return (
        <div className={`ChoiceCard-div ${color}`}>
            <h1 className="ChoiceCard-h1">{props.name}</h1>
                {image}
            <h1 className="ChoiceCard-h1">{text}</h1>
        </div>
    )
}

export default ChoiceCard;
