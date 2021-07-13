import React from 'react';
import Timer from './Timer.component';

export default function Status({props}) {
  
  console.log(props.words);

  return(
    <div className="status">
      <h3>Status</h3>
      <p>Choose a Quote</p>
      <p>Start typing sample text to begin test</p>
      <Timer 
        props={props}
      />
      {(props.errors) ?
      <div>
        <h3>Error Percentage</h3>
        <p>{props.errors}%</p>
      </div>
      : null
      }
    </div>
  )
}