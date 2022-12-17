let hr = min = sec = ms= '0' + 0,
startTimer;
// function startButton(){
//     document.getElementById('ex').style.opacity = '0.8';
//     startTimer = setInterval(() =>{
//         ms++
//     }, 100) 
//     let hourBtn = document.getElementsByClassName('HourBtn')[0].innerHTML;
//     hourBtn =ms
// }

const startBtn = document.querySelector(".start")
const stopBtn = document.querySelector(".stop")
const resetBtn = document.querySelector(".reset")

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start(){
    startBtn.classList.add("active");
    startBtn.classList.remove("stopActive");
    startTimer = setInterval(() =>{
    ms++
    ms = ms < 10 ? '0' + ms : ms;
    if(ms == 100){
        sec++
        sec = sec < 10 ? '0' + sec : sec;
        ms = '0' + 0;
    }
    if(sec == 60){
        min++
        min = min < 10 ? '0' + min : min;
        sec = '0' + 0;
    }
    if(min == 60){
        hr++
        hr = hr < 10 ? '0' + hr : hr;
        min = '0' + 0;
    }
    putValue()
    }, 100);
}
function stop(){
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    clearInterval(startTimer)
}
function reset(){
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer)
    let hr = min = sec = ms= '0' + 0;
    putValue()

}
function putValue(){
    document.getElementsByClassName('mlsec')[0].innerHTML = ms;
    document.getElementsByClassName('sec')[0].innerHTML = sec;
    document.getElementsByClassName('Min')[0].innerHTML = min;
    // console.log(document.querySelector('hour').innerHTML);
}


