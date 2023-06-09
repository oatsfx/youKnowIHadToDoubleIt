import React, { useState, useEffect } from 'react';
import './App.css';

import doubleItUrl from './sounds/doubleit.mp3';

const useAudio = () => {
  const [audio] = useState(new Audio(doubleItUrl));
  const [playing, setPlaying] = useState(false);

  const toggle = () => !playing ? setPlaying(!playing) : setPlaying(playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause(); audio.currentTime = 0;
    },
    [playing]
  );

  useEffect(() => {
    audio.volume = 0.3;
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

function App(){
  const [double, setDouble] = useState(0);

  const [playing, toggle] = useAudio();

  document.title = `you know i had to double it`;

  const doubleIt = async () => {
    setDouble(double + 1);
    document.getElementById("double-text").classList.add('active');
    toggle();
    await timeout(150);
    document.getElementById("double-text").classList.remove('active');
  }

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }

  return (
    <div className="main">
      <div className="body">
        <p>doubled <b>{double.toLocaleString()}</b> times for a total of <b>{Math.pow(2, double).toLocaleString()}</b></p>
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