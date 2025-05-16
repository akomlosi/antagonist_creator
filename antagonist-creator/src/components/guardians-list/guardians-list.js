import { useEffect, useState } from "react";
import { encounterDifficulty } from "@config/difficulty.config";
import { rand } from "@utils/array-randomizer";
import { guardians } from "config/creature/guardians/guardians";
import { Guardiansheet } from "@components/guardians-sheet/guardians-sheet";

const GuardiansList = ({ difficulty, crewCount }) => {
  const [creatureConfigs, setCreatureConfigs] = useState([]);

  useEffect(() => {
    const randomGuardian = rand(guardians);
    const selectedDifficulty =
      encounterDifficulty[parseInt(crewCount, 10)][difficulty];
    const randomDifficulty = rand(selectedDifficulty);
    const creatures = [];

    randomDifficulty.map((difficulty) =>
      creatures.push(randomGuardian[difficulty])
    );
    if (creatures.length) {
      console.log("Guardians", creatures);
      setCreatureConfigs(creatures);
    }
  }, [crewCount, difficulty]);

  return (
    <>
      {creatureConfigs.map((creatureConfig, i) => {
        return (
          <Guardiansheet
            key={`creature-sheet-${i}`}
            creatureConfig={creatureConfig}
          />
        );
      })}
    </>
  );
};

export default GuardiansList;
