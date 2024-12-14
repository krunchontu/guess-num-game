import React from "react";
import styles from "./GuessInput.module.css";

// Component for handling user input and the Guess button
const GuessInput = ({ guess, setGuess, onGuess, disabled }) => {
  // Updates the input state when the user types
  const handleInputChange = (e) => {
    setGuess(e.target.value); // Update the parent state with the input value
  };

  // Handles the form submission for guessing
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!disabled) {
      onGuess(); // Call the parent's onGuess function
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Input field for entering the guess */}
      <input
        type="text"
        value={guess}
        onChange={handleInputChange}
        className={styles.input}
        placeholder="Enter a number (1-20)"
        disabled={disabled} // Disable input if the game is over
      />

      {/* Button to submit the guess */}
      <button type="submit" className={styles.button} disabled={disabled}>
        Guess
      </button>
    </form>
  );
};

export default GuessInput;
