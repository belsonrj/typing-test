import React from 'react';
import styled from "styled-components";

//styled button using styled-components
const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 5px 30px;
  border: outset 2px;
  border-radius: 8px;
  margin: 10px 0px;
  cursor: pointer;
`;

export default function Header({quotes, setTestQuote, testQuote}) {

  //map function to generate buttons for each quote. This makes it easy to simply add/remove new quotes into json file
  //button sets testQuote state
  return(
    <div className="header">
      <h3>Typing Test - Challenge Your Typing Skills</h3>
      {quotes.quotes.map(quote => (
                <Button 
                  color='primary'
                  onClick={() => setTestQuote(quote.quote)}
                >
                  {quote.name}: {quote.wordCount} words
                </Button>
            ))}
      <p>{testQuote}</p>
    </div>
  )
}