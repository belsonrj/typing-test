import './App.css';
import { useState } from 'react';

import Header from './components/Header.component';
import Input from './components/Input.component';
import Status from './components/Status.component';
import quotes from './data/Quotes.data.json';

export default function App() {

  //useState Hook to keep track of state
  const [words, setWords] = useState("");
  const [chars, setChars] = useState(0);
  const [testQuote, setTestQuote] = useState(null);
  const [errors, setErrors] = useState(null);

  //input method to handle updates in input field, keep track of character length, and set new state
  const handleInput = (e) => {
    const input = e.target.value;
    const char = input.length
    setWords(input);
    setChars(char);
  }

  //find differences - user input vs chosen quote
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
      setErrors(compareString(str1, str2).length / testQuote.length * 100);
      console.log(compareString(str1, str2))
    } else {
      setErrors(compareString(str2, str1).length / testQuote.length * 100);
      console.log(compareString(str2, str1));
    }
  }

  //consolidate props to pass to child component
  const props = {
    words,
    chars,
    setWords,
    testQuote,
    setTestQuote,
    errors,
    isCorrect
  }

  //added ternary operator to hide input component until quote chosen
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
          props={props}
        />
      </div>
    </div>
  );
}
