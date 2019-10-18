$(document).ready(function(){ 
var timeLeft = 20; 
console.log( timeLeft);
var downloadTimer = setInterval(function()={
    document.getElementById("countdown").innerHTML = TimeRemaining + "second remaining";
 TimeRemaining -= 1;   
 if (TimeRemaining <=0){
     clearInterval(downloadTimer); 
     document.getElementById("countdown").innerHTML="Done"
 }
});  

var correctAnswers = 0; 
var incorrectAnswers = 0;
var unanswered = 0




})