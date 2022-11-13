// PLAYER ONE
var mathOne = (Math.round(Math.random() * 5) + 1);
var randomNumberOne = "images/dice" + mathOne +".png";
document.querySelector(".dice .img1").setAttribute("src",randomNumberOne);

// PLAYER TWO
var mathTwo = (Math.round(Math.random() * 5) + 1);
var randomNumberTwo = "images/dice" + mathTwo +".png";
document.querySelector(".dice .img2").setAttribute("src",randomNumberTwo);

if (mathOne > mathTwo) {
     document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
else if (mathOne < mathTwo) {
     document.querySelector("h1").innerHTML = "Player 2 Wins!";
}  else if (mathOne = mathTwo) {
    document.querySelector("h1").innerHTML = "Draw!";
}
