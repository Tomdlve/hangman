import { useState } from 'react';
import { Header } from './components/Header.jsx';
import { LanguageSelector } from './components/LanguageSelector.jsx';
import { Game } from './components/Game.jsx';
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
