// Afficher le clavier avec toutes les lettres

export const Keyboard = ({ guessedLetters, onLetterClick }) => {
  const alphabetical = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return (
    <div className="keyboard">
      {alphabetical.map((letter) => (
        <button
          key={letter}
          onClick={() => onLetterClick(letter)}
          disabled={guessedLetters.includes(letter)}
          className="keyboard__button"
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

