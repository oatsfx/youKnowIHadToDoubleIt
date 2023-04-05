import React, { useState, useEffect } from 'react';
import './App.css';

const flavorTexts = [
  "double (dou-ble), verb: become twice as much or as many",
  "created from the coping mechanism: double it and give it to the next person",
  "you know i had to double ittttt",
  "created from non-smelly code"
];

const stringIndex = Math.floor(Math.random() * flavorTexts.length);

function App(){
  const [double, setDouble] = useState(0);

  document.title = `you know i had to double it`;

  return (
    <div className="app">
      <div className="head">
        <h1>youknowihadtodoubleit.com</h1>
        <em>{flavorTexts[stringIndex]}</em>
      </div>
      <div className="body">
        <p>Times doubled: {double}</p>
        {
          double > 10 ? <em>The website will start to lag. If you can load the site still, congrats.</em> : <></>
        }
        <div className="button" onClick={() => setDouble(double + 1)}>
          <h2>Double It</h2>
        </div>
        {
          [...Array(Math.pow(2, double))].map(() => (
            <h1 className="comic-sans">you know I had to double it</h1>
          ))
        }
      </div>
    </div>
  );
}

export default App;