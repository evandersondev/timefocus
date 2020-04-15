const time = document.querySelector('.time')
const btnStart = document.querySelector('#btn-start')
let pomodoro = document.querySelector('#pomodoro')
let short = document.querySelector('#short')
let long = document.querySelector('#long')
let beep = document.querySelector('#beep')
let minutes = 25
let seconds = '00'
let tmp

pomodoro.style.background = '#3742fa'
pomodoro.style.borderColor = '#3742fa'

time.innerHTML = minutes + ':' + seconds

btnStart.addEventListener('click', () => {
  if (btnStart.innerHTML === 'Start') {
    btnStart.innerHTML = 'Stop'
    seconds = seconds + 1
    start()
  } else if (btnStart.innerHTML === 'Stop') {
    btnStart.innerHTML = 'Start'
    stop()
  }
})

const timeLogic = () => {
  minutes = parseInt(minutes)
  seconds = parseInt(seconds)
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (minutes - 1 < 0 && seconds - 1 == 0) {
    minutes = '00'
    seconds = '00'
    stop()
    beep.volume = 0.3
    beep.play()
    setTimeout('beep.play()', 1800)
    btnStart.innerHTML = 'Start'

    time.innerText = minutes + ':' + seconds
    document.title = 'Finished'
  }

  if (seconds - 1 >= 0) {
    seconds = seconds - 1

    if (seconds < 10) {
      seconds = '0' + seconds
    }

    if (seconds < 1) {
      minutes = minutes - 1
      seconds = 59

      if (minutes < 10) {
        minutes = '0' + minutes
      }
    }

    time.innerText = minutes + ':' + seconds
    document.title = 'Time Focus - ' + minutes + ':' + seconds
  }
}

const start = () => {
  tmp = setInterval(timeLogic, 1000)
}

const stop = () => {
  clearInterval(tmp)
}

pomodoro.addEventListener('click', () => {
  minutes = 25
  seconds = '00'

  time.innerHTML = minutes + ':' + seconds
  document.title = 'Time Focus - ' + minutes + ':' + seconds
  btnStart.innerHTML = 'Start'
  stop()

  pomodoro.style.background = '#3742fa'
  pomodoro.style.borderColor = '#3742fa'
  short.removeAttribute('style')
  long.removeAttribute('style')
})

short.addEventListener('click', () => {
  minutes = '05'
  seconds = '00'

  time.innerHTML = minutes + ':' + seconds
  btnStart.innerHTML = 'Start'
  stop()

  short.style.background = '#3742fa'
  short.style.borderColor = '#3742fa'
  pomodoro.removeAttribute('style')
  long.removeAttribute('style')
})

long.addEventListener('click', () => {
  minutes = 10
  seconds = '00'

  time.innerHTML = minutes + ':' + seconds
  btnStart.innerHTML = 'Start'
  stop()

  long.style.background = '#3742fa'
  long.style.borderColor = '#3742fa'
  short.removeAttribute('style')
  pomodoro.removeAttribute('style')
})
