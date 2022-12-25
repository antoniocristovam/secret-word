import React from "react";
import "./StartScreen.css";
import logo_sw from "./sw.png";

const StartScreen = ({ startGame, userName }) => {
  return (
    <div className="start">
      <img className="logo" width={450} src={logo_sw} alt="Logo sw" />
      {/* <h1>🎮 Secret Word 🎮</h1> */}
      <h2>Olá {userName}, seja bem vindo (a)</h2>
      <p>Clique no botão a baixo para iniciar o jogo.</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;
