import React, { useState } from "react";
import GuessInput from "./GuessInput";
import PastGuesses from "./PastGuesses";
import styles from "./Game.module.css";

// Main Game component that handles game logic and state
const Game = () => {
  const [randomNumber, setRandomNumber] = useState(() => generateRandomNumber()); // Random number
  const [message, setMessage] = useState("Make a guess!"); // Feedback message
  const [pastGuesses, setPastGuesses] = useState([]); // Store past guesses
  const [guess, setGuess] = useState(""); // Current guess input
  const [remainingTries, setRemainingTries] = useState(5); // Track remaining tries

  // Function to generate a random number between 1 and 20
  function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }

  // Handle user's guess submission
  const handleGuess = () => {
    const numericGuess = parseInt(guess,2);

    // Validate input: Ensure it's a number within the range
    if (isNaN(numericGuess) || numericGuess < 1 || numericGuess > 20) {
      setMessage("Please enter a number between 1 and 20.");
      return;
    }

    // Add the guess to past guesses and decrease the remaining tries
    setPastGuesses([...pastGuesses, numericGuess]);
    setRemainingTries(remainingTries - 1);

    // Check the guess against the random number
    if (numericGuess === randomNumber) {
      setMessage("Congratulations! You guessed correctly.");
    } else if (numericGuess < randomNumber) {
      setMessage("Too low. Try again!");
    } else {
      setMessage("Too high. Try again!");
    }

    // Clear the input field after the guess
    setGuess("");

    // If no tries left, disable guessing and prompt reset
    if (remainingTries === 1) {
      setMessage(`Game over! The correct number was ${randomNumber}. Reset the game to try again.`);
    }
  };

  // Reset the game: Generate a new random number and clear all state
  const resetGame = () => {
    setRandomNumber(generateRandomNumber());
    setPastGuesses([]);
    setMessage("Make a guess!");
    setGuess("");
    setRemainingTries(5); // Reset remaining tries
  };

  return (
    <div className={styles.container}>
      {/* Display feedback message */}
      <p className={styles.message}>{message}</p>

      {/* GuessInput component for user input */}
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        onGuess={handleGuess}
        disabled={remainingTries === 0} // Disable input if no tries left
      />

      {/* Button to reset the game */}
      <button className={styles.resetButton} onClick={resetGame}>
        Reset Game
      </button>

      {/* Display remaining tries */}
      <p className={styles.tries}>Remaining Tries: {remainingTries}</p>

      {/* PastGuesses component to display the history of guesses */}
      <PastGuesses guesses={pastGuesses} />
    </div>
  );
};

export default Game;
