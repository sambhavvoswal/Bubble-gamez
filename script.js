var num;
var clutter="";
var score = 0;
var timer=10;
var rn



function increaseScore(){
    score+=10;
    document.querySelector("#score").textContent = score;
}
function makeBubble(){
    for(var i=1;i<287;i++){
        num = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${num}</div>`;
    }
    document.querySelector("#btm").innerHTML=clutter;
}
function runTimer(){
    var timerint = setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timer").textContent=timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector("#btm").innerHTML=""
    }
    },1000);
}
function getHit(){
     rn = Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML = rn;
}
document.querySelector("#btm").addEventListener("click",function(tar){
    var n = (Number(tar.target.textContent));
    if(n == rn){
        increaseScore();
        // alert("great 1");
        makeBubble();
        getHit();
    }
});



// increaseScore();
makeBubble();
runTimer();
getHit();