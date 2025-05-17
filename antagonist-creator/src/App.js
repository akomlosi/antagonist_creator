import { useCallback, useState } from "react";
import "./App.css";
import Header, { HEADER_BUTTONS } from "@components/header/header";
import { UniqueEncounterModal } from "@components/modal/unique-encounter/unique-encounter.modal";
import { GuardiansModal } from "@components/modal/guardians/guardians.modal";
import { CreatureList } from "@components/creature-list/creature-list";
import GuardiansList from "@components/guardians-list/guardians-list";
import { AboutModal } from "@components/modal/about/about.modal";

function App() {
  const [uniqueEncounterUserConfig, setUniqueEncounterUserConfig] = useState(
    {}
  );
  const [guardiansConfig, setGuardiansConfig] = useState({});
  const [isUniqueEncounterModalOpen, setIsUniqueEncounterModalOpen] =
    useState(false);
  const [isGuardiansModalOpen, setGuardiansModalOpen] = useState(false);
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);

  const handleGuardiansGenerate = useCallback((userConfig) => {
    setGuardiansConfig(userConfig);
    setIsUniqueEncounterModalOpen(false);
    setUniqueEncounterUserConfig({});
  }, []);

  const handleUniqueEncouterGenerate = useCallback((userConfig) => {
    setUniqueEncounterUserConfig(userConfig);
    setIsUniqueEncounterModalOpen(false);
    setGuardiansConfig({});
  }, []);

  const handleMenuButtonClick = useCallback((button) => {
    setIsUniqueEncounterModalOpen(false);
    setGuardiansModalOpen(false);
    switch (button) {
      case HEADER_BUTTONS.UNIQUE:
        setIsUniqueEncounterModalOpen(true);
        break;
      case HEADER_BUTTONS.GUARDIANS:
        setGuardiansModalOpen(true);
        break;
      case HEADER_BUTTONS.KNOWN_THREATS:
        break;
      case HEADER_BUTTONS.ABOUT:
        setAboutModalOpen(true);
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className="App">
      <Header onMenuButtonClick={handleMenuButtonClick} />
      <div className="main-content">
        <UniqueEncounterModal
          onClose={() => setIsUniqueEncounterModalOpen(false)}
          isOpen={isUniqueEncounterModalOpen}
          onGenerateStart={handleUniqueEncouterGenerate}
        />
        <GuardiansModal
          onClose={() => setGuardiansModalOpen(false)}
          isOpen={isGuardiansModalOpen}
          onGenerateStart={handleGuardiansGenerate}
        />
        <AboutModal
          onClose={() => setAboutModalOpen(false)}
          isOpen={isAboutModalOpen}
        />

        {Object.keys(uniqueEncounterUserConfig).length && (
          <CreatureList
            crewCount={uniqueEncounterUserConfig.crewCount}
            difficulty={uniqueEncounterUserConfig.difficulty}
            role={uniqueEncounterUserConfig.role}
            type={uniqueEncounterUserConfig.type}
          />
        )}
        {Object.keys(guardiansConfig).length && (
          <GuardiansList
            difficulty={guardiansConfig.difficulty}
            crewCount={guardiansConfig.crewCount}
          />
        )}
      </div>
    </div>
  );
}

export default App;
