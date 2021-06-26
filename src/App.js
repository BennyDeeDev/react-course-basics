import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  /* useEffect(() => {
    const interval = setInterval(() => {
      incrementCounter();
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []); */

  const incrementCounter = () => {
    setCounter((prevCounter) => (prevCounter += 1));
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => (prevCounter -= 1));
  };

  return (
    <div className="App">
      {counter >= 1 && <button onClick={decrementCounter}>-</button>}
      <p> {counter} </p>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
}

export default App;
