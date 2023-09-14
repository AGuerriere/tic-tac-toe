// Select all elements with the class 'board-button' and store them in a NodeList.
const buttons = document.querySelectorAll('.board-button')

// Select individual elements with classes 'one' through 'nine' and store them in variables.
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')

// Select the element with the class 'scoreboard' and store it in a variable.
const scoreboard = document.querySelector('.scoreboard')

// Select the element with the class 'reset' and store it in a variable.
const resetButton = document.querySelector('.reset')

// Define a module called Gameboard to manage the game board.
const Gameboard = (() => {
  // Initialize the gameboard as an array with 9 empty strings.
  let gameboard = ["", "", "", "", "", "", "", "", ""]
  let gameOver = false; // Add a variable to track game over state
  
  // Function to update the visual representation of the game board.
  const updateGameboard = () => {
    let i = 0
    buttons.forEach(element => {
      element.innerText = gameboard[i]
      i++
    });
  }

  // Function to check if there's a winner and update the scoreboard.
  const checkForWinner = () => {
    // Check all possible winning combinations and update the scoreboard accordingly.
    // Each condition checks if three specific buttons have the same content and are not empty.
    if (one.innerText.trim() && two.innerText.trim() && three.innerText.trim() && one.innerText === two.innerText && two.innerText === three.innerText) {
      scoreboard.innerText = `Player ${one.innerText} wins`
      gameOver = true
    } else if (four.innerText.trim() && five.innerText.trim() && six.innerText.trim() && four.innerText === five.innerText && five.innerText === six.innerText) {
      scoreboard.innerText = `Player ${four.innerText} wins`
      gameOver = true
    } else if (seven.innerText.trim() && eight.innerText.trim() && nine.innerText.trim() && seven.innerText === eight.innerText && eight.innerText === nine.innerText ) {
      scoreboard.innerText = `Player ${seven.innerText} wins`
      gameOver = true
    } else if (one.innerText.trim() && five.innerText.trim() && nine.innerText.trim() && one.innerText === five.innerText && five.innerText === nine.innerText) {
      scoreboard.innerText = `Player ${one.innerText} wins`
      gameOver = true
    } else if (three.innerText.trim() && five.innerText.trim() && seven.innerText.trim() && three.innerText === five.innerText && five.innerText === seven.innerText) {
      scoreboard.innerText = `Player ${three.innerText} wins`
      gameOver = true
    } else if (one.innerText.trim() && four.innerText.trim() && seven.innerText.trim() && one.innerText === four.innerText && four.innerText === seven.innerText) {
      scoreboard.innerText = `Player ${one.innerText} wins`
      gameOver = true
    } else if (two.innerText.trim() && five.innerText.trim() && eight.innerText.trim() && two.innerText === five.innerText && five.innerText === eight.innerText) {
      scoreboard.innerText = `Player ${two.innerText} wins`
      gameOver = true
    } else if (three.innerText.trim() && six.innerText.trim() && nine.innerText.trim()  && three.innerText === six.innerText  && six.innerText  === nine.innerText ) {
      scoreboard.innerText = `Player ${three.innerText} wins`
      gameOver = true
    } else if(one.innerText.trim() && two.innerText.trim() && three.innerText.trim() && four.innerText.trim() && five.innerText.trim() && six.innerText.trim() && seven.innerText.trim() && eight.innerText.trim() && nine.innerText.trim()) {
      scoreboard.innerText = `It's a draw!`
      gameOver = true
    }
  }

  // Event listener for the reset button that resets the game.
  resetButton.addEventListener('click', () => {
    gameboard = ["", "", "", "", "", "", "", "", ""]
    Gameflow.playerTurn = "X"
    updateGameboard()
    scoreboard.innerText = "Player X's turn"
    gameOver = false
  })

  // Event listener for each game board button to handle player moves.
  buttons.forEach(element => {
    element.addEventListener("click", () => {
      if (!element.innerText && !gameOver) {
        element.innerText = Gameflow.playerTurn
        Gameflow.toggle()
        checkForWinner()
      }
    })
  });

  // Return only the 'updateGameboard' function from the Gameboard module.
  return { updateGameboard }
})()

// Define a player factory function to create player objects.
const playerFactory = () => {
  let score = 0
  const wins = () => {
    score += 1
  }
  const getScore = () => score;
  return { getScore, wins }
}

// Define a module called Gameflow to manage the game's flow and player turns.
const Gameflow = (() => {
  // Initialize the player turn as "X".
  let playerTurn = "X"

  // Function to toggle between players' turns and update the scoreboard.
  const toggle = () => {
    if (Gameflow.playerTurn === "X") {
      Gameflow.playerTurn = "O"
      scoreboard.innerText = "Player O's turn"
    } else if (Gameflow.playerTurn === "O") {
      Gameflow.playerTurn = "X"
      scoreboard.innerText = "Player X's turn"
    }
  }

  // Return the current player turn and the 'toggle' function from the Gameflow module.
  return { playerTurn, toggle }
})()

// Create player objects for X and O using the playerFactory.
const PlayerX = playerFactory()
const PlayerO = playerFactory()

// Initialize the game by updating the gameboard's visual representation.
Gameboard.updateGameboard()

