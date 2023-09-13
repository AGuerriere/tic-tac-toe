const buttons = document.querySelectorAll(".board-button")

const Gameboard = (() => {
  let gameboard = ["x","","","","","","","","",]
  const updateGameboard = () => {
    let i = 0
    buttons.forEach(element => {
      element.innerText = gameboard[i]
      i++
    });
  }
  return {updateGameboard}
})()

const playerFactory = () => {
  let score = 0
  return {score}
}

const Gameflow = (() => {
  let playerTurn = "X"
  return {playerTurn}
})()

const PlayerX = playerFactory()
const PlayerO = playerFactory()

Gameboard.updateGameboard()