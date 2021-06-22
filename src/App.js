import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const name = "Benny";

  const element1 = <h1 className="greeting">Hello, world!</h1>;

  const element2 = React.createElement(
    "h1",
    { className: "greeting" },
    "Hello, world!"
  );

  return (
    <div className="App">
      {element1}
      {element2}
    </div>
  );
}

export default App;
