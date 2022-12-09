function myScript(){
var random = Math.floor(Math.random()*100)+1;

document.getElementById("score").value = random;

if(random>=70){
  document.querySelector("h3").innerHTML = "You both are made for each other!!";
  }
else if(random<30){
  document.querySelector("h3").innerHTML = "Your love is like oil and water..";
  }
}
