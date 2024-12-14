# Guess Number Game

A simple and interactive React-based game where users try to guess a randomly generated number between 1 and 20. The app provides feedback on each guess (too high, too low, or correct) and tracks the user's past guesses. Users have a maximum of 5 attempts to guess the correct number.

---

## Features

- **Random Number Generation**: A new random number is generated each time the game starts or resets.
- **Feedback on Guesses**: Users receive feedback if their guess is too high, too low, or correct.
- **Limited Attempts**: Users have a maximum of 5 attempts to guess the correct number.
- **Past Guesses Display**: A list of the user's past guesses is displayed.
- **Game Reset**: Users can reset the game at any time to start fresh.
- **Responsive Design**: The app is fully responsive and works on various screen sizes.

---

## Technologies Used

- **React**: A JavaScript library for building the user interface.
- **CSS Modules**: For component-specific styling with no global CSS conflicts.
- **HTML5 & JavaScript (ES6+)**: Core web technologies for interactive features.

---

## Project Structure

```
guess-num-game/
├── src/
│   ├── App.js                  # Main app component
│   ├── components/
│   │   ├── Game.js             # Game logic and main state management
│   │   ├── GuessInput.js       # Component for handling user input
│   │   ├── PastGuesses.js      # Component to display past guesses
│   │   ├── Game.module.css     # CSS for Game component
│   │   ├── GuessInput.module.css # CSS for GuessInput component
│   │   ├── PastGuesses.module.css # CSS for PastGuesses component
│   ├── index.css               # Global styles
│   ├── App.js                  # App styles
├── README.md                   # Project documentation
├── package.json                # Project dependencies and scripts


---

## How to Run the App Locally

Follow these steps to clone and run the project on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/guess-num-game.git
```

### 2. Navigate to the Project Directory
```bash
cd guess-num-game
```

### 3. Install Dependencies
Ensure you have **Node.js** and **npm** installed, then run:
```bash
npm install
```

### 4. Start the Development Server
```bash
npm start
```

The app will be accessible at `http://localhost:3000` in your browser.

---

## Game Rules

1. **Objective**: Guess the randomly generated number between 1 and 20.
2. **Feedback**:
   - **"Too low"**: Your guess is lower than the target number.
   - **"Too high"**: Your guess is higher than the target number.
   - **"Congratulations"**: You guessed correctly.
3. **Attempts**: You have a maximum of 5 tries to guess the correct number.
4. **End of Game**:
   - If you guess the number correctly, the game ends.
   - If you run out of attempts, the game ends and displays the correct number.
5. **Reset**: You can reset the game at any time to start over with a new random number.

---

## Deployment

You can deploy the app to a hosting platform like **Netlify**, **Vercel**, or **GitHub Pages**.

### To Deploy on GitHub Pages:
1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add the following to your `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/guess-num-game",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy the app:
   ```bash
   npm run deploy
   ```


---

## Future Enhancements

- Add difficulty levels (e.g., wider number ranges or fewer attempts).
- Track the number of games played and user's win/loss statistics.
- Enhance UI/UX with animations and better styling.
- Add accessibility features for better usability.

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m "Add some feature"`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the [GNU GENERAL PUBLIC LICENSE v3](LICENSE).

---

## Author

**krunchontu**  
GitHub: [@krunchontu](https://github.com/krunchontu)

