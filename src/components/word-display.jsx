// Afficher le mot avec les lettres devinées et des _ pour les lettres manquantes

export const WordDisplay = ({ word, guessedLetters }) => {
  let displayWord = '';
  
  // Parcourir chaque lettre du mot
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    
    // Si c'est un tiret, l'afficher toujours
    if (char === '-') {
      displayWord = displayWord + '- ';
    } else if (guessedLetters.includes(char.toUpperCase())) { // si la lettre a été devinée (en majuscules pour comparer, je normalise), l'afficher
      // Si la lettre a été devinée, l'afficher
      displayWord = displayWord + char + ' '; // Ajouter un espace après chaque lettre pour l'affichage
    } else {
      // Sinon, afficher un underscore
      displayWord = displayWord + '_ ';
    }
  }

  return (
    <div className="word-display">
      <p className="word">{displayWord}</p>
    </div>
  );
}
