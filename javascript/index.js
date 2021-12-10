const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  this.intervalid = setinterval (()=>{

    printMinutes();
    printSeconds()

  },1000)
  

}

function printMinutes() {
  // ... your code goes here
  const btn = chronometer.computeTwoDigitNumbers(chronometer.getMinutes);
  minDecElement.textContent=minutes[0];
  minUniElement.textContent=minutes[1];

}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  
}

function setStopBtn() {
  btnLeftElement.classList.remove("start")
  btnLeftElement.classList.add("stop")
  btnLeftElement.textContent="STOP";
}


function setSplitBtn() {
  btnRightElement.classList.remove("reset")
  btnRightElement.classList.add("split")
  btnRightElement.textContent="SPLIT";
}

function setStartBtn() {
  btnLeftElement.classList.remove("stop")
  btnLeftElement.classList.add("start")
  btnLeftElement.textContent="START";
}

function setResetBtn() {
  btnRightElement.classList.remove("split")
  btnRightElement.classList.add("reset")
  btnRightElement.textContent="RESET";
  
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains('start')){ 
    setSplitBtn();
    setStopBtn();
    
  }
  else  {
    setResetBtn();
    setStartBtn();
    
  }
  
});

// Reset/Split Button
//btnRightElement.addEventListener('click', () => {
  
  

//});
