// Main game component with game logic and API calls

import { useState, useEffect } from 'react';
import { HangmanDisplay } from './hangman-display.jsx';
import { WordDisplay } from './word-display.jsx';
import { Keyboard } from './keyboard.jsx';
import Confetti from 'react-confetti-boom';
export const Game = ({ selectedLocale }) => {
  // États du jeu
  const [word, setWord] = useState(''); // Le mot à deviner
  const [guessedLetters, setGuessedLetters] = useState([]); // je stock les lettres devinées par le joueur
  const [wrongGuesses, setWrongGuesses] = useState(0); // Nombre d'erreurs
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', ou 'lost' etats existants du jeu

  const maxWrongGuesses = 6; // Nombre maximum d'erreurs autorisées

  // Récupérer un nouveau mot quand la langue change ou au chargement du composant
  useEffect(() => {
    fetchNewWord();
  }, [selectedLocale]);

  const fetchNewWord = () => {
    // Appel à l'API pour récupérer un mot aléatoire
    fetch('https://hangman.alexischarp.fr/ ', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ // Envoyer la langue sélectionnée
        locale: selectedLocale
      })
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        // Initialisation du jeu avec le nouveau mot et autres états
        setWord(data.word);
        setGuessedLetters([]);
        setWrongGuesses(0);
        setGameStatus('playing');
      });
  };



  const handleLetterClick = (letter) => {

    // Ajouter la lettre devinée à la liste des lettres devinées
    const newGuessedLetters = guessedLetters.slice();
    newGuessedLetters.push(letter);
    setGuessedLetters(newGuessedLetters);


    // Vérifier si la lettre est dans le mot (en majuscules pour comparer)
    if (!word.toUpperCase().includes(letter)) {
      // Mauvaise réponse augmenter le compteur d'erreurs
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);

      // Si on a fait trop d'erreurs, le jeu est perdu
      if (newWrongGuesses >= maxWrongGuesses) {
        setGameStatus('lost');
      }
    } else {
      // Bonne réponse : vérifier si toutes les lettres du mot ont été trouvées
      let allLettersFound = true;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        // Ignorer les tirets dans la vérification
        if (char !== '-' && !newGuessedLetters.includes(char.toUpperCase())) {
          allLettersFound = false;
          break;
        }
      }

      // Si toutes les lettres sont trouvées, le jeu est gagné et on set le statut à 'won'
      if (allLettersFound) {
        setGameStatus('won');
      }
    }
  };

  return (




    <div className="game">

      <p className="word-length">Mot de {word.length} lettres</p>
      <HangmanDisplay wrongGuesses={wrongGuesses} />

      <WordDisplay word={word} guessedLetters={guessedLetters} />

      {gameStatus === 'won' && ( // Affiche un message de victoire si le statut du jeu est 'won' ) }
        <div className="game-message game-message--won">
          <Confetti />
          <h2>Félicitations ! Vous avez gagné !</h2>
          <p>Le mot était : <strong>{word}</strong></p>
        </div>
      )}

      {gameStatus === 'lost' && (
        <div className="game-message game-message--lost">
          <h2>Perdu !</h2>
          <p>Le mot était : <strong>{word}</strong></p>
        </div>
      )}

      le mot : {word}

      <Keyboard
        onLetterClick={handleLetterClick}
        guessedLetters={guessedLetters}
        disabled={gameStatus !== 'playing'}
      />

      {gameStatus !== 'playing' && (
        <button onClick={fetchNewWord} className="restart-button">
          Nouvelle partie
        </button>
      )}
    </div>
  );
}