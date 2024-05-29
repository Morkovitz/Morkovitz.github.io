let timeLeft;
let element = document.getElementById("some-div");
let rstbtn = document.getElementById("reset");
let timerId;
let stopped = false;
let timeForWork = false;
let sessCount=document.getElementById("sessCount");


function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function countdown() {
  if (timeLeft > 0) {
    timeLeft--;
    element.innerHTML = formatTime(timeLeft);
  } else {
    clearInterval(timerId); 
    if (timeForWork) {
      reset(); 
    } else {
      breik(); 
    }
  }
}

function stop() {
  if (stopped) {
    timerId = setInterval(countdown, 1000); 
    document.getElementById("stop").innerHTML = "STOP";
  } else {
    clearInterval(timerId); 
    document.getElementById("stop").innerHTML = "RESUME";
  }
  stopped = !stopped;
}

function reset() {
  clearInterval(timerId); 
  timeLeft = 1500;
  timeForWork = false; 
  element.innerHTML = formatTime(timeLeft);
  timerId = setInterval(countdown, 1000); 
  console.log("RESET INITIATED");
  rstbtn.innerHTML = "RESET";
  sessCount.textContent = parseInt(sessCount.textContent) + 1;
}

function breik() {
  clearInterval(timerId); 
  timeLeft = 300;
  timeForWork = true; 
  element.innerHTML = formatTime(timeLeft);
  timerId = setInterval(countdown, 1000); 
  console.log("BREAK INITIATED");
  alert("time for break")
}
