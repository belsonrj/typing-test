import './App.css';
import { useState } from 'react';

import Header from './components/Header.component';
import Input from './components/Input.component';
import Status from './components/Status.component';
import quotes from './data/Quotes.data.json';

function App() {

  const [words, setWords] = useState("");
  const [chars, setChars] = useState(0);
  const [testQuote, setTestQuote] = useState(null);
  const [errors, setErrors] = useState(null);

  const handleInput = (e) => {
    const input = e.target.value;
    const char = input.length
    setWords(input);
    setChars(char);
  }

  const isCorrect = (str1 = words, str2 = testQuote) => {
    var compareString = function(str1, str2) {
      var a1 = str1.split("");
      var a2 = str2.split("");
      var idx2 = 0;
      a1.forEach(function(val) {
          if (a2[idx2] === val) {
            a2.splice(idx2,1);
          } else {
              idx2 += 1;
          }
      });
      if (idx2 > 0) {
          a2.splice(idx2,a2.length);
      }
      return a2.join("");
    }

    if (str1.length < str2.length) {
      setErrors(compareString((str1, str2).length / testQuote.length) * 100);
      console.log(compareString(str1, str2))
    } else {
      setErrors(compareString((str2, str1).length / testQuote.length) * 100);
      console.log(compareString(str2, str1));
    }
  }

  return (
    <div className="container">
      <div className="flex-1">
        <Header 
          quotes={quotes}
          setTestQuote={setTestQuote}
          testQuote={testQuote}
        />
        {(testQuote) ?
          <Input 
            handleInput={handleInput}
          />
          : null
        }
      </div>
      <div className="flex-2">
        <Status 
          words={words}
          chars={chars}
          setWords={setWords}
          testQuote={testQuote}
          setTestQuote={setTestQuote}
          isCorrect={isCorrect}
          errors={errors}
        />
      </div>
    </div>
  );
}

export default App;
