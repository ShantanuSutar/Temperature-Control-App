import "./App.scss";

function App() {
  return (
    <div className="container">
      <div className="temp-display">
        <div className="temp"> 10°C</div>
      </div>
      <div className="control-buttons">
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
}

export default App;
