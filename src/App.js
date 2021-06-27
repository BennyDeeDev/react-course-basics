import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Counter from "./Counter";

function App() {
  const [counterList, setCounterList] = useState([
    {
      id: 1,
      count: 2,
    },
    {
      id: 2,
      count: 3,
    },
    {
      id: 3,
      count: 4,
    },
    {
      id: 4,
      count: 5,
    },
  ]);

  const handleCounterChange = (counter) => {
    setCounterList((prevCounterList) =>
      prevCounterList.map((c) => {
        if (c.id === counter.id) return counter;
        return c;
      })
    );
  };

  return (
    <>
      {counterList.map((counter) => (
        <Counter
          key={counter.id}
          count={counter.count}
          id={counter.id}
          onCounterChange={handleCounterChange}
        />
      ))}
    </>
  );
}

export default App;
