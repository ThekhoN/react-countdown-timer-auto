import React from 'react'

const TimerComponent = ({timerState}) => {
  const {timeRemaining} = timerState;
  return (<div id={timerState.id} className='genericTimerContainer'>
      <h2>React Countdown Timer #{timerState.id}</h2>
      <div className='timerRow'>
        <p><span>{timeRemaining.days}</span> days:</p>
        <p><span>{timeRemaining.hours}</span> hr:</p>
        <p><span>{timeRemaining.minutes}</span> min:</p>
        <p><span>{timeRemaining.seconds}</span> sec</p>
      </div>
   </div>)
}

export default TimerComponent
