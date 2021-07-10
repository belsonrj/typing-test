import React from 'react';
import Timer from './Timer.component';

export default function Status({words, time, timerOn}) {
  return(
    <div className="status">
      <h3>Status</h3>
      <p>
        Start typing sample text to begin test
      </p>
      <Timer 
        time={time}
        timerOn={timerOn}
      />
      <div>
        <h3>Word Count:</h3>
        <p>{words}</p>
      </div>
    </div>
  )
}