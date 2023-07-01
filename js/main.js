// Player name
var player1 = "Player 1";
var player2 = "Player 2";

// Function to change the player name
document.querySelector(".btnChoiceName").addEventListener("click",function(){  

    player1 = prompt("inter name player1 :");
    player2 = prompt("inter name player2 :");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
})

document.addEventListener("keypress", function(event) {

    rollDice(event.key);

  });

document.querySelector(".btnChoiceRoll").addEventListener("click",function(){

    var rollInnerHtml = this.innerHTML;
    rollDice(rollInnerHtml);

});

function rollDice(key){  
    setTimeout(function () {
        var randNumPlayer1 = Math.floor(Math.random() * 6) + 1;
        var randNumPlayer2 = Math.floor(Math.random() * 6) + 1;

        switch(randNumPlayer1){

            case 1:
                  document.querySelector(".img1").setAttribute("src","./images/dice1.png");
                break;

            case 2:
                  document.querySelector(".img1").setAttribute("src","./images/dice2.png");
                break;

            case 3:
                  document.querySelector(".img1").setAttribute("src","./images/dice3.png");
                break;

            case 4:
                  document.querySelector(".img1").setAttribute("src","./images/dice4.png");
                break;

            case 5:
                  document.querySelector(".img1").setAttribute("src","./images/dice5.png");
                break;

            case 6:
                  document.querySelector(".img1").setAttribute("src","./images/dice6.png");
                break;

                default: console.log(randNumPlayer1);

        }

        switch(randNumPlayer2){

            case 1:
                  document.querySelector(".img2").setAttribute("src","./images/dice1.png");
                break;

            case 2:
                  document.querySelector(".img2").setAttribute("src","./images/dice2.png");
                break;

            case 3:
                  document.querySelector(".img2").setAttribute("src","./images/dice3.png");
                break;

            case 4:
                  document.querySelector(".img2").setAttribute("src","./images/dice4.png");
                break;

            case 5:
                  document.querySelector(".img2").setAttribute("src","./images/dice5.png");
                break;

            case 6:
                  document.querySelector(".img2").setAttribute("src","./images/dice6.png");
                break;

                default: console.log(randNumPlayer2);
        }

        if (randNumPlayer1 == randNumPlayer2) {
            document.querySelector("h1").innerHTML = "Draw!";
            drawAnimation();
        }

        else if (randNumPlayer1 < randNumPlayer2) {
            document.querySelector("h1").innerHTML = (player2 +  " win !");
            winnerAnimation();   
            winnerPlayer(2);
            lostPlayer(1);
        }

        else {
            document.querySelector("h1").innerHTML = (player1 + " win !");
            winnerAnimation();  
            winnerPlayer(1);
            lostPlayer(2);
        }
    }, 1500);
}

function winnerAnimation(){
    let playerWin = document.querySelector("h1");
    playerWin.classList.add("win");
    setTimeout(function(){
        playerWin.classList.remove("win");
      }, 1500);
  }

function drawAnimation(){
    let playerWin = document.querySelector("h1");
    playerWin.classList.add("draw");
    setTimeout(function(){
        playerWin.classList.remove("draw");
      }, 1500);
  }

  function winnerPlayer(numberImage){
    let winsPlay = document.querySelector(".img" + numberImage);
    winsPlay.classList.add("imgwin");
    setTimeout(function(){
      winsPlay.classList.remove("imgwin");
    }, 1500);
  }

  function lostPlayer(numberImage){
    let lostPlay = document.querySelector(".img" + numberImage);
    lostPlay.classList.add("imglost");
    setTimeout(function(){
      lostPlay.classList.remove("imglost");
    }, 1500);
  }