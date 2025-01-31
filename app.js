let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice"); //invoking all choice divs
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");

const msg=document.querySelector("#msg");

//Generate Computer Choice
const GenerateComputerChoice = () => {
  //rock, paper,scissors -random choice genrated by computer
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3); //math.floor removes decimal //math.random generates random numbers //*3 to which index ie.0,1,2 .
  return options[randomIndex];
};

//Generate Draw function
const drawGame = () => {
  // console.log("Game Was Draw!");
  msg.innerText="Draw!" //inner Text Massage- Draw
  msg.style.backgroundColor="Black";
};

//Show Winner Function
const showWinner = (userWin , userChoice , ComputerChoice) => {
  if (userWin) {
    //if UserWin =true
    // console.log("You Win!");
    msg.innerText=`"You Win!" Your ${userChoice} beats ${ComputerChoice}`   // inner Text Massage -You Win
    msg.style.backgroundColor="Green";
    //Update Your score
    userScore++;
    userScorePara.innerText=userScore;

  } else {
    //if UserWin =false
    // console.log("You lose!");
    msg.innerText=`"You lose!" ${ComputerChoice} beats  Your ${userChoice}`  // inner Text Massage - You lose
    msg.style.backgroundColor="Red";
    //Update Your score
    computerScore++
    compScorePara.innerText=computerScore;
  }
};

//play game//
//User Choice
const playGame = (userChoice) => {
  // console.log("user choice = ", userChoice); //when choice clicked - user choice (rock/paper/scissor)

  //Computer Choice
  const ComputerChoice = GenerateComputerChoice();
  // console.log("computer choice = ", ComputerChoice); //when computer click random choice (rock/paper/scissor)

  //Checking for DRAW and Win//
  //Paper beats Rock
  //Scissors beats Paper
  //Rock beats Scissors
  if (userChoice === ComputerChoice) {
    //Calling Draw Game
    drawGame();

  } else {
    let userWin = true; //userWin tracking win or lose
    if (userChoice === "rock") {
      //scissors,paper
      userWin = ComputerChoice === "paper" ? false : true; //if computer Choice=paper then User will lose : win
    } else if (userChoice === "paper") {
      //rock,scissors
      userWin = ComputerChoice === "scissors" ? false : true; //if computer Choice= scissors then User Will lose : win
    } else {
      // (userChoice==="scissors")
      //rock,paper
      userWin = ComputerChoice === "rock" ? false : true; //if computer choice=rock then user will lose :win
    }
    showWinner(userWin , userChoice, ComputerChoice);
  }
};

//User choice
choices.forEach((choice) => {
  // console.log(choice);   //not required in game to print choice
  choice.addEventListener("click", () => {
    //invoking click
    const userChoice = choice.getAttribute("id"); //userChoice taken from Id of choice div
    playGame(userChoice);
  });
});

//Compute choice
