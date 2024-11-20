# React Tic-Tac-Toe Game

## Check out the Link : [Tic-Tac-Toe](https://abuzar-tic-tac-game.netlify.app/)

A modern, interactive Tic-Tac-Toe game built with React. This application features a dynamic game board, player name customization, and game state tracking.

## Features

- 🎮 Interactive 3x3 game board
- 👥 Two-player gameplay
- ✏️ Editable player names
- 📝 Game moves log
- 🏆 Winner detection
- 🔄 Game restart functionality
- 🤝 Draw detection

## Technologies Used

- React
- JavaScript (ES6+)
- CSS for styling

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abuzarraziqgithub/react-tic-tac-toe.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-tic-tac-toe
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## How to Play

1. The game starts with Player 1 (X) and alternates with Player 2 (O)
2. Click on any empty square to make a move
3. Players can edit their names by clicking on them
4. The game automatically detects wins and draws
5. Use the "Rematch!" button to start a new game

## Project Structure

src/
├── components/
│ ├── Player.jsx # Player component for name and symbol
│ ├── GameBoard.jsx # Main game board grid
│ ├── Log.jsx # Move history log
│ └── GameOver.jsx # Game over modal
├── App.jsx # Main application component
└── winning-combinations.js # Win condition definitions

## Game Logic

- The game state is managed through React's useState hook
- Player turns are tracked in a turns array
- Winner detection checks for three matching symbols in a row, column, or diagonal
- The game board is derived from the turns history
- Player names are stored in a state object

## Contributing

Feel free to submit issues and enhancement requests!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Built with React 18+
- Inspired by the classic Tic-Tac-Toe game
