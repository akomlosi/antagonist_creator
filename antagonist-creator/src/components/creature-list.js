import { encounterDifficulty } from "../config/difficulty.config";
import { generate } from "../utils/antagonist-generator";
import { rand } from "../utils/array-randomizer";
import { generateRandomCreatureName } from "../utils/generators/name-generator";
import { clearAll, read, save } from "../utils/local-storage";
import { CreatureSheet } from "./creature-sheet";
import { useCallback, useEffect, useMemo, useState } from "react";

export const CreatureList = ({ difficulty, crewCount, type, role }) => {
  const [creatureConfigs, setCreatureConfigs] = useState([]);
  const [storedCreatureLists, setStoredCreatureLists] = useState([]);

  const handleRegenerateClick = useCallback(() => {
    window.location.reload();
  }, []);

  const handleSaveClick = useCallback(() => {
    const customLabel = prompt("Give a label:");
    if (customLabel !== null) {
      save(creatureConfigs, customLabel);
      setStoredCreatureLists(read());
    }
    console.log(
      "TODO: SAVE IN LOCALSTORAGE: ",
      JSON.stringify(creatureConfigs)
    );
  }, [creatureConfigs]);

  const handleClearStorageClick = useCallback(() => {
    const confirmed = window.confirm("Clear all?");
    if (confirmed) {
      clearAll();
      setStoredCreatureLists([]);
    }
  }, []);

  const handleLoadSavedConfig = (savedConfigLabel) => {
    const confirmed = window.confirm(`Load "${savedConfigLabel}"?`);
    if (confirmed) {
      const storedData = read();
      setCreatureConfigs(storedData[savedConfigLabel]);
    }
  };

  useEffect(() => {
    const selectedDifficulty =
      encounterDifficulty[parseInt(crewCount, 10)][difficulty];
    const randomDifficulty = rand(selectedDifficulty);
    const creatures = [];

    randomDifficulty.map((difficulty) =>
      creatures.push(generate({ difficulty, type, role }))
    );
    if (creatures.length) {
      setCreatureConfigs(creatures);
    }
  }, [crewCount]);

  useEffect(() => {
    const storedData = read();
    if (storedData) {
      setStoredCreatureLists(storedData);
    }
  }, []);

  return (
    <>
      <span className="neutral">"{generateRandomCreatureName()}" | </span>
      <span className="neutral">{type} | </span>
      <span className="neutral">{role}</span>
      <div className="list">
        {creatureConfigs.map((creatureConfig, i) => {
          return (
            <CreatureSheet
              key={`creature-sheet-${i}`}
              creatureConfig={creatureConfig}
            />
          );
        })}
      </div>
      <div className="bottom_container">
        <button
          onClick={handleRegenerateClick}
          className="custom_button danger"
        >
          [regenerate]
        </button>
        <button
          onClick={handleSaveClick}
          className="custom_button text_highlighted"
        >
          [save]
        </button>
        <button
          onClick={handleClearStorageClick}
          className="custom_button text_highlighted"
        >
          [clear storage]
        </button>
        <div>
          {Object.keys(storedCreatureLists).map((entry, i) => (
            <button
              key={`entry-${i}`}
              onClick={() => handleLoadSavedConfig(entry)}
            >
              {entry}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
