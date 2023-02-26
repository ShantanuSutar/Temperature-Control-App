import "./App.scss";
import React, { useState } from "react";

function App() {
  const [temp, setTemp] = useState(20);
  const [tempCol, setTempCol] = useState("");

  const checkTmp = (temp) => {
    if (temp > 25) {
      setTempCol("hot");
    } else if (temp < 15) {
      setTempCol("cold");
    } else setTempCol("");
  };

  return (
    <div className="container">
      <div className="temp-display" id={`${tempCol}`}>
        {temp}°C
      </div>
      <div className="control-buttons">
        <button
          onClick={() => {
            setTemp(temp - 1);
            checkTmp(temp);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setTemp(temp + 1);
            checkTmp(temp);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
