let buttonPlay = document.querySelector('.btnPlay')
let buttonSet = document.querySelector('.btnSet')
let buttonPause = document.querySelector('.btnPause')
let buttonStop = document.querySelector('.btnStop')
let buttonSoundOn = document.querySelector('.btnSoundOn')
let buttonSoundOff = document.querySelector('.btnSoundOff')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let TimertimeOut;
let setMinutes;
function resetControls(){
  buttonPlay.classList.remove('hide')
  buttonSet.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonStop.classList.add('hide')
}
function changeTimerDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}
function updateMinutes(setMinutes){
  minutesDisplay.textContent = String(setMinutes).padStart(2, "0")
}
function countDown(){
  TimertimeOut = setTimeout(function(){
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    if(minutes <=0 && seconds <=0){
      resetControls()
      updateMinutes(setMinutes)
      return
    }

    if(seconds <= 0 ){
      seconds = 2
      --minutes
    }
    changeTimerDisplay(minutes, seconds -1)
    countDown()
  }, 1000)
}
buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide')
  buttonSet.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonStop.classList.remove('hide')
  countDown()
})
buttonPause.addEventListener('click', ()=> {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearInterval(TimertimeOut)
})
buttonStop.addEventListener('click', () => {
  resetControls()
})
buttonSoundOn.addEventListener('click', () => {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})
buttonSoundOff.addEventListener('click', () => {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})
buttonSet.addEventListener("click", () => {
  setMinutes = Number(prompt('digite um temporizador'))
  if(!setMinutes){
    return
  }
  minutesDisplay.textContent = String(setMinutes).padStart(2, "0")
})