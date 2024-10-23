let timer = document.querySelector("#timer");
let btnStart = document.querySelector("#start-button");
let btnStop = document.querySelector("#stop-button");
let btnReset = document.querySelector("#reset-button");
let timeMinute = 0;
let timeSecond = 0;
btnStart.addEventListener("click",(event)=>{
    btnStart.disabled = true;
    btnStop.disabled = false;
    btnReset.disabled = true;
    var _tick = setInterval(function(){
        timeSecond++;
        if(timeSecond == 59){
            timeSecond = 0;
            timeMinute++;
        }
        let san = timeSecond < 10 ? "0" + timeSecond : timeSecond
        let min = timeMinute < 10 ? "0" + timeMinute : timeMinute
        timer.innerHTML = min + ":" + san;
    },10)
    btnReset.addEventListener("click",(event)=>{
        timeMinute = 0;
        timeSecond = 0;
        timer.innerHTML = "00:00";
        btnReset.disabled = true;
        clearInterval(_tick)
    })
    btnStop.addEventListener("click",(event)=>{
        btnStop.disabled = true;
        btnReset.disabled = false;
        btnStart.disabled = false;
        clearInterval(_tick)
    })
})