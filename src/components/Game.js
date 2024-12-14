import React, { useState } from "react";
import GuessInput from "./GuessInput";
import PastGuesses from "./PastGuesses";
import styles from "./Game.module.css";

// Main Game component that handles game logic and state
const Game = () => {
  const [randomNumber, setRandomNumber] = useState(() => generateRandomNumber()); // Random number to guess
  const [message, setMessage] = useState("Make a guess!"); // Feedback message for the user
  const [pastGuesses, setPastGuesses] = useState([]); // Array to store user's past guesses
  const [guess, setGuess] = useState(""); // Current guess input
  const [remainingTries, setRemainingTries] = useState(5); // Tracks remaining attempts
  const [gameOver, setGameOver] = useState(false); // Tracks if the game is over

  // Generates a random number between 1 and 20
  function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }

  // Handles the logic for when a user submits a guess
  const handleGuess = () => {
    const numericGuess = parseInt(guess, 10); // Parse the input into a number

    // Validate the user's input
    if (isNaN(numericGuess) || numericGuess < 1 || numericGuess > 20) {
      setMessage("Please enter a number between 1 and 20."); // Display error for invalid input
      return;
    }

    // Add the current guess to the list of past guesses
    setPastGuesses([...pastGuesses, numericGuess]);

    // Check if the guess is correct
    if (numericGuess === randomNumber) {
      setMessage("Congratulations! You guessed correctly."); // Display success message
      setGameOver(true); // Mark the game as over
      return; // Exit the function early since the user has won
    }

    // Decrease the remaining tries
    setRemainingTries(remainingTries - 1);

    // If no tries are left, end the game
    if (remainingTries === 1) {
      setMessage(`Game over! The correct number was ${randomNumber}. Reset the game to try again.`);
      setGameOver(true); // Mark the game as over
      return;
    }

    // If the guess is incorrect, provide feedback
    if (numericGuess < randomNumber) {
      setMessage("Too low. Try again!");
    } else {
      setMessage("Too high. Try again!");
    }

    // Clear the input field after processing the guess
    setGuess("");
  };

  // Resets the game to its initial state
  const resetGame = () => {
    setRandomNumber(generateRandomNumber()); // Generate a new random number
    setPastGuesses([]); // Clear past guesses
    setMessage("Make a guess!"); // Reset the feedback message
    setGuess(""); // Clear the current input
    setRemainingTries(5); // Reset remaining tries
    setGameOver(false); // Allow the user to play again
  };

  return (
    <div className={styles.container}>
      {/* Displays the feedback message */}
      <p className={styles.message}>{message}</p>

      {/* Input and Guess button, disabled if the game is over */}
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        onGuess={handleGuess}
        disabled={gameOver}
      />

      {/* Reset button to start a new game */}
      <button className={styles.resetButton} onClick={resetGame}>
        Reset Game
      </button>

      {/* Displays the number of remaining tries */}
      <p className={styles.tries}>Remaining Tries: {remainingTries}</p>

      {/* List of past guesses */}
      <PastGuesses guesses={pastGuesses} />
    </div>
  );
};

export default Game;
