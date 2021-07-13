import React, { useState, useEffect, useRef } from 'react';

export default function Timer({chars, setWords, words, testQuote, setTestQuote, isCorrect}) {

  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const [wpm, setWpm] = useState(0);
  const countRef = useRef(null)

  useEffect(() => {
    if(chars && testQuote && words) {
      if(isActive === false) {
        handleStart();
      } else if(isActive === true && chars === testQuote.length) {
        handlePause();
      }
    }
  }, [chars, isActive, testQuote, words])

  const wordsPerMin = () => {
    let wpm = (words / timer) * 60
    setWpm(wpm);
  }

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(false)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(true);
    wordsPerMin();
    isCorrect();
    console.log(testQuote.length);
  }

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(true);
    setTimer(0);
    setWords(0);
    setTestQuote(null);
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return(
    <div>
      <h1>Timer</h1>
      <div className='stopwatch-card'>
        <p>{formatTime()}</p>
        <div className='buttons'>
          <button onClick={handleReset} disabled={!isActive}>Reset</button>
        </div>
      </div>
      <div>
        <h3>Word Count:</h3>
        {(words) ?
          <p>{words.split(" ").length}</p>
        : 0
        }
      </div>
      {(wpm) ?
          <div>
            <h3>Words/min</h3>
            <p>{wpm}</p>
          </div>
        :
        null
        }
    </div>
  )
}