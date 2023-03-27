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
sound
}){
  buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countDown()
    sound.pressButton()
  })
  buttonPause.addEventListener('click', ()=> {
    controls.pause()
    timer.hold()
  })
  buttonStop.addEventListener('click', () => {
    timer.reset()
    controls.reset()
    sound.pressButton()
  })
  buttonSoundOn.addEventListener('click', () => {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.play()
  })
  buttonSoundOff.addEventListener('click', () => {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.pause()
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