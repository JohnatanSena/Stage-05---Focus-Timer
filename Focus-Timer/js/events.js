import {
  buttonPlay,
  buttonSet,
  buttonPause,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"
export function Events({
controls,
timer,
}){
  buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countDown()
  })
  buttonPause.addEventListener('click', ()=> {
    controls.pause()
    timer.hold()
  })
  buttonStop.addEventListener('click', () => {
    timer.reset()
    controls.reset()
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
    let newMinutes = controls.getMinutes()
    if(!newMinutes){
      return
    }
  
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
    
  })
}