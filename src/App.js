import './App.css';
import { useState } from 'react';

import Header from './components/Header.component';
import Input from './components/Input.component';
import Status from './components/Status.component';
import quotes from './data/Quotes.data.json';

function App() {

  const [words, setWords] = useState(0);
  const [testQuote, setTestQuote] = useState(null);
  const [time, setTime] = useState(0.0);
  const [timerOn, setTimerOn] = useState(false);

  const handleInput = (e) => {
    const input = e.target.value;
    const count = input.split(" ").length;
    setWords(count);
  }

  return (
    <div className="container">
      <div className="flex-1">
        <Header 
          quotes={quotes}
          setTestQuote={setTestQuote}
          testQuote={testQuote}
        />
        <Input 
          handleInput={handleInput}
        />
      </div>
      <div className="flex-2">
        <Status 
          words={words}
          time={time}
          timerOn={timerOn}
        />
      </div>
    </div>
  );
}

export default App;
