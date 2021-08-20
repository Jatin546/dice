var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDiceImage1);

image2.setAttribute("src", randomDiceImage2);

if (randomDiceImage1 > randomDiceImage2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomDiceImage2 > randomDiceImage1){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
