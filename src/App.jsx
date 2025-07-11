// ---------- App.jsx setup for the tutorial
function Square({ v }) {
  return <button className="square">{v}</button>
}
function Board() {
  return (
    <>
      <div className="board-row">
        <Square v='1'/>
        <Square v='2'/>
        <Square v='3'/>
      </div>
      <div className="board-row">
        <Square v='4'/>
        <Square v='5'/>
        <Square v='6'/>
      </div>
      <div className="board-row">
        <Square v='7'/>
        <Square v='8'/>
        <Square v='9'/>
      </div>
    </>
  )
}

export default function App() {
  return <Board />
}