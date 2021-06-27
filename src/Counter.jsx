import React, { useState } from "react";

const Counter = ({ count, id, onCounterChange }) => {
  /* useEffect(() => {
    const interval = setInterval(() => {
      incrementCounter();
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []); */

  const incrementCounter = () => {
    onCounterChange({ count: (count += 1), id });
  };

  const decrementCounter = () => {
    onCounterChange({ count: (count -= 1), id });
  };
  return (
    <div className="App">
      {count >= 1 && <button onClick={decrementCounter}>-</button>}
      <p> {count} </p>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
};

export default Counter;
