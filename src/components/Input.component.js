import React from 'react';
import { GoKeyboard } from "react-icons/go";

export default function Input({handleInput}) {

  return(
    <div className="input">
      <h3>Enter Text Here <GoKeyboard size="1.25rem"/></h3>
      <textarea className="input-box" 
        onChange={ handleInput }
        placeholder="Timer will begin once you start typing..."
      />
    </div>
  )
}