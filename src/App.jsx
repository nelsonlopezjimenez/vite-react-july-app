// ---------- App.jsx setup for the tutorial

import { useState } from "react";
import './App.css'

function Square({value, handleClick}) {
  const onSquareClick = handleClick;
  // const [value, setValue] = useState(null);
  // --------- handleClick implementation was here but parent was not aware of it
  // --------- now its reference need to be passed as a prop from Board
  
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
    // <button className="square" >{value}</button>
  )
}
function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    xIsNext ? nextSquares[i] = 'X' : nextSquares[i] = 'O'
    console.log("clicked", i);
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]}  handleClick={() => handleClick(0)}/>
        <Square value={squares[1]}  handleClick={() => handleClick(1)}/>
        <Square value={squares[2]}  handleClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]}  handleClick={() =>handleClick(3)}/>
        <Square value={squares[4]}  handleClick={() =>handleClick(4)}/>
        <Square value={squares[5]}  handleClick={() =>handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]}  handleClick={() => handleClick(6)}/>
        <Square value={squares[7]}  handleClick={() => handleClick(7)}/>
        <Square value={squares[8]}  handleClick={() => handleClick(8)}/>
          {/* instead of value={squares[0] onSquareClick={handleClick(0)}} which leads to infinite loop */}
      </div>
    </>
  )
}

export default function App() {
  return <Board />
}

//**
// Closures: Lexical scoping: init(){var name; displayName() {console.log(name)} displayName()} init()
// outer function init
// inner function displayName available only within init, it can reference its sorrounding state (lexical environment)
// 
//  */