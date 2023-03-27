
export function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
})
{
  let TimertimeOut;
  let minutes = Number(minutesDisplay.textContent)
 
  function updateDisplay(newMinutes, seconds){
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  function updateMinutes(newMinutes){
    minutes = newMinutes
  }
  function reset(){
    updateDisplay(minutes, 0)
    clearInterval(TimertimeOut)
  }

  function countDown(){
    TimertimeOut = setTimeout(function(){
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
  
      if(minutes <=0 && seconds <=0){
        resetControls()
        reset()
        return
      }
  
      if(seconds <= 0 ){
        seconds = 2
        --minutes
      }
      updateDisplay(minutes, seconds -1)
      countDown()
    }, 1000)
  }
 
  function hold(){
    clearInterval(TimertimeOut)
  }
  return {
    updateDisplay,
    countDown,
    hold,
    reset,
    updateMinutes

  }
}