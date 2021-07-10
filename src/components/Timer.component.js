import React from 'react';

export default function Timer({time, timerOn}) {

  return(
    <div>
      <h1>Timer</h1>
      <span className={`timer-display is-size-1 ${timerOn ? 'pulse' : ''} `}>
          { time } seconds
        </span>
    </div>
  )
}