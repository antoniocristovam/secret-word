import React from "react";
import "./GameOver.css";

const GameOver = ({ retry, score, userName, pickedWord }) => {
  return (
    <div>
      <h1>Fim de Jogo</h1>
      <h2>
        {userName} a sua pontuação foi: <span>{score}</span>
      </h2>
      <h3>A palavra era: {pickedWord}</h3>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  );
};

export default GameOver;
