import React from 'react';

export default function Input({handleInput}) {

  return(
    <div className="input">
      <h3>Enter Text Here</h3>
      <textarea className="input-box" 
        onChange={ handleInput }
        placeholder="Timer will begin once you start typing..."
      />
    </div>
  )
}