import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello");
  const [button, setButton] = useState("white");

  function changeText() {
    setHeading("Submitted");
  }

  function changeColor() {
    setButton(button === "black" ? "white" : "black");
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: button }}
        onMouseOut={changeColor}
        onMouseOver={changeColor}
        onClick={changeText}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
