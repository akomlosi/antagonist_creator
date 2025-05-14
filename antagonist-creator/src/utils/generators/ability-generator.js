import {
  abilities,
  psychicAbilities,
} from "../../config/creature/defaults/abilities";
import { ROLES } from "../../config/creature/defaults/roles";

export const abilityGenerator = (userConfig, generatedConfig) => {
  const { abilityNum } = generatedConfig;
  console.log("num: ", abilityNum);
  if (abilityNum <= 0) {
    return generatedConfig;
  }

  const { role } = userConfig;

  let shuffledAbilities;

  if (role === ROLES.PSYCHIC) {
    shuffledAbilities = [...psychicAbilities].sort(() => 0.5 - Math.random());
  } else {
    shuffledAbilities = [...abilities].sort(() => 0.5 - Math.random());
  }

  const randomAbilities = shuffledAbilities.slice(0, abilityNum);

  console.log(randomAbilities);

  return { ...generatedConfig, abilities: randomAbilities };
};
