//picks a random number between 1 and 6, rounds down
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//chooses correct dice image based on random number
var randomImageForLeftDice = "dice" + randomNumber1 + ".png";
var randomImageForRightDice = "dice" + randomNumber2 + ".png";

//changes source of each image from preset image source to new random image
document.querySelector(".img1").setAttribute("src", randomImageForLeftDice);
document.querySelector(".img2").setAttribute("src", randomImageForRightDice);

//chooses which message to display
if(randomNumber1 === randomNumber2) {
  document.querySelector(".message").innerHTML = "Draw!";
}
else if(randomNumber1 > randomNumber2) {
  document.querySelector(".message").innerHTML = "🚩 Player 1 Wins!";
}
else {
document.querySelector(".message").innerHTML = "Player 2 Wins!🚩";
}
