import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter, Link } from "react-router-dom";
import '../App.css';

function Header() {
  const [value, setValue] = useState('');

  document.title = `double calculator`;

  const flavorTexts = [
    "double (dou-ble), verb: become twice as much or as many",
    "based on the coping mechanism: double it and give it to the next person",
    "you know i had to double ittttt",
    "created from non-smelly code",
    "balls are sore yeah",
    "created with the power of a 30-day scrum sprint",
    "it's joever",
    "it's joever (real)",
    "we're joe back",
    "let's fucking joe",
    "you're being charged with second-degree shaboingery",
    "you've been corolla'd",
    "barbenheimer",
    "she oppen on my heimer till i barbie",
    "joe my goodness!",
    "NEVER LOSE JOPE!"
  ];
  
  const [flavorIndex, setFlavorIndex] = useState(0);

  const changeIndex = () => {
    let newNum = Math.floor(Math.random() * flavorTexts.length);
    while (newNum == flavorIndex){
      newNum = Math.floor(Math.random() * flavorTexts.length);
    }
    setFlavorIndex(newNum);
  }

  useEffect(() => {
    changeIndex();
  }, []);

  return (
    <header className="head">
      <Link to={'/'}><h1><span className="gradient-spin">youknowihadtodoubleit.com</span></h1></Link>
      <em><span className="clickable-text" onClick={changeIndex}>{flavorTexts[flavorIndex]}</span></em>
    </header>
  );
}

export default Header;