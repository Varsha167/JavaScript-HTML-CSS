function setDate() {
  const now = new Date()
  const secondsHand = document.querySelector('.second-hand')
  const minutesHand = document.querySelector('.min-hand')
  const hourhand = document.querySelector('.hour-hand')
  const sec = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()
  const secDegrees = ((sec/60)*360)+90
  const minDegrees = ((minutes/60)*360) + 90 // "+90" because in css to start from 12 o clock we transform by 90.
  const hourDegrees = ((hours/12)*360) + 90

  secondsHand.style.transform = `rotate(${secDegrees}deg)`
  minutesHand.style.transform = `rotate(${minDegrees}deg)`
  hourhand.style.transform = `rotate(${hourDegrees}deg)`
  //console.log(sec)
  console.log(minutes)

}

setInterval(setDate,1000)
