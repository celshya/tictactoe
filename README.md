# Tic-Tac-Toe

## Overview
Tic-Tac-Toe is a classic game implemented using React. This project showcases a simple implementation of the Tic-Tac-Toe game where two players take turns marking the cells of a 3x3 grid. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins the game. If the grid is filled without any player winning, the game is a draw.

## Features
- **Two-Player Mode:** Players take turns to mark cells with "X" or "O".
- **Winner Detection:** Automatically detects and displays the winner or if the game ends in a draw.
- **Reset Button:** Allows players to restart the game at any time.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn (package managers)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/celshya/tictactoe.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd tictactoe
   ```

3. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```
   This will start the development server and open the application in your default web browser.

## Usage
- Click on any empty cell to make a move.
- The game alternates between "X" and "O".
- The game announces the winner or if it's a draw.
- Use the "Reset" button to start a new game.

## Code Overview
- **src/components/useTictactoe.js:** Custom hook managing game logic, state, and winning conditions.
- **src/components/Tictactoe.js:** Main component rendering the game board and interacting with the game logic.
- **src/App.js:** Main application file that renders the Tic-Tac-Toe component.

## Contributing
Contributions are welcome! If you have any improvements, suggestions, or fixes, please submit a pull request. For major changes, please open an issue to discuss what you would like to change before making a pull request.

## Acknowledgments
- Inspired by classic Tic-Tac-Toe gameplay.
- Developed with React for simplicity and efficiency.

