//Selon la langue selectionnée, le texte s'adaptera en anglais ou en français
export const Header = () => {
  return (
    <header className="main-title">
      <h1>Hangman Game 🤯</h1>
      <p>Jeu du pendu, vous devez deviner le mot avant la fin ! Cliquez sur les lettres pour proposer une lettre</p>
      <p>Vous pouvez choisir la langue du jeu dans le sélecteur ci-dessous</p>
    </header>
  );
}

