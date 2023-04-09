import React, { useState, useEffect } from 'react';

const Tile = ({ value, index }) => {
  if (value !== null){
    return (
      <div className={"game-tile"}>
        <span>{value}</span>
      </div>
    );
  }
  else{
    return (
      <div className={"game-tile empty"}>
        <span>{value}</span>
      </div>
    );
  }
};

const GameBoard2048 = () => {
  const [board1, setBoard1] = useState(Array(16).fill(null));
  const [board2, setBoard2] = useState(Array(16).fill(null));

  const [gameOver, setGameOver] = useState(false);

  const spawnTile = (board, amount) => {
    let spawns = 0;
    if (!board.includes(null)){
      console.log("game over");
      setGameOver(true);
      listener = null;
      return board;
    }
    while (spawns < amount){
      var random = Math.floor(Math.random() * board.length);
      if (board[random] === null){
        var valueRng = Math.random();
        if (valueRng > 0.9){
          board[random] = 4;
        }
        else{
          board[random] = 2;
        }
        spawns++;
      }
    }
    console.log(board);
    return board;
  }

  const handleLeft = (board) => {
    let oldBoard = [...board];

    for (let i = 0; i < 4; i++){
      for (let j = i*4; j < (i+1)*4; j++){
        if (board[j] === null){
          for (let k = j+1; k < (i+1)*4; k++){
            if (board[k] !== null){
              board[j] = board[k];
              board[k] = null;
              break;
            }
          }
        }
      }
    }

    for (let i = 0; i < 4; i++){
      for (let j = i*4; j < (i+1)*4; j++){
        if (board[j] === null){
          continue;
        }
        for (let k = j+1; k < (i+1)*4; k++){
          if (board[k] === null){
            continue;
          }

          if (board[j] === board[k]){
            board[j] = board[j]*2;
            board[k] = null;
            break;
          }
        }
      }
    }

    for (let i = 0; i < 4; i++){
      for (let j = i*4; j < (i+1)*4; j++){
        if (board[j] === null){
          for (let k = j+1; k < (i+1)*4; k++){
            if (board[k] !== null){
              board[j] = board[k];
              board[k] = null;
              break;
            }
          }
        }
      }
    }

    if (oldBoard.every((val, index) => val === board[index])){
      return oldBoard;
    }
    
    return spawnTile(board, 1);
  }

  const handleRight = (board) => {
    let oldBoard = [...board];

    for (let i = 0; i < 4; i++){
      for (let j = ((i+1)*4) - 1; j >= (i)*4; j--){
        if (board[j] === null){
          for (let k = j-1; k >= (i)*4; k--){
            if (board[k] !== null){
              board[j] = board[k];
              board[k] = null;
              break;
            }
          }
        }
      }
    }

    for (let i = 0; i < 4; i++){
      for (let j = ((i+1)*4) - 1; j >= (i)*4; j--){
        if (board[j] === null){
          continue;
        }
        for (let k = j-1; k >= (i)*4; k--){
          if (board[k] === null){
            continue;
          }

          if (board[j] === board[k]){
            board[j] = board[j]*2;
            board[k] = null;
            break;
          }
        }
      }
    }

    for (let i = 0; i < 4; i++){
      for (let j = ((i+1)*4) - 1; j >= (i)*4; j--){
        if (board[j] === null){
          for (let k = j-1; k >= (i)*4; k--){
            if (board[k] !== null){
              board[j] = board[k];
              board[k] = null;
              break;
            }
          }
        }
      }
    }

    if (oldBoard.every((val, index) => val === board[index])){
      return oldBoard;
    }

    return spawnTile(board, 1);
  }

  const handleUp = (board) => {
    let oldBoard = [...board];

    for (let i = 0; i < 4; i++){
      for (let j = i; j < i+13; j = j + 4){
        if (board[j] === null){
          for (let k = j+4; k < i+13; k = k + 4){
            if (board[k] !== null){
              board[j] = board[k];
              board[k] = null;
              break;
            }
          }
        }
      }
    }

    for (let i = 0; i < 4; i++){
      for (let j = i; j < i+13; j = j + 4){
        if (board[j] === null){
          continue;
        }
        for (let k = j+4; k < i+13; k = k + 4){
          if (board[k] === null){
            continue;
          }

          if (board[j] === board[k]){
            board[j] = board[j]*2;
            board[k] = null;
            break;
          }
        }
      }
    }

    for (let i = 0; i < 4; i++){
      for (let j = i; j < i+13; j = j + 4){
        if (board[j] === null){
          for (let k = j+4; k < i+13; k = k + 4){
            if (board[k] !== null){
              board[j] = board[k];
              board[k] = null;
              break;
            }
          }
        }
      }
    }

    if (oldBoard.every((val, index) => val === board[index])){
      return oldBoard;
    }
    
    return spawnTile(board, 1);
  }

  const handleDown = (board) => {
    let oldBoard = [...board]; 

    for (let i = 0; i < 4; i++){
      for (let j = i+12; j >= i; j = j - 4){
        if (board[j] === null){
          for (let k = j-4; k >= i; k = k - 4){
            if (board[k] !== null){
              board[j] = board[k];
              board[k] = null;
              break;
            }
          }
        }
      }
    }

    for (let i = 0; i < 4; i++){
      for (let j = i+12; j >= i; j = j - 4){
        if (board[j] === null){
          continue;
        }
        for (let k = j-4; k >= i; k = k - 4){
          if (board[k] === null){
            continue;
          }

          if (board[j] === board[k]){
            board[j] = board[j]*2;
            board[k] = null;
            break;
          }
        }
      }
    }

    for (let i = 0; i < 4; i++){
      for (let j = i+12; j >= i; j = j - 4){
        if (board[j] === null){
          for (let k = j-4; k >= i; k = k - 4){
            if (board[k] !== null){
              board[j] = board[k];
              board[k] = null;
              break;
            }
          }
        }
      }
    }

    if (oldBoard.every((val, index) => val === board[index])){
      return oldBoard;
    }

    return spawnTile(board, 1);
  }

  const handleKeyPress = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        setBoard1((prevBoard) => handleLeft([...prevBoard])); 
        setBoard2((prevBoard) => handleLeft([...prevBoard])); 
        break;
      case 'ArrowRight':
        setBoard1((prevBoard) => handleRight([...prevBoard]));
        setBoard2((prevBoard) => handleRight([...prevBoard]));
        break;
      case 'ArrowUp':
        setBoard1((prevBoard) => handleUp([...prevBoard]));
        setBoard2((prevBoard) => handleUp([...prevBoard]));
        break;
      case 'ArrowDown':
        setBoard1((prevBoard) => handleDown([...prevBoard]));
        setBoard2((prevBoard) => handleDown([...prevBoard]));
        break;
    }
  }
  let listener;
  useEffect(() => {
    setBoard1(spawnTile(Array(16).fill(null), 2));
    setBoard2(spawnTile(Array(16).fill(null), 2));
    listener = document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.addEventListener('keydown', handleKeyPress);
    }
  }, []);

  const resetBoards = () => {
    setBoard1(spawnTile(Array(16).fill(null), 2));
    setBoard2(spawnTile(Array(16).fill(null), 2));
  }

  const RenderGrid = () => {
    return <div className="grid">
      {Array(16).fill(null).map((tile, index) => (
        <Tile key={index} value={tile} index={index} />
      ))}
    </div>
  }

  return (
    <>
      <h3 style={{textAlign: "center"}}>no animations head ass</h3>
      <h3 style={{textAlign: "center"}}>this definitely doesn't work right</h3>
      <p style={{textAlign: "center"}}>Why are there 2 boards? <em>Because you know we hadda double itttttt</em></p>
      {gameOver === true ? <h1>GAME OVER!</h1> : <></>}
      <div className="board">
        {board1.map((tile, index) => (
          <Tile key={index} value={tile} index={index} />
        ))}
      </div>
      <div className="board">
        {board2.map((tile, index) => (
          <Tile key={index} value={tile} index={index} />
        ))}
      </div>
      <div className="button" onClick={(e) => resetBoards()}>Reset</div>
    </>
    
  );
};

export default GameBoard2048;