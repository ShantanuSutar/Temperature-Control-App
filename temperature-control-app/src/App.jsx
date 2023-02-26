import "./App.scss";
import React, { useState } from "react";

function App() {
  const [temp, setTemp] = useState(20);
  const [tempCol, setTempCol] = useState("");

  return (
    <div className="container">
      <div className="temp-display" id={`${tempCol}`}>
        {temp}°C
      </div>
      <div className="control-buttons">
        <button
          onClick={() => {
            setTemp(temp - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setTemp(temp + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
