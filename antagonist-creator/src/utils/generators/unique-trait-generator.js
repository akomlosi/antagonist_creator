import { uniqueTraits } from "../../config/creature/defaults/unique-traits";
import { EASY } from "../../config/difficulty.config";
import { rand } from "../array-randomizer";

export const uniqueTraitsGenerator = (userConfig, generatedConfig) => {
  if (userConfig.difficulty === EASY) {
    return generatedConfig;
  }

  const _generatedConfig = { ...generatedConfig };

  console.log("current: ", generatedConfig);
  const randomUniqueTrait = rand(uniqueTraits);
  console.log(randomUniqueTrait);

  Object.entries(randomUniqueTrait).forEach(([key, value]) => {
    if (_generatedConfig[key]) {
      if (typeof value === "number") {
        if (typeof _generatedConfig[key] === "string") {
          _generatedConfig[key] += value > 0 ? `+${value}` : `-${value}`;
        } else if (typeof _generatedConfig[key] === "number") {
          _generatedConfig[key] += value;
        }
      } else if (typeof value === "string") {
        _generatedConfig[key] += value;
      }
    }
  });

  return { ...generatedConfig, ..._generatedConfig };
};
