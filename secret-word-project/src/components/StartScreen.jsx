import React from "react";
import "./StartScreen.css";

const StartScreen = ({ startGame, userName }) => {
  return (
    <div className="start">
      <h1>🎮 Secret Word 🎮</h1>
      <h2>Olá {userName}, seja bem vindo (a)</h2>
      <p>Clique no botão a baixo para iniciar o jogo.</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;
