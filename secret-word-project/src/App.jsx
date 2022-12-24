//CSS
import "./App.css";

// [] Array
// {} Objeto

//Styles

//React
import { useCallback, useEffect, useState } from "react";

//Dados
import { wordsList } from "./data/words";

//Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const guessesQty = 5;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  //Letras Adivinhadas
  const [guessedLetters, setGuessedLetters] = useState([]);
  //Letras Erradas
  const [wrongLetters, setWrongLetters] = useState([]);
  //Chances
  const [guesses, setGuesses] = useState(guessesQty);
  //Pontuação
  const [score, setScore] = useState(0);

  const pickedWordAndCategory = () => {
    //pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    //pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);

    return { word, category };
  };

  //Stars the secret word game
  const startGame = () => {
    //picked word and pick category
    const { word, category } = pickedWordAndCategory();

    //Create an Array of letter
    //Vai separa a palavra em todas as letras que tem
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(word, category);
    console.log(wordLetters);

    //Fill States
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  // process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // Check ifg letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }

    console.log(guessedLetters);
    console.log(wrongLetters);
  };

  //Restarts the game
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);

    setGameStage(stages[0].name);
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    // reset all states

    if (guesses <= 0) {
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
