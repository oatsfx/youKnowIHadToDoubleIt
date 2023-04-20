import React, { useState, useEffect } from 'react';
import './App.css';

function App(){
  const [choices, setChoices] = useState([]);
  const [answer, setAnswer] = useState(0);

  document.title = `do you know your powers of 2?`;

  const handleChoice = async (index) => {
    if (index == answer){
      document.getElementById("number-display").innerHTML = "correct.";
      document.getElementById("number-display").classList.add('active');
      await timeout(150);
      document.getElementById("number-display").classList.remove('active');
    }
    else{
      document.getElementById("number-display").innerHTML = "[INCORRECT BUZZER NOISE]";
      document.getElementById("number-display").classList.add('inactive');
      await timeout(150);
      document.getElementById("number-display").classList.remove('inactive');
    }
    await timeout(1000);
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
        <p>the powers of two, the number, not like a couple</p>
      </div>
    </div>
  );
}

export default App;