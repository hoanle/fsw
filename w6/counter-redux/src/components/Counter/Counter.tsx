import React, { useState } from 'react';
import './Counter.css';
import { useSelector, useDispatch } from "react-redux";
import ColorfulTextInput from '../ColorfulTextInput';

const Counter = () => {
    const count = useSelector((state: any) => state.counterReducer.count);
    const color = useSelector((state: any) => state.colorReducer.color);
    const [step, setStep] = useState(1)

    const dispatch = useDispatch();
    const onColorChange = (e:any) => {
        let color = e.target.value; 
        dispatch({
            type: 'SET_COLOR',
            color: color
        })
    }

    const onNumberChange = (e:any) => {
        let number = parseInt(e.target.value); 
        setStep(number)
    }
    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={() => dispatch({type: "INCREMENT", step: step})}>Increment</button>
            <button onClick={() => dispatch({type: "DECREMENT", step: step})}>Decrement</button>
            <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
            <input onChange={onColorChange} placeholder="color change"></input>
            <input onChange={onNumberChange} placeholder="number enter" type="number"></input>
            <div className="Counter-div">
                {
                    [...Array(count)].map(x => {
                        return <ColorfulTextInput color={color} titleColor={count < 10 ? "white" : "purple"} />;
                    })
                }
            </div>
        </div>
    );
}

export default Counter;