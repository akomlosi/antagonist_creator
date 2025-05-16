import { useEffect } from "react";
import { encounterDifficulty } from "@config/difficulty.config";
import { rand } from "@utils/array-randomizer";
import { guardians } from "config/creature/guardians/guardians";

const GuardiansList = ({difficulty, crewCount}) => {

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
        //   setCreatureConfigs(creatures);
        }
      }, [crewCount, difficulty]);
}

export default GuardiansList;