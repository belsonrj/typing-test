import React from 'react';
import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 5px 30px;
  border-radius: 8px;
  margin: 10px 0px;
  cursor: pointer;
`;

export default function Header({quotes, setTestQuote, testQuote}) {
  return(
    <div className="header">
      <h3>Typing Test</h3>
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