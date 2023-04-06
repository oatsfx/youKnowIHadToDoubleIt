import React, { useState, useEffect } from 'react';
import './App.css';

function App(){
  const [double, setDouble] = useState(0);

  document.title = `you know i had to double it`;

  const doubleIt = async () => {
    setDouble(double + 1);
    document.getElementById("double-text").classList.add('active');
    await timeout(150);
    document.getElementById("double-text").classList.remove('active');
  }

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

  return (
    <div className="app">
      <div className="body">
        <p>doubled <b>{double}</b> times for a total of <b>{Math.pow(2, double)}</b></p>
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