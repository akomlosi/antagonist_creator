import { config } from "../config/antagonists-config";
import {
  availableDifficulties,
  EASY,
  encounterDifficulty,
} from "../config/difficulty.config";
import { generate } from "../utils/antagonist-generator";
import { rand } from "../utils/array-randomizer";
import { clearAll, read, save } from "../utils/local-storage";
import { generateRandomCreatureName } from "../utils/name-generator";
import { CreatureSheet } from "./creature-sheet";
import { useCallback, useEffect, useMemo, useState } from "react";

export const CreatureList = () => {
  const { antagonists } = config;
  const params = new URL(window.location.href).searchParams;
  const crewCount = params.get("crew") || 1;
  const availableCrewCounts = ["1", "3", "5"];

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

  const mods = antagonists.mods;
  const { types, role } = mods;
  const randomType = useMemo(() => rand(types), [types]);
  const randomRole = useMemo(() => rand(role), [role]);
  console.log(randomRole);

  useEffect(() => {
    const difficulty = rand(availableDifficulties);
    const selectedDifficulty =
      encounterDifficulty[availableCrewCounts.indexOf(crewCount)][difficulty];
    const randomDifficulty = rand(selectedDifficulty);
    const creatures = [];

    randomDifficulty.map((difficulty) => {
      let r =
        parseInt(crewCount, 10) === 1 && difficulty === EASY
          ? role[0]
          : randomRole;
      return creatures.push(generate(antagonists, difficulty, randomType, r));
    });
    if (creatures.length) {
      setCreatureConfigs(creatures);
    }
  }, [antagonists, crewCount]);

  useEffect(() => {
    const storedData = read();
    if (storedData) {
      setStoredCreatureLists(storedData);
    }
  }, []);

  return (
    <>
      <span className="neutral">"{generateRandomCreatureName()}" | </span>
      <span className="neutral">{randomType} | </span>
      <span className="neutral">{randomRole.description}</span>
      <div className="list">
        {creatureConfigs.map((creatureConfig, i) => {
          return (
            <>
              <CreatureSheet
                key={`creature-sheet-${i}`}
                creatureConfig={creatureConfig}
              />
            </>
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
