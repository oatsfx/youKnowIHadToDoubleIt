import React, { useState, useEffect } from 'react';
import './App.css';

function FunFacts() {
  const [value, setValue] = useState(0);

  const funFactList = [
    "2 is the only even prime number",
    "2 is the smallest prime number",
    "1 plus 1 is 2",
    "base 2 is binary, and is important to computer science",
    "the element with the atomic number of 2 is Helium",
    "2 follows 1 and precedes 3",
    "the 2nd ever state of the USA is Pennsylvania",
    "if a number is divisible by 2, it denotes that it is even"
  ];

  document.title = `fun facts about the number 2`;

  const changeFact = async (e) => {
    if (funFactList.length > 1){
      let newNum = Math.floor(Math.random() * funFactList.length);
      while (newNum == value){
        newNum = Math.floor(Math.random() * funFactList.length);
      }
      setValue(newNum);
    }
  }

  useEffect(() => {
    changeFact();
  }, []);

  return (
    <div className="main">
      <div className="body">
        <h1 className="comic-sans">{funFactList[value]}</h1>
        <div className="button" onClick={() => changeFact()}>
          <h2>I want a new fun fact, please</h2>
        </div>
      </div>
    </div>
  );
}

export default FunFacts;