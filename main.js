const buttons = document.querySelectorAll(".board-button")

const Gameboard = (() => {
  let gameboard = ["","","","","","","","","",]
  const updateGameboard = () => {
    let i = 0
    buttons.forEach(element => {
      element.innerText = gameboard[i]
      i++
    });
  }
  buttons.forEach(element => {
    element.addEventListener("click", () => {
      if (!element.innerText) {
        element.innerText = Gameflow.playerTurn
        Gameflow.toggle()
      }
    })
  });
  return {updateGameboard}
})()

const playerFactory = () => {
  let score = 0
  return {score}
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

