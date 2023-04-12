var randomNum1 = Math.random();
randomNum1 = Math.floor(randomNum1 * 6) + 1;

var randomNum2 = Math.random();
randomNum2 = Math.floor(randomNum2 * 6) + 1;

var player1Dice = "images/dice" + randomNum1 + ".png";
var player2Dice = "images/dice" + randomNum2 + ".png";

document.querySelector(".img1").setAttribute("src", player1Dice);
document.querySelector(".img2").setAttribute("src", player2Dice);

if (player1Dice === player2Dice) {
    document.querySelector("h1").textContent = "Draw"
} else if (player1Dice > player2Dice) {
    document.querySelector("h1").textContent = "Julius Wins!"
} else {
    document.querySelector("h1").textContent = "Rashmita Wins!"
}

