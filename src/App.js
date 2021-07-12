import './App.css';
import { useState } from 'react';

import Header from './components/Header.component';
import Input from './components/Input.component';
import Status from './components/Status.component';
import quotes from './data/Quotes.data.json';

function App() {

  const [words, setWords] = useState(0);
  const [chars, setChars] = useState(0);
  const [testQuote, setTestQuote] = useState(null);

  const handleInput = (e) => {
    const input = e.target.value;
    const char = input.length
    const count = input.split(" ").length;
    setWords(count);
    setChars(char);
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
          chars={chars}
          setWords={setWords}
          testQuote={testQuote}
        />
      </div>
    </div>
  );
}

export default App;
