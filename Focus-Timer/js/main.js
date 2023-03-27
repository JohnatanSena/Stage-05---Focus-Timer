import { Timer } from "./timer.js"
import { Controls } from "./controls.js"
import { Events } from "./events.js"
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

const controls = Controls({
  buttonPlay,
  buttonSet,
  buttonPause,
  buttonStop,
})
const timer =  Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

Events({
  controls,
  timer,
})
