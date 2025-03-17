import React, { useState } from 'react';
import './counter.css'; // Import the CSS file

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1 className="counter-display">Counter: {count}</h1>
      <div className="button-container">
        <button onClick={increment} className="button">Increment</button>
        <button onClick={decrement} className="button">Decrement</button>
        <button onClick={reset} className="button button-reset">Reset</button>
      </div>
    </div>
  );
};

export default Counter;
