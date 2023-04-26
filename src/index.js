import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Calculator from './Calculator';
import GameBoard2048 from './GameBoard2048';
import Memory from './Memory';

import './App.css';

import { Routes, Route, HashRouter, Link } from "react-router-dom";

const flavorTexts = [
  "double (dou-ble), verb: become twice as much or as many",
  "based on the coping mechanism: double it and give it to the next person",
  "you know i had to double ittttt",
  "created from non-smelly code",
  "balls are sore yeah",
  "created with the power of a 30-day scrum sprint",
  "it's joever",
  "we're so back",
  "let's fxxking joe",
  "you're being charged with second-degree shaboingery",
  "you've been corolla'd"
];

const stringIndex = Math.floor(Math.random() * flavorTexts.length);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HashRouter>
      <div className="navbar">
        <Link to={'/'}><div className="button"><h2>Home</h2></div></Link>
        <Link to={'/calculator/'}><div className="button"><h2>Calculator</h2></div></Link>
        <Link to={'/2048/'}><div className="button"><h2>2048</h2></div></Link>
        <Link to={'/memory/'}><div className="button"><h2>Memory</h2></div></Link>
      </div>
      <div className="head">
        <h1>youknowihadtodoubleit.com</h1>
        <em>{flavorTexts[stringIndex]}</em>
      </div>
      <Routes>
        <Route path="" element={<App />} />
        <Route path="/calculator/" element={<Calculator />} />
        <Route path="/2048/" element={<GameBoard2048 />} />
        <Route path="/memory/" element={<Memory />} />
      </Routes>
    </HashRouter>
  </>
);

reportWebVitals();
