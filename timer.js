const timer = document.getElementById('timer');

let hr = 00;
let min = 00;
let sec = 60;
let stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }

  
  
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
      
     if (sec != 0){ 
      sec -= 1; 
     }
     else{
       sec = 0;
     }
    reset();
    
    if (sec == 00) {
      if(min == 00){
        min = 00
      }
      else{
      min = min - 1;
      }
    }
    if (sec != 00) {
      sec = ''+ sec;
    }
    if (min < 10 || min == 2) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }
    

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 2000);
  }
}

function reset() {
    let temp = 0
    if(hr == 00 && min == 00 && sec == 01){
    while(temp == 0){
      temp = temp + 1;
      if(temp == 1){
       document.write('<a href="index.html"></a>');
       alert("Time's up. Page will refresh now gg.");
        window.location.reload();
      }
    }
    }
}