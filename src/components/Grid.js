import React, { useState } from 'react';
import Square from './Square';

let userInput = prompt("Please enter a number between 16 and 100: ");
while (!/^[0-9]+$/.test(userInput) || userInput < 16 || userInput > 100) {
    alert("You did not enter a number between 16 and 100.");
    userInput = prompt("Please enter a number between 16 and 100: ");
}

const randomColor = () => { return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')' };
const color = randomColor();

const Grid = () => {

    const [theme, setTheme] = useState('black');
    const [backColor, setBackColor] = useState(false);

    const grid = Array(userInput * userInput).fill(null);

    const gridCss = {
        display: 'inline-grid',
        gridTemplateColumns: `repeat(${userInput}, auto)`,
        gridTemplateRows: `repeat(${userInput}, auto)`,
        borderSpacing: '0',
        overFlow: 'hidden'
    }

    const randomHandler = () => {
        setTheme(color);
    }

    const resetHandler = () => {
        window.location.reload();
    }

    const blackHandler = () => {
        setTheme('black');
    }

    const clearHandler = () => {
        if(!backColor) {
            setBackColor(true);
        } else setBackColor(false);
    }

    return (
        <div className="main">
            <div className="buttons">
                <button className="reset" onClick={resetHandler}>Reset Board</button>
                <button className="black" onClick={blackHandler}>Black</button>
                <button className="randomColor" onClick={randomHandler}>Random Color</button>
                <button className="clear" onClick={clearHandler}>Clear Board</button>
            </div>
            <div className="grid" style={gridCss}>
                {grid.map((_square, i) => (<Square backColor={backColor} theme={theme} key={i} />))}
            </div>
        </div>
    );
}

export default  Grid;