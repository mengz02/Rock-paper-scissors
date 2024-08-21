

function getComputerChoice(){
   let num = Math.floor(Math.random()) *100 +1;

   if (num <=33){
      console.log("computer chose scisssors!")
      return "scisssors";
   }
   else if (num > 33 && num <=66){
      console.log("computer chose rock!")
      return"rock";
   }
   else{
      console.log("computer chose paper!")
      return "paper";
   }
}


function getHumanChoice(){
   let choice = prompt ("Make your choice!");

   if (choice == "scissors"){
      console.log("You chose scissors!");
   }
   else if (choice == "rock"){
      console.log("You chose rock!");
   }
   else if (choice == "paper"){
      console.log("You chose paper!");
   }
   else{
      console.log("invalid answer!")
   }
   return choice.toLowerCase();
 }

   let humanScore = 0;
   let computerScore = 0;

   
   function playRound(humanChoice, computerChoice){

      if
      (humanChoice === computerChoice){
            console.log("it is a tie!");
      }
      else if ( humanChoice == "rock" && computerChoice == "scissors"){
         console.log("Rock beats scissors");
         return humanScore++;
      } 
      else if ( humanChoice == "scissors" && computerChoice == "paper"){
         console.log("scissors beat paper");
         return humanScore++;
      }
      else if (humanChoice == "paper" && computerChoice == "rock"){
         console.log("paper beats rock");
         return humanScore++;
      }  
      else if ( humanChoice == "scisssors" && computerChoice == "rock"){
         console.log("rcok beats scissors");
         return computerScore++;
      } 
      else if (humanChoice == "paper" && computerChoice == "scissors"){
         console.log("scissors beats paper");
         return computerScore++;
      }  
      else if (humanChoice == "rock"  && computerChoice == "paper") {
         console.log("paper beats rock");
         return computerScore++;
      }
   }

   
   
   function playGame(){

      for (i=0; i<5;i++){
         const humanSelection = getHumanChoice();
         const computerSelection = getComputerChoice();
         
         playRound(humanSelection, computerSelection)
      }
   }

   playGame();