
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";



var randomImageSource1 = "images/" + randomDiceImage1;
var randomImageSource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll(".img1")[0];
var image2 = document.querySelectorAll(".img2")[0];

image1.setAttribute("src", randomImageSource1);

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
}


if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
} 

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Winners are all around 🚩";
    document.querySelector("h1").style
} 
