import React from "react";
import styles from "./PastGuesses.module.css";

// Component to display a list of the user's past guesses
const PastGuesses = ({ guesses }) => {
  return (
    <div className={styles.container}>
      <h3>Past Guesses:</h3>
      <ul className={styles.list}>
        {/* Render each past guess as a list item */}
        {guesses.map((guess, index) => (
          <li key={index} className={styles.item}>
            {guess}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastGuesses;
