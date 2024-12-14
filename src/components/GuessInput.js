import React from "react";
import styles from "./GuessInput.module.css";

// Component for handling user input for a guess
const GuessInput = ({ guess, setGuess, onGuess, disabled }) => {
  // Handle input change and update the state in the parent
  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  // Handle form submission and trigger the guess check
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!disabled) {
      onGuess(); // Call the onGuess function passed as a prop
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Input field for entering a guess */}
      <input
        type="text"
        value={guess}
        onChange={handleInputChange}
        className={styles.input}
        placeholder="Enter a number (1-20)"
        disabled={disabled} // Disable input if disabled prop is true
      />
      {/* Submit button */}
      <button type="submit" className={styles.button} disabled={disabled}>
        Guess
      </button>
    </form>
  );
};

export default GuessInput;
