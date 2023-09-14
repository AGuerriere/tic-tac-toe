const buttons = document.querySelectorAll('.board-button')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const scoreboard = document.querySelector('.scoreboard')
const resetButton = document.querySelector('.reset')

const Gameboard = (() => {
  let gameboard = ["","","","","","","","","",]
  const updateGameboard = () => {
    let i = 0
    buttons.forEach(element => {
      element.innerText = gameboard[i]
      i++
    });
  }

  const checkForWinner = () => {
    if (one.innerText.trim() && two.innerText.trim() && three.innerText.trim() && one.innerText === two.innerText && two.innerText === three.innerText) {
     scoreboard.innerText = `Player ${one.innerText} wins`
    } else if (four.innerText.trim() && five.innerText.trim() && six.innerText.trim() && four.innerText === five.innerText && five.innerText === six.innerText){
     scoreboard.innerText = `Player ${four.innerText} wins`
    } else if (seven.innerText.trim() && eight.innerText.trim() && nine.innerText.trim() && seven.innerText === eight.innerText && eight.innerText === nine.innerText ) {
     scoreboard.innerText = `Player ${seven.innerText} wins`
    } else if (one.innerText.trim() && five.innerText.trim() && nine.innerText.trim() && one.innerText === five.innerText && five.innerText === nine.innerText){
     scoreboard.innerText = `Player ${one.innerText} wins`
    } else if (three.innerText.trim() && five.innerText.trim() && seven.innerText.trim() && three.innerText === five.innerText && five.innerText === seven.innerText) {
     scoreboard.innerText = `Player ${three.innerText} wins`
    } else if (one.innerText.trim() && four.innerText.trim() && seven.innerText.trim() && one.innerText === four.innerText && four.innerText === seven.innerText) {
     scoreboard.innerText = `Player ${one.innerText} wins`
    } else if (two.innerText.trim() && five.innerText.trim() && eight.innerText.trim() && two.innerText === five.innerText && five.innerText === eight.innerText) {
     scoreboard.innerText = `Player ${two.innerText} wins`
    } else if ( three.innerHTML.trim() && six.innerHTML.trim() && nine.innerHTML.trim()  && three.innerHTML === six.innerHTML  && six.innerHTML  === nine.innerHTML ) {
     scoreboard.innerHTML = `Player ${three.innerHTML} wins`
    }
  }

  resetButton.addEventListener('click', () => {
    gameboard = ["","","","","","","","","",]
    Gameflow.playerTurn = "X"
    updateGameboard()
    scoreboard.innerText = "Player X's turn"
  })

  buttons.forEach(element => {
    element.addEventListener("click", () => {
      if (!element.innerText) {
        element.innerText = Gameflow.playerTurn
        Gameflow.toggle()
        checkForWinner()
      }
    })
  });
  return {updateGameboard}
})()



const playerFactory = () => {
  let score = 0
  const wins = () => {
    score += 1
  }
  const getScore = () => score;
  return {getScore, wins}
}


const Gameflow = (() => {
  let playerTurn = "X"
  const toggle = () => {
    if(Gameflow.playerTurn === "X") {
      Gameflow.playerTurn = "O"
      scoreboard.innerText = "Player 0's turn"
    } else if(Gameflow.playerTurn === "O") {
      Gameflow.playerTurn = "X"
      scoreboard.innerText = "Player X's turn"
    }
  }
  return {playerTurn, toggle}
})()

const PlayerX = playerFactory()
const PlayerO = playerFactory()

Gameboard.updateGameboard()

