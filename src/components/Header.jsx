import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter, Link } from "react-router-dom";
import '../App.css';

import { Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} disableInteractive />
))`
  & .MuiTooltip-tooltip {
    color: #f2fffe;
    font-family: var(--font-display);
    letter-spacing: 0.25px;
    outline: 2px solid #fff5;
    background: #0005;
    text-align: center;
    text-shadow: 0px 2px 2px #000;
  }
`;

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
      <h1><span className="gradient-spin"><Link to={'/'}>youknowihadtodoubleit.com</Link></span></h1>
      <em>
        <StyledTooltip title={"Click to change text."} placement="right">
          <span className="clickable-text" onClick={changeIndex}>{flavorTexts[flavorIndex]}</span>
        </StyledTooltip>
      </em>
      
      
    </header>
  );
}

export default Header;