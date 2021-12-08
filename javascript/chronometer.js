class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0 
    this.intervalId = null 
  }

  start(callback) {
    // ... your code goes here
    //console.log("wachwach");

    this.intervalId = setInterval(() => {

       if (typeof callback === 'function') callback()
       
       this.currentTime += 1

    },1000)
 

  }

  getMinutes() {
    // ... your code goes here

    return this.currentTime /60 | 0 ;
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60 ;

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return String(value).length ===2 ? String(value): '0' + value ;
  }

  stop() {
    // ... your code goes here
    clearInterval (this.intervalId) ;
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0 ;
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const secondes = this.computeTwoDigitNumber(this.getSeconds());
    return minutes + ':' + secondes ;
  }
  
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
