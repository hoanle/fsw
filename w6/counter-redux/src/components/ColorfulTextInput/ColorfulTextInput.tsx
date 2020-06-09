import React, { useState } from 'react';
import './ColorfulTextInput.css';

type ColorfulTextInput = {
    color: string
    titleColor: string
}
const ColorfulTextInput = (props: ColorfulTextInput) => {

    const [color, setColor] = useState("");

    const handleTextChange = (e: any) =>  {
        setColor(e.target.value);
    }

    return (
        <div style={{backgroundColor: color != "" ? color : props.color, margin: '10px', width: '300px', padding: '10px'}}>
            <p style={{color: props.titleColor}}>Colorful TextBox</p>
            <input className={`${color} box`} onChange={handleTextChange}></input>
        </div>
    )
}

export default ColorfulTextInput;