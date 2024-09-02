let userScore=0;
let compScore=0;

const msg=document.querySelector("#message");
const choices=document.querySelectorAll(".choice");
let cScore=document.querySelector("#comp-score");
let uScore=document.querySelector("#user-score");

let restart=document.querySelector("#restart");

const drawGame=(userChoice)=>{
    console.log("Game was draw");
    msg.innerText=`Game Was Draw at ${userChoice}, Play again!`
    msg.style.backgroundColor="#2e294e";
}

const showWinner=(userWin,userChoice,compC)=>
{
    if(userWin){
        console.log("You Won");
        msg.innerText=`You Won!. Your ${userChoice} beats ${compC}`;
        msg.style.backgroundColor="darkgreen";
        userScore++
        uScore.innerText=userScore;
    }else{
        console.log("You lost");
        msg.innerText=`You Lost!. ${compC} beats your ${userChoice} `;
        msg.style.backgroundColor="darkred";
        compScore++;
        cScore.innerText=compScore;
    }
}

const playGame=(userChoice)=>{
  console.log("user:",userChoice);
  //computer choice->modular
  const compC=compChoice();
  console.log("Comp:",compC);

  if (userChoice==compC){
    drawGame(userChoice);
  }else{
    let userWin=true;
    if(userChoice==="Rock"){
        userWin=compC==="Paper"?false:true;
    }
    else if(userChoice==="Paper"){
        userWin=compC==="Scissors"?false:true;

    }else{
        userWin=compC==="Rock"?false:true;
    }
    showWinner(userWin,userChoice,compC);
  }
}

const compChoice=()=>{
    //rock,paper,scissors
    const options=["Rock","Paper","Scissors"];
   const comChoice= Math.floor(Math.random()*3);
   return options[comChoice];

}

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
       playGame(userChoice);
    })
})

restart.addEventListener("dblclick",()=>{
    userScore=0;
    compScore=0;
    uScore.innerText=userScore;
    cScore.innerText=compScore;
    msg.innerText=`Play Your Move `;
    msg.style.backgroundColor="#2e294e";
    
})
