import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Calculator from './Calculator';
import GameBoard2048 from './GameBoard2048';
import Memory from './Memory';
import FunFacts from './FunFacts';

import Header from './components/Header';

import './App.css';

import { Routes, Route, HashRouter, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

let disableAudio = false;

root.render(
  <>
    <HashRouter>
      <Header />
      <div className="app">
        <aside>
          <div className="side-container">
            <h2>Pages</h2>
            <hr></hr>
            <Link to={'/'}><div><p>Home</p></div></Link>
            <Link to={'/calculator'}><div><p>Calculator</p></div></Link>
            <Link to={'/memory'}><div><p>Memory</p></div></Link>
            <Link to={'/fun-facts'}><div><p>Fun Facts</p></div></Link>
          </div>
        </aside>
        <Routes>
          <Route path="" element={<App />} />
          <Route path="/calculator/" element={<Calculator />} />
          <Route path="/2048/" element={<GameBoard2048 />} />
          <Route path="/memory/" element={<Memory />} />
          <Route path="/fun-facts/" element={<FunFacts />} />
        </Routes>
      </div>
      <footer className="foot">
        <div className="credits">
          <br></br>
          <em>Created by</em><br></br>
          <a href="https://oatsfx.com/" target="_blank">Ryan Gore (OatsFX)</a><br></br>
          <a>Kristoffer Nikko Jarme</a><br></br>
          <a href="https://moosieth.github.io/" target="_blank">Mitchell Frazer (Moosieth)</a><br></br>
        </div>
      </footer>
    </HashRouter>
  </>
);

reportWebVitals();
