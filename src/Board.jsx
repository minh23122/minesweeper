// import { useState } from "react";
import Square from "./Square";

function Board() {
  const randomMines = [];
  while (randomMines.length < 10) {
    const randomMine = Math.floor(Math.random() * 100);
    const isUnique = randomMines.every((mine) => mine - randomMine !== 0);
    if (isUnique) randomMines.push(randomMine);
  }
  console.log(randomMines);
  const board = [];
  for (let i = 0; i < 10; i++) {
    board.push([]);
    for (let j = 0; j < 10; j++) {
      board[i].push(0);
    }
  }

  for (let i in randomMines) {
    let a = parseInt(randomMines[i] / 10);
    let b = randomMines[i] % 10;
    board[a][b] = -1;
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (board[i][j] != -1) {
        try {
          if (i < 9) {
            if (board[i + 1][j] == -1) board[i][j]++;
          }
          if (i > 0) {
            if (board[i - 1][j] == -1) board[i][j]++;
          }
          if (i < 9 && j < 9){
            if (board[i + 1][j + 1] == -1) board[i][j]++;
          }
          if (i > 0 && j < 9) {
            if (board[i - 1][j + 1] == -1) board[i][j]++;
          }
          if (i < 9 && j > 0) {
            if (board[i + 1][j - 1] == -1) board[i][j]++;
          }
          if (i > 0 && j > 0) {
            if (board[i - 1][j - 1] == -1) board[i][j]++;
          }
          if (j < 9) {
            if (board[i][j + 1] == -1) board[i][j]++;
          }
          if (j > 0) {
            if (board[i][j - 1] == -1) board[i][j]++;
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
  // const [xuathien, setXuathien]=useState("disappearance");
  return (
    <div>
      {board.map((row, rowIdx) => (
        <div style={{ display: "block" }} className="row" key={rowIdx}>
          {row.map((cell, cellIdx) => (
            <Square
              key={cellIdx}
              index={board[rowIdx][cellIdx]}
              onclick={(rowIdx,cellIdx)=>{
                // if(board[rowIdx,cellIdx]==-1){
                //   setXuathien("appearance");
                //   window.alert("You lose");
                //   location.reload();
                // }
                if(board[rowIdx,cellIdx]==0){
                  onclick(rowIdx,cellIdx+1);
                  onclick(rowIdx,cellIdx-1);
                  onclick(rowIdx+1,cellIdx+1);
                  onclick(rowIdx+1,cellIdx-1);
                  onclick(rowIdx-1,cellIdx+1);
                  onclick(rowIdx-1,cellIdx-1);
                  onclick(rowIdx+1,cellIdx);
                  onclick(rowIdx-1,cellIdx);
                }
                // else{
                  
                // }
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
