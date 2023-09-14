const buttons = document.querySelectorAll(".board-button")
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')

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
    if (one.innerText === two.innerText && two.innerText === three.innerText) {
      console.log(one.innerText)
    } else if (four.innerText === five.innerText && five.innerText === six.innerText){
      console.log(four.innerText)
    } else if (seven.innerText === eight.innerText && eight.innerText === nine.innerText ) {
      console.log(seven.innerText)
    } else if (one.innerText === five.innerText && five.innerText === nine.innerText){
      console.log(one.innerText)
    } else if (three.innerText === five.innerText && five.innerText === seven.innerText) {
      console.log(three.innerText)
    } else if (one.innerText === four.innerText && four.innerText === seven.innerText) {
      console.log(one.innerText)
    } else if (two.innerText === five.innerText && five.innerText === eight.innerText) {
      console.log(two.innerText)
    } else if ( three.innerText === six.innerText && six.innerText === nine.innerText) {
      console.log(three.innerText)
    }
  }
  

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
    } else if(Gameflow.playerTurn === "O") {
      Gameflow.playerTurn = "X"
    }
  }
  return {playerTurn, toggle}
})()

const PlayerX = playerFactory()
const PlayerO = playerFactory()

Gameboard.updateGameboard()

