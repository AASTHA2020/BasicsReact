// BackgroundChanger.js
import React, { useState } from 'react';
import './App.css';

function BackgroundChanger() {
  const [color, setColor] = useState('#ffffff');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeColor = () => {
    const newColor = getRandomColor();
    setColor(newColor);
  };

  return (
    <div className="background-changer" style={{ backgroundColor: color }}>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default BackgroundChanger;
