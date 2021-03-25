//global constants
//const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const guessTime = 30;

//Global variables
//var pattern = [2,2,4,3,2,1,2,4];
var clueHoldTime = 1000;
var randomPattern;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var strikeCounter = 3;
var timerInterval;
var timerCount;
document.getElementById("timer-text").textContent = 0;
document.getElementById("strike-counter").textContent = strikeCounter;

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  strikeCounter = 3;
  clueHoldTime = 1000;
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  randomPattern = generatePattern();
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  clearInterval(timerInterval);
  document.getElementById("strike-counter").textContent = 3;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 550, 
  6: 650
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  let delay = nextClueWaitTime; //set delay to initial wait time
  guessCounter = 0;
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + randomPattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,randomPattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime -= 25;
    console.log(clueHoldTime);
    //Implementation of the timer feature
    clearInterval(timerInterval);
    timerCount = guessTime;
    timerInterval = setInterval(function () {
      timerCount--;
      document.getElementById("timer-text").textContent = timerCount;
      if (timerCount == 0) {
        stopGame();
        clearInterval(timerInterval);
        alert("Game over. You ran out of time!");
      }
    }  , 1000);
    
    
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){     
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(randomPattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      clearInterval(timerInterval);    //When the correct numbers of buttons are pushed, timer resets. 
      document.getElementById("timer-text").textContent = guessTime;
      if(progress == randomPattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    strikeCounter--;
    document.getElementById("strike-counter").textContent = strikeCounter;
    console.log("Strikes: " + strikeCounter);
    if (strikeCounter == 0) {
      clearInterval(timerInterval);
      document.getElementById("timer-text").textContent = 0;
      loseGame();
    }
  }
}

function generatePattern() {
  var x;
  var randomPattern = [0,0,0,0,0,0,0,0]; 
  for (x = 0; x < 8; x++) {
    randomPattern[x] = Math.floor(Math.random() * 6) + 1;
  }
  console.log(randomPattern);
  return randomPattern;
}
