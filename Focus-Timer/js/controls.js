export function Controls({
buttonPlay,
buttonSet,
buttonPause,
buttonStop,
}){
function play(){
  buttonPlay.classList.add('hide')
  buttonSet.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonStop.classList.remove('hide')
}
function pause(){
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}
function reset(){
  buttonPlay.classList.remove('hide')
  buttonSet.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonStop.classList.add('hide')
}
 function getMinutes(){
    let newMinutes = Number(prompt(`Digite um valor no cronomêtro`))
    if(!newMinutes){
      return false
    }
    return newMinutes
  }
return {
  play,
  pause,
  reset,
  getMinutes,
}
}