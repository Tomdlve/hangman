import { useState } from 'react';
import { Header } from './components/header.jsx';
import { LanguageSelector } from './components/language-selector.jsx';
import { Game } from './components/game.jsx';
import './styles/styles.css'; 

const App = () => {

  // État pour la langue sélectionnée
  const [selectedLocale, setSelectedLocale] = useState('fr-FR');

  return (
    <section>
      <Header />
      <LanguageSelector setSelectedLocale={setSelectedLocale} />
      <Game selectedLocale={selectedLocale} />
    </section>
  );
}

export default App;
