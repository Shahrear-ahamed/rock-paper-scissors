const loadRockPaperScissors = () => {
  const numbers = Math.floor(Math.random() * 12);
  if (numbers == 0 || numbers == 3 || numbers == 6 || numbers == 11) {
    return "Rock";
  } else if (numbers == 2 || numbers == 5 || numbers == 8 || numbers == 10) {
    return "Paper";
  } else {
    return "Scissors";
  }
};
const winFunction = (man, bot) => {
  if (
    (man == "Rock" && bot == "Paper") ||
    (man == "Paper" && bot == "Scissors") ||
    (man == "Scissors" && bot == "Rock")
  ) {
    return "Bot Win";
  } else if (
    (man == "Rock" && bot == "Scissors") ||
    (man == "Paper" && bot == "Rock") ||
    (man == "Scissors" && bot == "Paper")
  ) {
    return "You Win";
  } else if (
    (man == "Scissors" && bot == "Scissors") ||
    (man == "Rock" && bot == "Rock") ||
    (man == "Paper" && bot == "Paper")
  ) {
    return "Draw";
  }
};
document.getElementById("rpsGameBtn").addEventListener("click", () => {
  const loadrpsMan = loadRockPaperScissors();
  const loadrpsBot = loadRockPaperScissors();
  const winStatus = winFunction(loadrpsMan, loadrpsBot);
  const inputShow = document.getElementById("rpsShowMan-input");
  const inputShowBot = document.getElementById("rpsShowBot-input");
  const winnerShow = document.getElementById("winner-span");
  //   const inputShowResult = document.getElementById("rpsResult-input");
  inputShow.value = loadrpsMan;
  inputShowBot.value = loadrpsBot;
  winnerShow.innerText = winStatus;
  console.log(loadrpsMan, loadrpsBot, winStatus);
});
