import { config } from "../config/antagonists-config";
import {
  availableDifficulties,
  encounterDifficulty,
} from "../config/difficulty.config";
import { generate } from "../utils/antagonist-generator";
import { rand } from "../utils/array-randomizer";
import { CreatureSheet } from "./creature-sheet";
import { useCallback, useEffect, useState } from "react";

export const CreatureList = () => {
  const { antagonists } = config;
  const params = new URL(window.location.href).searchParams;
  const crewCount = params.get("crew") || 1;
  const availableCrewCounts = ["1", "3", "5"];

  const [creatureConfigs, setCreatureConfigs] = useState([]);

  const handleRegenerateClick = useCallback(() => {
    window.location.reload();
  }, []);

  const handleSaveClick = useCallback(() => {
    console.log(
      "TODO: SAVE IN LOCALSTORAGE: ",
      JSON.stringify(creatureConfigs)
    );
  }, [creatureConfigs]);

  useEffect(() => {
    const creatures = [];
    randomDifficulty.map((difficulty) => {
      creatures.push(generate(antagonists, difficulty));
    });
    if (creatures.length) {
      setCreatureConfigs(creatures);
    }
  }, []);

  const difficulty = rand(availableDifficulties);
  const selectedDifficulty =
    encounterDifficulty[availableCrewCounts.indexOf(crewCount)][difficulty];
  const randomDifficulty = rand(selectedDifficulty);

  return (
    <>
      <div>Crew: {crewCount}</div>
      <div>difficulty: {JSON.stringify(randomDifficulty)}</div>
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
      <button onClick={handleRegenerateClick} className="regen_button danger">
        [regenerate]
      </button>
      <button
        onClick={handleSaveClick}
        className="save_button text_highlighted"
      >
        [save]
      </button>
    </>
  );
};
