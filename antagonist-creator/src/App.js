import { useCallback, useState } from "react";
import "./App.css";
import Header, { HEADER_BUTTONS } from "./components/header/header";
import { UniqueEncounterModal } from "./components/modal/unique-encounter/unique-encounter.modal";
import { GuardiansModal } from "./components/modal/guardians/guardians.modal";
import { CreatureList } from "./components/creature-list/creature-list";

function App() {
  const [uniqueEncounterUserConfig, setUniqueEncounterUserConfig] = useState({});
    const [guardiansConfig, setGuardiansConfig] = useState({});
  const [isUniqueEncounterModalOpen, setIsUniqueEncounterModalOpen] = useState(false);
  const [isGuardiansModalOpen, setGuardiansModalOpen] = useState(false);

  const handleUniqueEncouterGenerate = useCallback((userConfig) => {
    setUniqueEncounterUserConfig(userConfig);
    setIsUniqueEncounterModalOpen(false);
  }, []);

  const handleMenuButtonClick = useCallback((button) => {
    switch (button) {
      case HEADER_BUTTONS.UNIQUE:
        setIsUniqueEncounterModalOpen(true);
        break;
      case HEADER_BUTTONS.GUARDIANS:
        setGuardiansModalOpen(true);
        break;
      case HEADER_BUTTONS.KNOWN_THREATS:
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className="App">
      <Header onMenuButtonClick={handleMenuButtonClick} />
      <UniqueEncounterModal onClose={() => setIsUniqueEncounterModalOpen(false)} isOpen={isUniqueEncounterModalOpen} onGenerateStart={handleUniqueEncouterGenerate} />
      <GuardiansModal onClose={() => setGuardiansModalOpen(false)} isOpen={isGuardiansModalOpen} onGenerateStart={setGuardiansConfig} />
      {Object.keys(uniqueEncounterUserConfig).length && (
        <CreatureList
          crewCount={uniqueEncounterUserConfig.crewCount}
          difficulty={uniqueEncounterUserConfig.difficulty}
          role={uniqueEncounterUserConfig.role}
          type={uniqueEncounterUserConfig.type}
        />
      )}
    </div>
  );
}

export default App;
