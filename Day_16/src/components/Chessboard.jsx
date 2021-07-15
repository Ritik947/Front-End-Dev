import Block from "./Block";

function Chessboard() {
  let blocks = [];
  for (let i = 0; i <= 63; i++) {
    blocks.push(
      <Block
        key={i}
        className={(i + Math.floor(i / 8)) % 2 === 0 ? "black" : "white"}
      />
    );
  }
  console.log(blocks);
  return <div className="board">{blocks}</div>;
}

export default Chessboard;
