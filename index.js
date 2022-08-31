var random=Math.floor(Math.random()*6)+1;

var randomIMg="dice" + random + ".png";
var randomSource="images/"+ randomIMg;

var img1=document.querySelectorAll("img")[0];
var img2=document.querySelectorAll("img")[1];
img1.setAttribute("src",randomSource);


var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImgNumber="images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImgNumber)


if(random>randomNumber2)
{
  document.querySelector("h1").innerHTML="player 1 win"
}
else if(randomNumber2>random){
  document.querySelector("h1").innerHTML="player 2 win"
}
else{
  document.querySelector("h1").innerHTML="Draw"
}
