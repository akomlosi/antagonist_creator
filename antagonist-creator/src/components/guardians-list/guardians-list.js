import { useEffect } from "react";
import { encounterDifficulty } from "@config/difficulty.config";
import { rand } from "@utils/array-randomizer";
import { generate } from "@utils/antagonist-generator";

const GuardiansList = ({difficulty, crewCount}) => {

    //   useEffect(() => {
    //     const selectedDifficulty =
    //       encounterDifficulty[parseInt(crewCount, 10)][difficulty];
    //     const randomDifficulty = rand(selectedDifficulty);
    //     const creatures = [];
    
    //     randomDifficulty.map((difficulty) =>
    //       creatures.push(generate({ difficulty, type, role }))
    //     );
    //     if (creatures.length) {
    //       setCreatureConfigs(creatures);
    //     }
    //   }, [crewCount]);
}

export default GuardiansList;