import { creatureSizes } from "../../config/creature/defaults/sizes";
import { rand } from "../array-randomizer";

export const damageModifierBySizeGenerator = (userConfig, generatedConfig) => {
  const { description: size, damage } = rand(creatureSizes);
  return {
    ...generatedConfig,
    size,
    damage: generatedConfig.damage + damage,
  };
};
