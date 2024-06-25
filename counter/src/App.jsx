import React, { useState } from 'react';
import './App.css'; // Assuming you will create a separate CSS file for styling

function Counter() {
  // Initialize state for the counter
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1); // State for the increment/decrement value

  // Function to handle increment
  const increment = () => {
    setCount(count + incrementValue);
  };

  // Function to handle decrement
  const decrement = () => {
    setCount(count - incrementValue);
  };

  // Function to reset the counter
  const reset = () => {
    setCount(0);
  };

  // Function to handle change in increment/decrement value
  const handleIncrementChange = (e) => {
    setIncrementValue(Number(e.target.value));
  };

  return (
    <div className="counter-container">
      {/* Display the current count */}
      <h1>Counter: {count}</h1>
      
      {/* Input to set the increment/decrement value */}
      <div>
        <label>
          Increment/Decrement by:
          <input
            type="number"
            value={incrementValue}
            onChange={handleIncrementChange}
          />
        </label>
      </div>
      
      {/* Buttons to increment, decrement, and reset the counter */}
      <div className="button-group">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
