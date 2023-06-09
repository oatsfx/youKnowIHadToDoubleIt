import React, { useState, useEffect } from 'react';
import './App.css';

function Calculator() {
  const [value, setValue] = useState('');

  document.title = `double calculator`;

  const doubleIt = async (e) => {
    const re = /^[0-9\b]*$/;

    // if value is not blank, then test the regex
    let value = e.target.value;
    if (value === '' || re.test(value)) {
      if (!isNaN(2 * value)) {
        setValue(value);
        document.getElementById("double-text").classList.add('active');
        await timeout(150);
        document.getElementById("double-text").classList.remove('active');
      }
    }
  }

  function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
  }

  return (
    <div className="main">
      <div className="body">
        <div className="search">
          <input
            placeholder="Number"
            pattern="[0-9]*"
            id="value"
            value={value}
            onChange={doubleIt}
            autoComplete='off'
            maxLength={15}
          />
        </div>
        <div className="double-container" id="double-text">
          <h1 className="comic-sans">{value === '' ? "enter a number" : (value * 2).toLocaleString()}</h1>
        </div>
        {value === '' ? <></> : <p>because that's <b>{(value * 1).toLocaleString("en-US")}</b> doubled</p>}
        <br></br>
        {Number.isInteger(Math.log2(value)) ? <p>fun fact: <b>{(value * 1).toLocaleString("en-US")}</b> is a power of <b>2</b>... which makes <b>{(value * 2).toLocaleString("en-US")}</b>, also a power of <b>2</b></p> : <></>}
      </div>
    </div>
  );
}

export default Calculator;