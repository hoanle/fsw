import React, { Component } from 'react';
import HighScoreType from './../../types/HighScoreType';
import './HighScore.css';

type HighScoreProps = {
    highScore: HighScoreType
}
class HighScore extends Component<HighScoreProps> {
    constructor(props: HighScoreProps) {
        super(props)
    }
    render() {
        return (
            <div className="HighScore-div">
                <div>{this.props.highScore.player} </div> 
                <div>{this.props.highScore.score} seconds</div>
            </div>
        )
    }
}

export default HighScore;
