$(document).ready(function() { 
var timeLeft= 20;
var downloadTimer = setInterval(function() => {document.getElementById("countdown").innerHTML= time remaining + "second remaining";
 timeLeft -=1;   
 if (timeLeft <=0){
     clearInterval(downloadTimer); 
     document.getElementById("countdown").innerHTML="Done"
 }
}, 1000);



})