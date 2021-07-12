import React from 'react';
import Timer from './Timer.component';

export default function Status({chars, words, setWords, testQuote}) {
  return(
    <div className="status">
      <h3>Status</h3>
      <p>Choose a Quote</p>
      <p>Start typing sample text to begin test</p>
      <Timer 
        chars={chars}
        setWords={setWords}
        testQuote={testQuote}
      />
      <div>
        <h3>Word Count:</h3>
        <p>{words}</p>
      </div>
    </div>
  )
}