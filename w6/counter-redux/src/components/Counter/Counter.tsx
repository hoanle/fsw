import React, { useState, useRef, RefObject } from 'react';
import './Counter.css';
import { useSelector, useDispatch } from "react-redux";
import ColorfulTextInput from '../ColorfulTextInput';

const Counter = () => {
    const inputRef = useRef<HTMLInputElement>(null);
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

    const onIncrement =  () => {
        let stepNo = 1;
        if (inputRef.current != null && inputRef.current.value != null) {
            stepNo = parseInt(inputRef.current.value);
        }
        
        dispatch({type: "INCREMENT", step: stepNo})
    }

    const onDecrement=  () => {
        let stepNo = 1;
        if (inputRef.current != null && inputRef.current.value != null) {
            stepNo = parseInt(inputRef.current.value);
        }
        
        dispatch({type: "DECREMENT", step: stepNo})
    }

    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
            <input onChange={onColorChange} placeholder="color change"></input>
            <input ref={inputRef} placeholder="number enter" type="number"></input>
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