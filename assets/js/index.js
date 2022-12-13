const time = document.querySelector('.time');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

let seconds = 0;
let temp;


function getSeconds (seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-Br',{
        timeZone:'UTC'
    })
};

function startTime () {
    temp = setInterval(function(){
        seconds++;
        time.innerHTML = getSeconds(seconds)
    },1000)
 };

 document.addEventListener('click',function(e){
    const el = e.target;

    if(el.classList.contains('start')) {
        startTime();
    }
    if(el.classList.contains('pause')) {
        clearInterval(temp);
    }
    if(el.classList.contains('reset')) {
        clearInterval(temp);
        time.innerHTML = "00:00:00";
        seconds = 0;

    }
 });

