import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(-5);

  const incrementCounter = () => {
    setCounter((prevCounter) => (prevCounter += 1));
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => (prevCounter -= 1));
  };

  return (
    <div className="App">
      <button onClick={decrementCounter}>-</button>
      <p> {counter} </p>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
}

export default App;
