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

  document.title = `double calculator`;

  const doubleIt = async () => {
    setDouble(double + 1);
    let ogColor = document.getElementById("double-text").style.color;
    document.getElementById("double-text").classList.add('active');
    await timeout(150);
    document.getElementById("double-text").classList.remove('active');
  }

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

  return (
    <div className="app">
      <div className="head">
        <h1>youknowihadtodoubleit.com</h1>
        <em>{flavorTexts[stringIndex]}</em>
      </div>
      <div className="body">
        <p>Times doubled: {Math.pow(2, double)}</p>
        {
          double > 10 ? <em>The website will start to lag. If you can load the site still, congrats.</em> : <></>
        }
        <div className="button" onClick={() => doubleIt()}>
          <h2>Double It</h2>
        </div>
        <div className="double-container" id="double-text">
          {
            [...Array(Math.pow(2, double))].map(() => (
              <h1 className="comic-sans">you know I had to double it</h1>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;