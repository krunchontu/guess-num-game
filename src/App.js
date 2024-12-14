import React from "react";
import Game from "./components/Game";

// Main App component - entry point of the application
function App() {
  return (
    <div>
      {/* Application title */}
      <h1 style={{ textAlign: "center" }}>Guess the Number Game</h1>
      {/* Game component renders the main game logic */}
      <Game />
    </div>
  );
}

export default App;
