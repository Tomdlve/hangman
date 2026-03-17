// Sélecteur de langue pour choisir entre français et anglais

export const LanguageSelector = ({ selectedLocale, setSelectedLocale }) => {
  return (
    <div className="language-selector">
      <label htmlFor="language">Langue:</label>
      <select
        id="language"
        name="language"
        value={selectedLocale}
        onChange={(e) => setSelectedLocale(e.target.value)}
      >
        <option value="fr-FR">Français</option>
        <option value="en-GB">English</option>
      </select>
    </div>
  );
}
