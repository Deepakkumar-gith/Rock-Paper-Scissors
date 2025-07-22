let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompchoice = () => {
      const options = ["rock", "paper","scissors"];
      const randIdx = Math.floor(Math.random()*3);
      return options[randIdx];
//rock papper scissors
}
const drawGame = () => {
      msg.innerText ="Game was draw . play again.";
      msg.style.backgroundColor = "#081b31";
}
const showWinner = (userwin,userChoice,compchoice) =>{
     if(userwin){
      userscore++;
      userScorePara.innerText = userscore;
      msg.innerText =`You win! Your ${userChoice} beats ${compchoice}`;
      msg.style.backgroundColor = "green";
     } else{
      compscore++;
      compScorePara.innerText = compscore;
      msg.innerText =`You lost. ${compchoice} beats Your ${userChoice}`;
      msg.style.backgroundColor = "red";
     }
}

const playGame = (userChoice) => {
      //Generate computer choice
      const compchoice = genCompchoice();

if(userChoice === compchoice) {
      //Draw game
      drawGame();
} else{
  let userwin = true ;
  if(userChoice === "rock"){
      //scissors,paper
      userwin = compchoice === "paper" ? false:true;
}else if(userChoice === "paper"){
      //rock,scissors
      userwin = compchoice === "scissors" ? false:true;
}else{
      //rock ,paper
      userwin = compchoice === "rock" ? false:true;
}
showWinner(userwin,userChoice,compchoice);
}
};
choices.forEach((choice) => {
      choice.addEventListener("click",() => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
      });

});