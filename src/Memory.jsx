import React, { useState, useEffect } from 'react';
import './App.css';

import incorrectUrl from './sounds/incorrect.mp3';
import correctUrl from './sounds/correct.mp3';

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
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
  const [choices, setChoices] = useState([]);
  const [answer, setAnswer] = useState(0);

  const [correctPlaying, correctToggle] = useAudio(correctUrl);
  const [incorrectPlaying, incorrectToggle] = useAudio(incorrectUrl);

  document.title = `do you know your powers of 2?`;

  const handleChoice = async (index) => {
    if (index == answer){
      document.getElementById("result-display").innerHTML = "correct.";
      document.getElementById("result-display").classList.add('active');
      document.getElementById("number-display").classList.add('active');
      correctToggle();
      await timeout(150);
      document.getElementById("number-display").classList.remove('active');
    }
    else{
      document.getElementById("result-display").innerHTML = "[INCORRECT BUZZER NOISE]";
      document.getElementById("result-display").classList.add('inactive');
      document.getElementById("number-display").classList.add('inactive');
      incorrectToggle();
      await timeout(150);
      document.getElementById("number-display").classList.remove('inactive');
    }
    await timeout(1000);
    document.getElementById("result-display").classList.remove('active');
    document.getElementById("result-display").classList.remove('inactive');
    document.getElementById("result-display").innerHTML = "";
    await loadGame();
  }

  const loadGame = async () => {
    let newChoices = [];
    while (newChoices.length < 5){
      let random = Math.floor(Math.random() * 14);
      if (!newChoices.includes(random))
        newChoices[newChoices.length] = random;
    }
    setAnswer(Math.floor(Math.random() * 5));
    setChoices(newChoices);
  }

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }

  useEffect(() => {
    loadGame();
  }, []);

  return (
    <div className="app">
      <div className="body">
        <p>the powers of two, the number, not like a couple</p>
        <h1 className="comic-sans" id="number-display">{Math.pow(2, choices[answer]).toLocaleString("en-US")}</h1>
        <div class="button-container">
          {
            choices.map((choice, index) => (
              <div className="button" key={index} onClick={() => handleChoice(index)}>
                <h2>2<sup>{choice}</sup></h2>
              </div>
            ))
          }
        </div>
        <h2 className="comic-sans" id="result-display"></h2>
        
      </div>
    </div>
  );
}

export default App;