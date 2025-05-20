import { useEffect, useState } from "react";
import { encounterDifficulty } from "@config/difficulty.config";
import { rand } from "@utils/array-randomizer";
import { guardians } from "config/creature/guardians/guardians";
import { Guardiansheet } from "@components/guardians-sheet/guardians-sheet";
import { CreatureListHeader } from "@components/creature-list-header/creature-list-header";
import { CREATURE_TYPE } from "config/creature/defaults/types";

const GuardiansList = ({ difficulty, crewCount }) => {
  const [creatureConfigs, setCreatureConfigs] = useState([]);
  const [randomGuardian, setRandomGuardian] = useState({});

  useEffect(() => {
    const selectedRandomGuardian = rand(guardians);
    setRandomGuardian(selectedRandomGuardian);
    const selectedDifficulty =
      encounterDifficulty[parseInt(crewCount, 10)][difficulty];
    const randomDifficulty = rand(selectedDifficulty);
    const creatures = [];

    randomDifficulty.map((difficulty) => {
      const config = selectedRandomGuardian.config[difficulty];
      config.description = difficulty;
      return creatures.push(config);
    });
    if (creatures.length) {
      setCreatureConfigs(creatures);
    }
  }, [crewCount, difficulty, randomGuardian]);

  return (
    <>
      <CreatureListHeader
        name={randomGuardian.name}
        type={CREATURE_TYPE.GUARDIAN}
        role={randomGuardian.role}
      />
      <div className="list">
        {creatureConfigs.map((creature, i) => {
          return (
            <Guardiansheet
              key={`creature-sheet-${i}`}
              creatureConfig={creature}
            />
          );
        })}
      </div>
    </>
  );
};

export default GuardiansList;
