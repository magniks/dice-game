
var randomnumber1 = Math.floor(((Math.random()*6)+1));

if(randomnumber1 === 1){
  document.getElementsByTagName("img")[0].src = "images/dice1.png";
}
else if(randomnumber1 === 2) {
  document.getElementsByTagName("img")[0].src = "images/dice2.png";
}
else if(randomnumber1 === 3) {
  document.getElementsByTagName("img")[0].src = "images/dice3.png";
}
else if(randomnumber1 === 4) {
  document.getElementsByTagName("img")[0].src = "images/dice4.png";
}
else if(randomnumber1 === 5) {
  document.getElementsByTagName("img")[0].src = "images/dice5.png";
}
else {
  document.getElementsByTagName("img")[0].src = "images/dice6.png";
}

var randomnumber2 = Math.floor(((Math.random()*6)+1));

if(randomnumber2 === 1){
  document.getElementsByTagName("img")[1].src = "images/dice1.png";
}
else if(randomnumber2 === 2) {
  document.getElementsByTagName("img")[1].src = "images/dice2.png";
}
else if(randomnumber2 === 3) {
  document.getElementsByTagName("img")[1].src = "images/dice3.png";
}
else if(randomnumber2 === 4) {
  document.getElementsByTagName("img")[1].src = "images/dice4.png";
}
else if(randomnumber2 === 5) {
  document.getElementsByTagName("img")[1].src = "images/dice5.png";
}
else {
  document.getElementsByTagName("img")[1].src = "images/dice6.png";
}

if (randomnumber1 === randomnumber2){
  document.getElementsByTagName("h1")[0].textContent = "Draw!";
}
else if(randomnumber1 > randomnumber2){
  document.getElementsByTagName("h1")[0].textContent = "Player 1 wins!";
} else {
  document.getElementsByTagName("h1")[0].textContent = "Player 2 wins!";
}
