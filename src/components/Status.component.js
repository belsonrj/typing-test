import React from 'react';
import Timer from './Timer.component';

export default function Status({chars, words, setWords, testQuote, setTestQuote, isCorrect, errors}) {
  return(
    <div className="status">
      <h3>Status</h3>
      <p>Choose a Quote</p>
      <p>Start typing sample text to begin test</p>
      <Timer 
        chars={chars}
        setWords={setWords}
        words={words}
        testQuote={testQuote}
        setTestQuote={setTestQuote}
        isCorrect={isCorrect}
      />
      {(errors) ?
      <div>
        <h3>Error Percentage</h3>
        <p>{errors}%</p>
      </div>
      : null
      }
    </div>
  )
}