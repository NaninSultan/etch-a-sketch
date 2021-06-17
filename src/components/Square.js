import React from 'react';

const Square = ({ theme, backColor }) => {

    const changeHandler = (e) => {
        if(theme === 'black') {
            e.target.style.backgroundColor = 'black';
        } else {
            e.target.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        }
    }

    return (
        <div className="square"
            style={{ backgroundColor: backColor ? "white" : "" }}
            onMouseEnter={changeHandler}></div>
    )
}

export default Square;