let mainBtn=document.querySelector("#startstpBtn")
let reset=document.querySelector("#resetBtn")

let seconds=0;
let minutes=0;
let hours=0;
let leadingS=0;
let leadingM=0;
let leadingH=0;
let timerInterval=null;
let timerStatus="stopped";
function stopWatch(){
    seconds++
    if(seconds / 60 === 1){
        seconds=0
        minutes++ 
      if(minutes / 60 === 1){
        minutes=0
        hours++
    }
    if (seconds<10){
        leadingS="0"+ seconds.toString();
    }else{
        leadingS=seconds;
    }
    if (seconds<10){
        leadingM="0"+ minutes.toString();
    }else{
        leadingM=minutes;
    }
    if (seconds<10){
        leadingH="0"+ hours.toString();
    }else{
        leadingH=hours;
    }
}
    let displayTimer = document.getElementById("timer").innerText=leadingH + ":" + leadingM + ":" + leadingS
}

mainBtn.addEventListener("click",function(){
    if(timerStatus==="stopped"){
        timerInterval=window.setInterval(stopWatch,1)
        document.getElementById("startstpBtn").innerHTML='<i class="fa-solid fa-pause" id="pause"></i>'
        timerStatus="started"
    }else{
        window.clearInterval(timerInterval);
        document.getElementById("startstpBtn").innerHTML='<i class="fa-solid fa-play" id="play"></i>'
        timerStatus='stopped'
    }
})
reset.addEventListener("click",function(){
    window.clearInterval(timerInterval);
     seconds=0;
     minutes=0;
     hours=0;
     document.getElementById("timer").innerText="00:00:00";
     document.getElementById("startstpBtn").innerHTML='<i class="fa-solid fa-play" id="play"></i>';
        timerStatus='stopped';
})