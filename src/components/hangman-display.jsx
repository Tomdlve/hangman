// Progressive hangman drawing shown as wrongGuesses increases
export const HangmanDisplay = ({ wrongGuesses }) => {
  const maxWrongGuesses = 6;

  return (
    <div className="hangman-display">
      <svg width="160" height="220" viewBox="0 0 160 220" aria-hidden>
        {wrongGuesses >= 1 && (
          <line x1="10" y1="200" x2="150" y2="200" stroke="#222" strokeWidth="4" />
        )}

        {wrongGuesses >= 2 && (
          <line x1="40" y1="200" x2="40" y2="20" stroke="#222" strokeWidth="4" />
        )}

        {wrongGuesses >= 3 && (
          <>
            <line x1="40" y1="20" x2="110" y2="20" stroke="#222" strokeWidth="4" />
            <line x1="110" y1="20" x2="110" y2="45" stroke="#222" strokeWidth="3" />
          </>
        )}

        {wrongGuesses >= 4 && (
          <circle cx="110" cy="65" r="18" stroke="#222" strokeWidth="3" fill="transparent" />
        )}

        {wrongGuesses >= 5 && (
          <line x1="110" y1="83" x2="110" y2="135" stroke="#222" strokeWidth="3" />
        )}

        {wrongGuesses >= 6 && (
          <>
            <line x1="110" y1="95" x2="85" y2="115" stroke="#222" strokeWidth="3" />
            <line x1="110" y1="95" x2="135" y2="115" stroke="#222" strokeWidth="3" />
            <line x1="110" y1="135" x2="90" y2="175" stroke="#222" strokeWidth="3" />
            <line x1="110" y1="135" x2="130" y2="175" stroke="#222" strokeWidth="3" />
          </>
        )}
      </svg>

      <p className="guesses-counter">Erreurs: {wrongGuesses} / {maxWrongGuesses}</p>
    </div>
  );
};



